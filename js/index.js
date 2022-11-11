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

fetch('https://api.github.com/users/j0sePrz/repos')
    .then((response) => response.json())
    .then(afterResponse)
    .catch(handleErrors);

    function afterResponse(response) {
        for (let i = 0; i < response.length; i++) {
            let project = document.createElement("li");
            project.innerHTML = response[i].name;
            project.classList.add("projects");
            projects.appendChild(project);
        }
    }
    function handleErrors (error) {
        console.log("Unable to load Github API", error);
        let item = document.createElement("li");
        item.innerHTML = "Unable to load responsitories. Please try again later.";
        projects.appendChild(item);
    }