// VS Code Activity Bar Interactivity
// Highlights the active icon and could be extended to switch content sections

document.addEventListener('DOMContentLoaded', function () {
  const icons = document.querySelectorAll('.vscode-activitybar .activity-icon');
  icons.forEach(icon => {
    icon.addEventListener('click', function () {
      icons.forEach(i => i.classList.remove('active'));
      this.classList.add('active');
      // Optionally show/hide main content sections here
      const sectionMap = [
        'posts-section',
        'apps-section',
        'tags-section',
        'social-section'
      ];
      sectionMap.forEach((id, idx) => {
        const el = document.getElementById(id);
        if (el) el.style.display = (icons[idx] === this) ? '' : 'none';
      });
    });
  });
  // Set the first icon as active by default and show the first section
  if (icons.length > 0) {
    icons[0].classList.add('active');
    const sectionMap = [
      'posts-section',
      'apps-section',
      'tags-section',
      'social-section'
    ];
    sectionMap.forEach((id, idx) => {
      const el = document.getElementById(id);
      if (el) el.style.display = (idx === 0) ? '' : 'none';
    });
  }
});
