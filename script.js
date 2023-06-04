const controls = document.querySelectorAll('.tab-controls li a');
const conteudo = document.querySelectorAll('.direito-conteudo');
const menu = document.querySelector('.js-menu')
const btnMobile = document.getElementById('btn-mobile')



controls.forEach((controlItem, conteudoPosicao) => {

    controlItem.addEventListener('click', (e) => {
        e.preventDefault();
        controls.forEach(itemNav => {
            itemNav.classList.remove('active')
        })
        controlItem.classList.add('active')
    })

    controlItem.addEventListener('click', () => {
        conteudo.forEach((conteudoItem) => {
            conteudoItem.classList.remove('active')
        })
        conteudo[conteudoPosicao].classList.add('active')
    })

})


function activeMenu() {
    if (window.pageYOffset > 96) {
        menu.classList.add('active')
    } else {
        menu.classList.remove('active')
    }
}
window.addEventListener('scroll', activeMenu)


function toggleMenu(e) {
    if (e.type === 'touchstart') e.preventDefault()
    const navMenu = document.querySelector('.links')
    navMenu.classList.toggle('active')
    const active = navMenu.classList.contains('active')
    e.currentTarget.setAttribute('aria-expanded=', active)
}


btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)