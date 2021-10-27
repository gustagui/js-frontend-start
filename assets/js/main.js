// exerc 1
const ocultarTitulo = document.querySelector('#titular')
ocultarTitulo.style.display = 'none';

// exerc 2  
const img = document.querySelector('#lechuza')
img.style.filter = "grayscale(100%)";

// exerc 3
const inputRed = document.querySelectorAll('input')
inputRed.forEach( (input)=>{

    input.style.background = 'red'
})

// DOM
// exerc 1
const copy = document.getElementById('copyright')
console.log(copy.attributes)

// exerc 2
const tt = document.querySelector('.fa-twitter')
console.log(tt.getAttribute('href'))

// exerc 3
const fb = document.querySelector('.fa-facebook')
console.log(fb.getAttribute('href'))

// exerc 4
const yt = document.querySelector('.fa-youtube')
yt.setAttribute('href', 'https://www.youtube.com/c/digitalhousebrasil')

// exerc 5
const form = document.querySelector('form')
console.log('existe action?', form.hasAttribute('action'))

// exerc 6
const conteudoUrl = form.getAttribute('url')
form.setAttribute('action', conteudoUrl)
form.removeAttribute('url')

// exerc 7
const titulosH2 = document.querySelectorAll('h2')

titulosH2.forEach( (titulo)=>{

    titulo.style.color = 'red'
})

//exerc 8
const icones = document.querySelectorAll('.icon')

icones.forEach( (icone)=>{

    icone.style.backgroundColor = '#680094'
})