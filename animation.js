const welcomeText = document.querySelector('.welcome')

async function typing(){
    const text = "Welcome"
    for (index in text) {
        let el = text[index]
        setTimeout(function() {
            welcomeText.innerHTML+=el
          }, 300*index);
    }
}

typing()