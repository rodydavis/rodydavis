import {
  type ReadonlySignal,
  Signal,
  computed,
  effect,
  signal,
} from "@preact/signals-core";
import { type TemplateResult, CSSResult, render, unsafeCSS, html } from "lit";
import { type Constructable, Mixin } from "./mixwith.js";

export type Style = string | CSSResult | CSSStyleSheet;

export const CleanupMixin = (superclass: Constructable<HTMLElement>) =>
  class extends superclass {
    constructor(...args: any[]) {
      super(...args);
    }

    cleanup: (() => void)[] = [];

    initCleanup() {
      this.cleanup.forEach((cleanup) => cleanup());
    }

    disconnectedCallback() {
      this.initCleanup();
    }
  };

export const ReactiveAttributesMixin = Mixin(
  (superclass: Constructable<HTMLElement>) =>
    class extends CleanupMixin(superclass) {
      constructor(...args: any[]) {
        super(...args);
      }

      attrs = new Map<string, Signal>();

      attr(key: string, fallback?: string, reflect?: boolean): Signal<string> {
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

      attributeChangedCallback(
        _name: string,
        _olvValue: string,
        _newValue: string
      ) {
        if (this.attrs.has(_name)) {
          const s = this.attrs.get(_name)!;
          if (s.value !== _newValue) s.value = _newValue;
        }
      }
    }
);

export const FormInternalsMixin = (superclass: Constructable<HTMLElement>) =>
  class extends superclass {
    static formAssociated = true;

    constructor(...args: any[]) {
      super(...args);
      // @ts-ignore
      this.internals_ = this.attachInternals();
    }
  };

export const LitTemplateMixin = Mixin(
  (superclass: Constructable<HTMLElement>) =>
    class extends ReactiveAttributesMixin(superclass) {
      builder: ReadonlySignal<TemplateResult> = signal(html``);

      getRoot(): HTMLElement | ShadowRoot {
        return this;
      }

      connectedCallback() {
        // @ts-ignore
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
  (superclass: Constructable<HTMLElement>) =>
    class extends CleanupMixin(superclass) {
      styles: ReadonlySignal<Style | Array<Style>> = computed(() => []);

      sheets = computed(() => {
        const value = this.styles.value;
        const styles: CSSStyleSheet[] = [];
        const array = Array.isArray(value) ? value : [value];
        for (const style of array) {
          if (style instanceof CSSStyleSheet) {
            styles.push(style);
          } else {
            const result =
              typeof style == "string" //
                ? unsafeCSS(style)
                : (style as CSSResult);
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

      getRoot(): ShadowRoot {
        let root = this.shadowRoot;
        if (!root) {
          root = this.attachShadow({ mode: "open" });
        }
        return root;
      }

      connectedCallback() {
        // @ts-ignore
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
