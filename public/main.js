
const topMenu = document.getElementById('ct-top-menu')
const toggleMenuIcon = document.getElementById('ct-toggle-top-menu-icon')

document.addEventListener('click', (e) => {
    if (toggleMenuIcon  && toggleMenuIcon.contains(e.target)) {
        topMenu.classList.toggle('ct-topmenu-expanded')
        topMenu.classList.toggle('hidden')
    } else {
        // click outside
        if (topMenu && topMenu.classList.contains('ct-topmenu-expanded')) {
            topMenu.classList.remove('ct-topmenu-expanded')
            topMenu.classList.add('hidden')
        }
    }
})