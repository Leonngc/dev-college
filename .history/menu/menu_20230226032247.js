const menuButton = document.getElementById('menu-button');
const navMenu = document.getElementById('links-menu');
const closeMenu = do

menuButton.addEventListener('click', ()=>{
    if(navMenu.style.display == 'none'){
        navMenu.style.display = 'block'
    }else{
        navMenu.style.display = 'none'
    }
})