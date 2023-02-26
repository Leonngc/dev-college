const menuButton = document.getElementById('menu-button');
const navMenu = document.getElementById('links-menu');
const closeMenu = document.getElementById('close-menu')

menuButton.addEventListener('click', ()=>{
    if(navMenu.style.display == 'none' && closeMenu.style.display == "none"){
        navMenu.style.display = 'block'
        closeMenu.style.display = 'block'
    }else{
        navMenu.style.display = 'none'
    }
})