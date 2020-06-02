const body = document.querySelector('body')

const modalBtn = document.querySelector('.modal-btn-js')
const modalClose = document.querySelector('.modal-close-js')
const modal = document.querySelector('.modal')
const calculator = document.querySelector('.calculator')



function createCalcEmbedder() {
    const calcEmbederContainer = document.querySelector('.calc-container')
    const calcEmbedder = document.createElement("div")
    calcEmbedder.className = "calculator"
    calcEmbedder.setAttribute("data-calc-id", "FhTCwmtKrE7sv9KZW")
    
    calcEmbederContainer.appendChild(calcEmbedder)
}

async function async_load() {
    const s = document.createElement("script")
    s.type = "text/javascript"
    s.async = true
    s.id = "calcScript"
    const url = 'https://app.convertcalculator.co/embed.js'
    s.src = url + (url.indexOf("?") >= 0 ? "&" : "?") + "ref=" + encodeURIComponent(window.location.href)
    const embedder = document.getElementById('convertcalculator-embedder-3s9JGG6kzNj78yt9u')
    embedder.parentNode.insertBefore(s, embedder)
    //     if (window.attachEvent)
    //   window.attachEvent("onload", async_load)
    // else
    //   window.addEventListener("load", async_load, false)
}

function removeCalculator() {
    const calcScript = document.getElementById('calcScript')
    const calculator= document.querySelector('.calculator')
    calcScript.remove()
    calculator.remove()
    
}

function openModal() {
    window.scrollTo(0, 0)
    createCalcEmbedder()
    const calculator = document.querySelector('.calculator')
    
    // body.classList.add('body-active')
    modal.classList.add('modal-active')
    calculator.classList.add('calculator-active')
    modalClose.classList.add('modal-close-active')

    async_load()
    // .then(addEventListenerToSubmitButton())
}

function closeModal() {
    const calculator = document.querySelector('.calculator')
    modal.classList.remove('modal-active')
    // body.classList.remove('body-active')
    calculator.classList.remove('calculator-active')
    modalClose.classList.remove('modal-close-active')

    removeCalculator()
}

// async function addEventListenerToSubmitButton() {
//     setTimeout( () => {
//     const submitButton = document.querySelector('.cc__submission-button')
//     console.log(submitButton)
//     return submitButton
//     }, 5000).then(submitButton.addEventListener('click', console.log('CLICKED')))
// }


// modalBtn.addEventListener('click', openModal)
modalClose.addEventListener('click', closeModal)





