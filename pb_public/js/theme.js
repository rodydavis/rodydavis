const el = document.body;
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

// Updated to use oklch(35% 0.47 258)
el.style.setProperty("--source-hue", "258");
// el.style.setProperty("--source-saturation", "50%"); // Old HSL saturation
el.style.setProperty("--source-lightness", "0.35"); // Added for oklch L value
el.style.setProperty("--source-chroma", "0.47"); // Added for oklch C value


prefersDark.addEventListener('change', e => {
  el.classList.toggle('dark-theme', e.matches);
  el.classList.toggle('light-theme', !e.matches);
});
el.classList.toggle('dark-theme', prefersDark.matches);
el.classList.toggle('light-theme', !prefersDark.matches);