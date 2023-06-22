(function () {
  const projectsLink = document.querySelector('.projects-link a');

  if (!projectsLink) return;

  projectsLink.addEventListener('click', function (e) {
    console.log('projects link clicked');

    e.preventDefault();

    const projects = document.querySelector('#projects');

    if (!projects) return;

    projects.scrollIntoView({
      behavior: 'smooth'
    });
  });
}());
