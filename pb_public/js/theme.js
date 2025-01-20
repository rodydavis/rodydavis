const el = document.body;
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

el.style.setProperty("--source-hue", "220");
el.style.setProperty("--source-saturation", "50%");

prefersDark.addEventListener('change', e => {
  el.classList.toggle('dark-theme', e.matches);
  el.classList.toggle('light-theme', !e.matches);
});
el.classList.toggle('dark-theme', prefersDark.matches);
el.classList.toggle('light-theme', !prefersDark.matches);