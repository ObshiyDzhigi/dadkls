const DropdownArrowBtn1 = document.querySelector('.dropdown_arrow1')
const DropdownArrowBtn2 = document.querySelector('.dropdown_arrow2')
const DropdownArrowBtn3 = document.querySelector('.dropdown_arrow3')


const DropdownContent1 = document.querySelector('.dropdown_content1')
const DropdownContent2 = document.querySelector('.dropdown_content2')
const DropdownContent3 = document.querySelector('.dropdown_content3')


const BurgerMenuBtn = document.querySelector('.burger_menu')
const BurgerMenuInner = document.querySelector('.burger_menu_inner')
const CrossBtn = document.querySelector('.menu_cross')


const MenuArrowBtn1 = document.querySelector('.menu_arrow1')
const MenuArrowBtn2 = document.querySelector('.menu_arrow2')
const MenuArrowBtn3 = document.querySelector('.menu_arrow3')

const MenuContent1 = document.querySelector('.menu_content1')
const MenuContent2 = document.querySelector('.menu_content2')
const MenuContent3 = document.querySelector('.menu_content3')



DropdownArrowBtn1.addEventListener('click', () => {
    DropdownContent1.classList.toggle('active_dropdown')
    DropdownArrowBtn1.classList.toggle('active')
})
DropdownArrowBtn2.addEventListener('click', () => {
    DropdownContent2.classList.toggle('active_dropdown')
    DropdownArrowBtn2.classList.toggle('active')
})
DropdownArrowBtn3.addEventListener('click', () => {
    DropdownContent3.classList.toggle('active_dropdown')
    DropdownArrowBtn3.classList.toggle('active')
})


BurgerMenuBtn.addEventListener('click', () => {
    BurgerMenuInner.classList.toggle('active_menu')
})
CrossBtn.addEventListener('click', () => {
    BurgerMenuInner.classList.toggle('active_menu')
})

MenuArrowBtn1.addEventListener('click', () => {
    MenuContent1.classList.toggle('active')
    MenuArrowBtn1.classList.toggle('active')
})
MenuArrowBtn2.addEventListener('click', () => {
    MenuContent2.classList.toggle('active')
    MenuArrowBtn2.classList.toggle('active')
})
MenuArrowBtn3.addEventListener('click', () => {
    MenuContent3.classList.toggle('active')
    MenuArrowBtn3.classList.toggle('active')
})







