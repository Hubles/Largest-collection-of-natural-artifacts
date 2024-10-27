const headerBurgerButton = document.querySelector('.header-burger')
const headerBurgerCloseButton = document.querySelector('.header-burger-close')
const headerMenu = document.querySelector('.header__nav')

headerBurgerButton.addEventListener('click', () => headerMenu.classList.add('active'))

headerBurgerCloseButton.addEventListener('click', () => headerMenu.classList.remove('active'))