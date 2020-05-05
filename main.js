const modalBtn = document.querySelector('.modal-btn-js')
const modalClose = document.querySelector('.modal-close-js')
const modal = document.querySelector('.modal')

const calculator = document.querySelector('.calculator')

// function loadCalc() {
//     function async_load() {
//         var s = document.createElement("script");
//         s.type = "text/javascript";
//         s.async = true;
//         var url = 'https://app.convertcalculator.co/embed.js';
//         s.src = url + (url.indexOf("?") >= 0 ? "&" : "?") + "ref=" + encodeURIComponent(window.location.href);
//         var embedder = document.getElementById('convertcalculator-embedder-3s9JGG6kzNj78yt9u');
//         embedder.parentNode.insertBefore(s, embedder);
//     }
//     async_load();
// };

function openModal() {
    modal.classList.add('modal-active')
    calculator.classList.add('calculator-active')
    modalClose.classList.add('modal-close-active')
    // loadCalc()
}

function closeModal() {
    modal.classList.remove('modal-active')
    calculator.classList.remove('calculator-active')
    modalClose.classList.remove('modal-close-active')
}

modalBtn.addEventListener('click', openModal)
modalClose.addEventListener('click', closeModal)



