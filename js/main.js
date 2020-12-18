import Data from './data.js';

console.log(Data);
const { navs, about, projects } = Data;

// console.log(navs);
// console.log(about);

const generateNav = (data) => {
  const html = data.map(item => `<a href="${item.link}">${item.name}</a>`).join('');
  return html;
};

const generateAbout = (data) => {
  const html = `
  <div id="profile">
    <img src="${data.imgSrc}" alt="Profile picture">
    <h1>${data.title}<h1>
    <h3>${data.subtitle}</h3>
  </div>
  <div id="bio">
    <h2>${data.bioIntro}</h2>
    <p>${data.bioBody}</p>
  </div>
  `;
  return html;
};

const generateProjects = (data) => {
  const projects = data.map(project => {
    let projectHtml = `
    <article class="project">
      <h4>${project.title}</h4>
      <img src="${project.imgSrc}" alt="${project.title}. ${project.description}" />
      <p>${project.description}</p>
    `;
    if (project.demoUrl) {
      projectHtml += `
      <button onclick="window.location.href='${project.demoUrl}'">Demo</button>
      `;
    }
    projectHtml += `
    <button onclick="window.location.href='${project.githubUrl}'">GitHub</button>
    </article>
    `;
    return projectHtml;
  }).join('');
  const html = `
  <h2>My Recent Work</h2>
  <p>Check out a few projects that I've been working on<p>
  ${projects}
  `;
  return html;
}

// Render nav
const $nav = document.querySelector('nav');
// console.log($nav.innerHTML);
const navSection = generateNav(navs);
// console.log(navSection);
// $nav.innerText = navSection;
$nav.insertAdjacentHTML('afterbegin', navSection);

// Render about
const $about = document.querySelector('.about');
// console.log($about);
const aboutSection = generateAbout(about);
// console.log(aboutSection);
// $about.innerHTML = aboutSection;
$about.insertAdjacentHTML('afterbegin', aboutSection);

// Render projects
const $projects = document.querySelector('.projects');
const projectSection = generateProjects(projects);
$projects.insertAdjacentHTML('afterbegin', projectSection);
