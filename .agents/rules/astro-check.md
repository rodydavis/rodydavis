# Astro Check & Code Quality Rules

Always adhere to the following rules when working on this project:

## 🧪 Post-Modification Diagnostics (Mandatory)
* **Rule**: You MUST execute static diagnostics using `pnpm run check` (or `npx astro check`) after making modifications to any components, pages, or layout files.
* **Goal**: Proactively capture and resolve any TypeScript, JSX, or unused variable errors before finalizing your changes.

## 🎨 Lucide-React Prop Convention in Astro
* **Rule**: When using icons imported from `lucide-react` within Astro/React components, you MUST always use the `className` attribute (not `class`).
* **Reason**: Using `class` on these components causes type conflict errors (`ts(2322)`) during compilation and will break the static build.
