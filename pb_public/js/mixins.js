/** @import { ReadonlySignal, Signal } from '@preact/signals-core' */
/** @import { TemplateResult, CSSResult } from 'lit' */
/** @import { Constructable } from './mixwith.js' */
import { computed, effect, signal } from "@preact/signals-core";
import { render, unsafeCSS, html } from "lit";
import { Mixin } from "/js/mixwith.js";

/** @typedef {new (...args: any[]) => any} Constructor */

/**
 * @param {Constructable<HTMLElement>} superclass
 * @returns {typeof (Anonymous class)}
 */
export const CleanupMixin = (superclass) =>
  class extends superclass {
    constructor(...args) {
      super(...args);
    }
    cleanup = [];
    disconnectedCallback() {
      if (super.disconnectedCallback) super.disconnectedCallback();
      this.cleanup.forEach((cleanup) => cleanup());
    }
  };
export const ReactiveAttributesMixin = Mixin(
  (superclass) =>
    class extends CleanupMixin(superclass) {
      constructor(...args) {
        super(...args);
      }
      attrs = new Map();
      attr(key, fallback, reflect) {
        const val = this.getAttribute(key);
        const s = signal(val ?? fallback ?? "");
        this.attrs.set(key, s);
        if (reflect === true) {
          this.cleanup.push(
            effect(() => {
              this.setAttribute(key, s.value);
            })
          );
        }
        return s;
      }
      attributeChangedCallback(_name, _olvValue, _newValue) {
        if (super.attributeChangedCallback) {
          super.attributeChangedCallback(_name, _olvValue, _newValue);
        }
        if (this.attrs.has(_name)) {
          const s = this.attrs.get(_name);
          if (s.value !== _newValue) s.value = _newValue;
        }
      }
    }
);
/**
 * @param {Constructable<HTMLElement>} superclass
 * @returns {typeof (Anonymous class)}
 */
export const FormInternalsMixin = (superclass) =>
  class extends superclass {
    static formAssociated = true;
    constructor(...args) {
      super(...args);
      this.internals_ = this.attachInternals();
    }
  };
export const LitTemplateMixin = Mixin(
  (superclass) =>
    class extends ReactiveAttributesMixin(superclass) {
      builder = signal(html``);
      getRoot() {
        return this;
      }
      connectedCallback() {
        if (super.connectedCallback) super.connectedCallback();
        this.cleanup.push(
          effect(() => {
            render(this.builder.value, this.getRoot());
          })
        );
      }
    }
);
export const ShadowRootMixin = Mixin(
  (superclass) =>
    class extends CleanupMixin(superclass) {
      styles = computed(() => []);
      sheets = computed(() => {
        const value = this.styles.value;
        const styles = [];
        const array = Array.isArray(value) ? value : [value];
        for (const style of array) {
          if (style instanceof CSSStyleSheet) {
            styles.push(style);
          } else {
            const result =
              typeof style == "string" //
                ? unsafeCSS(style)
                : style;
            const sheet = result.styleSheet;
            if (sheet) {
              styles.push(sheet);
            } else {
              const sheet = new CSSStyleSheet();
              sheet.replaceSync(result.cssText);
              styles.push(sheet);
            }
          }
        }
        return styles;
      });
      getRoot() {
        let root = this.shadowRoot;
        if (!root) {
          root = this.attachShadow({ mode: "open" });
        }
        return root;
      }
      connectedCallback() {
        if (super.connectedCallback) super.connectedCallback();
        this.cleanup.push(
          effect(() => {
            const root = this.getRoot();
            root.adoptedStyleSheets = this.sheets.value;
          })
        );
      }
    }
);
/** @typedef {string | CSSResult | CSSStyleSheet} Style */
