const projects = document.querySelectorAll('.projects p')
const projectsArray = Array.from(projects)

projectsArray.forEach(el => {
    el.addEventListener('click', () => {
        switchTopic(el)
    })
})

async function typing(){
    const welcomeText = document.querySelector('.active .welcome')
    const text = welcomeText.innerHTML
    console.log(text)
    welcomeText.innerHTML=""
    for (index in text) {
        let el = text[index]
        setTimeout(function() {
            welcomeText.innerHTML+=el
          }, 200*index);
    }
}

function switchTopic(el){
    let elementName = el.innerHTML.toLowerCase().replace(/\s+/g, '-');
    document.querySelector(`.text.active`).classList.toggle("active");
    document.querySelector(`.${elementName}.text`).classList.toggle("active");

    typing()
}

typing()