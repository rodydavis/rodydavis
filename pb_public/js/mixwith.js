// @source https://github.com/justinweinberg/mixwith.ts
// used by apply() and isApplicationOf()
const _appliedMixin = "__mixwith_appliedMixin";
/**
 * Applies `mixin` to `superclass`.
 *
 * `apply` stores a reference from the mixin application to the unwrapped mixin
 * to make `isApplicationOf` and `hasMixin` work.
 *
 * This function is useful for mixin wrappers that want to automatically enable
 * {@link hasMixin} support.
 *
 * @typeParam C - The constructor type of the superclass.
 * @typeParam T - The resulting type of the mixin.
 * @template {Constructable} C
 * @template T
 * @param {C} superclass - The superclass to which the mixin will be applied.
 * @param {mixin<C, T>} mixin - The mixin function that provides additional behavior to the superclass.
 * @returns {T} - A new class with the mixin's behavior applied.
 */
export const apply = (superclass, mixin) => {
    const application = mixin(superclass);
    application.prototype[_appliedMixin] = unwrap(mixin);
    return application;
};
/**
 * Returns `true` iff `proto` is a prototype created by the application of
 * `mixin` to a superclass.
 *
 * `isApplicationOf` works by checking that `proto` has a reference to `mixin`
 * as created by `apply`.
 *
 * @typeParam T - The type of the mixin.
 * @template T
 * @param {object} proto [object Object],[object Object],[object Object]
 * @param {T} mixin [object Object],[object Object],[object Object]
 * @return {boolean} whether `proto` is a prototype created by the application of
 * `mixin` to a superclass
 */
export const isApplicationOf = (proto, mixin) => Object.hasOwn(proto, _appliedMixin) &&
    proto[_appliedMixin] === unwrap(mixin);
/**
 * Checks if the provided mixin has been applied to the given prototype object.
 *
 * @typeParam T - The type of the mixin.
 * @template T
 * @param {object} o
 * @param {T} mixin [object Object],[object Object],[object Object]
 * @returns {boolean} - Returns true if the mixin has been applied, otherwise false.
 */
export const hasMixin = (o, mixin) => {
    while (o != null) {
        if (isApplicationOf(o, mixin))
            return true;
        o = Object.getPrototypeOf(o);
    }
    return false;
};
// used by wrap() and unwrap()
const _wrappedMixin = "__mixwith_wrappedMixin";
/**
 * Sets up the function `mixin` to be wrapped by the function `wrapper`, while
 * allowing properties on `mixin` to be available via `wrapper`, and allowing
 * `wrapper` to be unwrapped to get to the original function.
 *
 * `wrap` does two things:
 *   1. Sets the prototype of `mixin` to `wrapper` so that properties set on
 *      `mixin` inherited by `wrapper`.
 *   2. Sets a special property on `mixin` that points back to `mixin` so that
 *      it can be retreived from `wrapper`
 *
 * @function
 * @typeParam C - The type of the constructor of the mixin.
 * @typeParam T - The type of the mixin instance.
 * @template {Constructable} C
 * @template T
 * @param {mixin<C, T>} mixin - The mixin to be wrapped.
 * @param {mixin<C, T>} wrapper - The wrapper mixin.
 * @returns {mixin<C, T>} - Returns the wrapper mixin.
 */
export const wrap = (mixin, wrapper) => {
    Object.setPrototypeOf(wrapper, mixin);
    if (!mixin[_wrappedMixin]) {
        mixin[_wrappedMixin] = mixin;
    }
    return wrapper;
};
/**
 * Unwraps the function `wrapper` to return the original function wrapped by
 * one or more calls to `wrap`. Returns `wrapper` if it's not a wrapped
 * function.
 *
 * @typeParam T - The type of the wrapped mixin.
 * @template T
 * @param {T} wrapper - The wrapped mixin.
 * @returns {T} - Returns the original mixin if available, otherwise the wrapper itself.
 */
export const unwrap = (wrapper) => {
    return wrapper[_wrappedMixin] || wrapper;
};
/**
 * Decorates `mixin` so that it only applies if it's not already on the
 * prototype chain.
 *
 * @typeParam C - The constructor type representing the original superclass.
 * @typeParam T - The return type of the mixin function.
 * @template {Constructable} C
 * @template T
 * @param {mixin<C, T>} mixin - The mixin function to be deduplicated.
 * @returns {mixin<C, T>} - A deduplicated mixin that extends the original superclass if needed.
 */
export function DeDupe(mixin) {
    const dupeWrapper = (superclass) => hasMixin(superclass.prototype, mixin)
        ? superclass
        : mixin(superclass);
    return wrap(mixin, dupeWrapper);
}
// used by HasInstance()
const _instancedMixin = "__mixwith_instanceOf";
/**
 * Adds a Symbol.hasInstance implementation to the provided mixin object to enable the use of the
 * `instanceof` operator with instances of classes that include the mixin.
 *
 * @typeParam T - The type of the mixin object.
 * @template T
 * @param {T} mixin - The mixin object to be enhanced with the Symbol.hasInstance implementation.
 * @returns {T} - The mixin object with the Symbol.hasInstance implementation.
 */
export const HasInstance = (mixin) => {
    if (!mixin[_instancedMixin]) {
        mixin[_instancedMixin] = true;
        Object.defineProperty(mixin, Symbol.hasInstance, {
            value(o) {
                return hasMixin(o, mixin);
            },
        });
    }
    return mixin;
};
/**
 * A basic mixin decorator that applies the mixin using the {@link apply} function so that it
 * can be used with {@link isApplicationOf}, {@link hasMixin}, and other mixin decorator functions.
 *
 * @typeParam C - The constructor type representing the original superclass.
 * @typeParam T - The return type of the mixin function.
 * @template {Constructable} C
 * @template T
 * @param {mixin<C, T>} mixin - The mixin to wrap.
 * @returns {mixin<C, T>} - A new mixin function.
 */
export const BareMixin = (mixin) => wrap(mixin, (s) => apply(s, mixin));
/**
 * Decorates a mixin function to add deduplication, application caching, and instanceof support.
 *
 * @typeParam C - The constructor type representing the original superclass.
 * @typeParam T - The return type of the mixin function.
 * @template {Constructable} C
 * @template T
 * @param {mixin<C, T>} mixin - The mixin to wrap.
 * @returns {mixin<C, T>} - A new mixin function.
 */
export const Mixin = (mixin) => DeDupe(BareMixin(HasInstance(mixin)));
/**
 * A fluent interface to apply a list of mixins to a superclass.
 *
 * ```typescript
 * class X extends mix(Object).with(A, B, C) {}
 * ```
 *
 * The mixins are applied in order to the superclass, so the prototype chain
 * will be: X->C'->B'->A'->Object.
 *
 * This is purely a convenience function. The above example is equivalent to:
 *
 * ```typescript
 * C = Mixin(C)
 * B = Mixin(B)
 * A = Mixin(A)
 * class X extends C(B(A(Object))) {}
 * ```
 *
 * @function
 * @template {Constructable} C
 * @param {C} [superclass] - The superclass to which the mixin will be applied. If not defined, it defaults to `class {}`.
 * @return {MixinBuilder<C>} - A builder object to apply mixins to the superclass.
 */
export const mix = (superclass) => new MixinBuilder(superclass);
/**
 *  MixinBuilder helper class (returned by mix()).
 */
export class MixinBuilder {
    superclass;
    /**
       * @param {Base} [superclass]
       */
    constructor(superclass) {
        this.superclass = superclass;
    }
    /**
     * Applies a chain of mixins to a base class. The method supports up to six mixins.
     * The mixins are applied in reverse sequence (e.g. the right most mixin is applied first, etc.)
     * @method
       * @template {Constructable} A
       * @template {Constructable} B
       * @template {Constructable} C
       * @template {Constructable} D
       * @template {Constructable} E
       * @template {Constructable} F
       * @param {mixin<Base, A>} a - A mixin to apply.
       * @param {mixin<A, B>} [b] - A mixin to apply (optional).
       * @param {mixin<B, C>} [c] - A mixin to apply (optional).
       * @param {mixin<C, D>} [d] - A mixin to apply (optional).
       * @param {mixin<D, E>} [e] - A mixin to apply (optional).
       * @param {mixin<E, F>} [f] - A mixin to apply (optional).
       * @returns {Base & A & B & C & D & E & F} - A new class constructor that includes the functionalities
       *   of all mixins and the base class.
       */
    with(a, b, c, d, e, f) {
        this.superclass = this.superclass ?? class {
        };
        const a_m = Mixin(a);
        const b_m = b ? Mixin(b) : undefined;
        const c_m = c ? Mixin(c) : undefined;
        const d_m = d ? Mixin(d) : undefined;
        const e_m = e ? Mixin(e) : undefined;
        const f_m = f ? Mixin(f) : undefined;
        if (f_m && e_m && d_m && c_m && b_m && a_m) {
            return f_m(e_m(d_m(c_m(b_m(a_m(this.superclass))))));
        }
        else if (e_m && d_m && c_m && b_m && a_m) {
            return e_m(d_m(c_m(b_m(a_m(this.superclass)))));
        }
        else if (d_m && c_m && b_m && a_m) {
            return d_m(c_m(b_m(a_m(this.superclass))));
        }
        else if (c_m && b_m && a_m) {
            return c_m(b_m(a_m(this.superclass)));
        }
        else if (b_m && a_m) {
            return b_m(a_m(this.superclass));
        }
        else {
            return a_m(this.superclass);
        }
    }
}
/**
 * @typedef {new (...args: any[]) => T} Constructable
 * @template [T={}]
 */
/**
 * @typedef {(args: C) => T} mixin
 * @template {Constructable} C
 * @template T
 */
