document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();
  const buttons = document.querySelectorAll('.filter-btn');
  const projects = document.querySelectorAll('.project-card');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;

      buttons.forEach((item) => {
        item.classList.toggle('is-active', item === button);
      });

      projects.forEach((project) => {
        const shouldHide = filter !== 'all' && project.dataset.category !== filter;
        project.classList.toggle('is-hidden', shouldHide);
      });
    });
  });
});
