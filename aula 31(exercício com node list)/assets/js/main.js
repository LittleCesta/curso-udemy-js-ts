const divParagrafos = document.querySelector('.paragrafos')

const backgroundElement = document.querySelector('body')
const bgColor = getComputedStyle(backgroundElement).backgroundColor

const paragrafos = divParagrafos.querySelectorAll('p')


paragrafos.forEach((p) => {
  p.style.backgroundColor = bgColor
  p.style.color = 'white'
})
