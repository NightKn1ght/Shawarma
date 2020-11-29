let button = document.getElementById('btn-hamburger-menu');
let menu = document.getElementById('menu');
let openMenuCheck = false;

buttonToOpenMenuHamburger.addEventListener('click', (e)=>{
    e.preventDefault();
    if(!openMenuCheck){
        menu.style.display = 'block';
        document.body.style.overflow = "hidden";
        buttonToOpenMenuHamburger.classList.add('hamburger-menu-active');
    }
    else{
        menu.style.display = 'none';
        buttonToOpenMenuHamburger.classList.remove('hamburger-menu-active');
    }
    openMenuCheck = !openMenuCheck;
});
