import Data from './data.js';

console.log(Data);
const { navs, about, projects, resume, contact } = Data;

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
    <article>
      <h4>${project.title}</h4>
      <img src="${project.imgSrc}" alt="${project.title}. ${project.description}" />
      <p>${project.description}</p>
    `;
    if (project.demoUrl) {
      projectHtml += `
      <button onClick="window.location.href='${project.demoUrl}'">Demo</button>
      `;
    }
    projectHtml += `
    <button onClick="window.location.href='${project.githubUrl}'">GitHub</button>
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
};

const generateResume = (data) => {
  const workExperience = data.workExperience.map(job => {
    const jobHtml = `
    <article>
      <h4>${job.title}</h4>
      <p>${job.company} | ${job.date}</p>
      <p>${job.description}</p>
    </article>
    `;
    return jobHtml;
  }).join('');

  const education = data.education.map(school => {
    const educationHtml = `
    <article>
      <h4>${school.diploma}</h4>
      <p>${school.name} | ${school.date}</p>
    </article>
    `;
    return educationHtml;
  }).join('');

  const generateSkillsList = list => list.map(skill => `<li>${skill}</li>`).join('');

  const skills = `
  <h4>Front-end</h4>
  <ul>
    ${generateSkillsList(data.skills.frontend)}
  </ul>
  <h4>Back-end</h4>
  <ul>
    ${generateSkillsList(data.skills.backend)}
  </ul>
  <h4>Testing</h4>
  <ul>
    ${generateSkillsList(data.skills.testing)}
  </ul>
  <h4>Tools</h4>
  <ul>
    ${generateSkillsList(data.skills.tools)}
  </ul>
  `;

  const html = `
  <h2>My Resume</h2>
  <p>Here's a summary of my experiences and skills</p>
  <button onClick="window.open('${data.resumeDownloadUrl}')">Download Resume</button>
  <div class="resume-left">
    <div class="experience">
      <h3>Work Experience</h3>
      ${workExperience}
    </div>
    <div class="education">
      <h3>Education</h3>
      ${education}
    </div>
  </div>
  <div class="resume-right">
    <div class="skills">
      <h3>Skills</h3>
      ${skills}
    </div>
  </div>
  `;
  return html;
};

const generateContact = (data) => {
  const contacts = data.map(contact => `${contact.name}`).join('');
  const html = `
  <h4>Want to get in touch?</h4>
  ${contacts}
  `
  return html;
};

// Render nav
const $nav = document.querySelector('nav');
const navSection = generateNav(navs);
$nav.insertAdjacentHTML('afterbegin', navSection);

// Render about
const $about = document.querySelector('.about');
const aboutSection = generateAbout(about);
$about.insertAdjacentHTML('afterbegin', aboutSection);

// Render projects
const $projects = document.querySelector('.projects');
const projectSection = generateProjects(projects);
$projects.insertAdjacentHTML('afterbegin', projectSection);

// Render resume section
const $resume = document.querySelector('.resume');
const resumeSection = generateResume(resume);
$resume.insertAdjacentHTML('afterbegin', resumeSection);

// Render contact section
const $contact = document.querySelector('.contact');
const contactSection = generateContact(contact);
$contact.insertAdjacentHTML('afterbegin', contactSection);