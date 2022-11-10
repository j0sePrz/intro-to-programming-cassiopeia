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

const messageForm = document.querySelector('[name = leave_message]');
messageForm.addEventListener('submit',function(event){
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;
    document.querySelector('[name = leave_message]').reset();
    console.log(`name: ${name}, email: ${email}, message: ${message}`);

    const messageSection = document.querySelector('#messages');
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href="mailto:${email}">${name}</a><span> wrote: ${message}</span>`

    const removeButton = document.createElement('button');
    removeButton.setAttribute('type','button');
    removeButton.innerText = 'Remove';
    removeButton.addEventListener('click',function(){
        newMessage.remove();
        if (messageList.childElementCount === 0) {
            messageSection.setAttribute('style','display: none');
        }
    });
    const editButton = document.createElement('button')
    editButton.setAttribute('type','button')
    editButton.innerText = 'Edit'
    editButton.addEventListener('click',function(event){
        newMessage.remove();
        const nameElement = document.querySelector('[name = name]')
        const emailElement = document.querySelector('[name = email]')
        const messageElement = document.querySelector('[name = message]')

        nameElement.value = name
        emailElement.value = email
        messageElement.value = message
    })
    newMessage.appendChild(removeButton)
    newMessage.appendChild(editButton)
    messageList.appendChild(newMessage)
    messageSection.setAttribute('style','display:black')
})
function onRemoveButtonClick(event){
    const entry = event.target.parentNode;
    entry.remove()
}

let githubRequest = new XMLHttpRequest();
githubRequest.open("GET","https://api.github.com/users/j0sePrz/repos")
githubRequest.send();

githubRequest.addEventListener('load',CallBackFunction);
let repositories = []

function CallBackFunction(event) {
    repositories = JSON.parse(this.response);
    console.log(repositories);
    
    let projectSection = document.getElementById("projects");
    let projectList = projectSection.querySelector("ul");

    for(let i=0; i < repositories.length; i++){

    let project = document.createElement("li");
    project.innerText = repositories[i].name;
    projectList.appendChild(project);
    }

}