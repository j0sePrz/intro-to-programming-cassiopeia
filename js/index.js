const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');

const copyright = document.createElement('p');
copyright.innerHTML = `Jose Perez ${thisYear}`;

footer.appendChild(copyright);

const skills = ['JavaScript','CSS','HTML'];
const skillSection = document.querySelector('#skills');
const skillsList = skillSection.querySelector('ul');
for (let i=0; i<skills.length; i++) {
    const skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}