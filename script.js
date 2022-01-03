const btnExit = document.querySelector('#exit')
const menuHamburguer = document.querySelector('.menu')

const showMenu = () => {
  document.querySelector('.navigation').style = 'display: flex;'
}

const hiddenMenu = () => {
  document.querySelector('.navigation').style = 'visibility: hidden'
}

btnExit.addEventListener('click', hiddenMenu)
menuHamburguer.addEventListener('click', showMenu)
