/** @import { CSSResult, SVGTemplateResult, TemplateResult } from 'lit' */
/** @import { ReadonlySignal, Signal } from '@preact/signals-core' */
import { html, render, unsafeCSS } from "lit";
import { computed, effect, signal } from "@preact/signals-core";
/**
 * @template {Constructor} TBase
 * @param {TBase} Base
 * @returns {{ new (...args: any[]): (Anonymous class); prototype: WithCleanup<any>.(Anonymous class); } & TBase}
 */
export function WithCleanup(Base) {
  return class extends Base {
    cleanup = [];
    disconnectedCallback() {
      this.cleanup.forEach((cleanup) => cleanup());
    }
  };
}
/**
 * @template {Constructor} TBase
 * @param {TBase} Base
 * @returns {{ new (...args: any[]): (Anonymous class); prototype: WithReactiveAttributes<any>.(Anonymous class); } & TBase}
 */
export function WithReactiveAttributes(Base) {
  return class extends WithCleanup(Base) {
    attrs = new Map();
    constructor(...args) {
      super(...args);
    }
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
      if (this.attrs.has(_name)) {
        const s = this.attrs.get(_name);
        if (s.value !== _newValue) s.value = _newValue;
      }
    }
  };
}
/**
 * @template {Constructor} TBase
 * @param {TBase} Base
 * @returns {{ new (...args: any[]): (Anonymous class); prototype: WithFormInternals<any>.(Anonymous class); formAssociated: boolean; } & TBase}
 */
export function WithFormInternals(Base) {
  return class extends Base {
    static formAssociated = true;
    constructor(...args) {
      super(...args);
      // @ts-ignore
      this.internals_ = this.attachInternals();
    }
  };
}
/**
 * @template {Constructor} TBase
 * @param {TBase} Base
 * @returns {{ new (...args: any[]): (Anonymous class); prototype: WithLitTemplate<any>.(Anonymous class); } & TBase}
 */
export function WithLitTemplate(Base) {
  return class extends WithReactiveAttributes(WithCleanup(Base)) {
    builder = signal(html``);
    getRoot() {
      return this;
    }
    initRender() {
      this.cleanup.push(
        effect(() => {
          render(this.builder.value, this.getRoot());
        })
      );
    }
    connectedCallback() {
      this.initRender();
    }
  };
}
/**
 * @template {Constructor} TBase
 * @param {TBase} Base
 * @returns {{ new (...args: any[]): (Anonymous class); prototype: WithShadowRoot<any>.(Anonymous class); } & TBase}
 */
export function WithShadowRoot(Base) {
  return class extends WithLitTemplate(Base) {
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
      this.initRender();
      this.cleanup.push(
        effect(() => {
          const root = this.getRoot();
          root.adoptedStyleSheets = this.sheets.value;
        })
      );
    }
  };
}
/** @typedef {string | CSSResult | CSSStyleSheet} Style */
/**
 * @typedef {new (
 *   ...args: any[]
 * ) => T} Constructor
 * @template {HTMLElement} [T=HTMLElement]
 */
