const menuButton = document.getElementById('menu-button');

function toggleMenu(event){
    if(event.type === 'touchstart') event.stop();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

menuButton.addEventListener('click', toggleMenu);
menuButton.addEventListener('touchstart', toggleMenu);