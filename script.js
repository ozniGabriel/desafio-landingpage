const btnExit = document.querySelector('#exit')
const menuHamburguer = document.querySelector('.menu')

window.addEventListener('resize', () => {
  if (window.innerWidth > 845) {
    document.querySelector('.navigation').style = 'opacity: 1;'
  }
})

const showMenu = () => {
  document.querySelector('.navigation').style =
    'visibility: visible; opacity: 1; transition: all 0.7s;'
}

const hiddenMenu = () => {
  document.querySelector('.navigation').style =
    'opacity: 0; transition: all 0.7s'
}

btnExit.addEventListener('click', hiddenMenu)
menuHamburguer.addEventListener('click', showMenu)
