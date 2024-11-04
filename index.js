// HEADER-BURGER

const headerBurgerButton = document.querySelector('.header-burger')
const headerBurgerCloseButton = document.querySelector('.header-burger-close')
const headerMenu = document.querySelector('.header__nav')

headerBurgerButton.addEventListener('click', () => headerMenu.classList.add('active'))

headerBurgerCloseButton.addEventListener('click', () => headerMenu.classList.remove('active'))

// ==================================

// MAIN-SLIDER

const plantsCard = document.querySelectorAll('.plants__list-card')
const slideDot = document.querySelectorAll('.slide-dots-dot')

function classChanger(action, elems, clas) {
  for (let elem of elems) {
    if (action === 'add') {
      elem.classList.add(`${clas}`)
    } else {
      elem.classList.remove(`${clas}`)
    }
  }
}

for (let i = 0; i < slideDot.length; i++) {
  const dot = slideDot[i]

  dot.addEventListener('click', () => {
    for (let ddot of slideDot) {
      ddot.classList.remove('visible')
    }
    dot.classList.toggle('visible')
    
    // if (dot === slideDot[1]) {
    //   classChanger('remove', plantsCard, 'slideFc1')
    //   classChanger('remove', plantsCard, 'slideFc2')
    //   classChanger('remove', plantsCard, 'slideFc3')

    //   classChanger('add', plantsCard, 'slideFc1')
    // } else if (dot === slideDot[0]) {
    //   classChanger('remove', plantsCard, 'slideFc1')
    //   classChanger('remove', plantsCard, 'slideFc2')
    //   classChanger('remove', plantsCard, 'slideFc3')
    // } else if (dot === slideDot[2]) {
    //   classChanger('remove', plantsCard, 'slideFc1')
    //   classChanger('remove', plantsCard, 'slideFc2')
    //   classChanger('remove', plantsCard, 'slideFc3')

    //   classChanger('add', plantsCard, 'slideFc2')
    // } else if (dot === slideDot[3]) {
    //   classChanger('remove', plantsCard, 'slideFc1')
    //   classChanger('remove', plantsCard, 'slideFc2')
    //   classChanger('remove', plantsCard, 'slideFc3')

    //   classChanger('add', plantsCard, 'slideFc3')
    // } //Более длинное, но возможно более легкое в чтении

    if (dot === slideDot[0]) {
      classChanger('remove', plantsCard, 'slideFc1')
      classChanger('remove', plantsCard, 'slideFc2')
      classChanger('remove', plantsCard, 'slideFc3')
    } else {
      classChanger('remove', plantsCard, 'slideFc1')
      classChanger('remove', plantsCard, 'slideFc2')
      classChanger('remove', plantsCard, 'slideFc3')

      classChanger('add', plantsCard, `slideFc${i}`)
    } // Коротко и не сложное решение, но возможно сложно читаемое
    
  })
}

// ==================================