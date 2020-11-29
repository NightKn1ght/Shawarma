let buttonsToActiveModal = document.querySelectorAll('.order');
let toAnchor = document.querySelectorAll(".menu ul li a");
let orderButton = document.querySelector('.check');
let modal = document.querySelector('.modal');
let modalWrap = document.querySelector('.modal-wrap');
let buttonToOpenMenuHamburger = document.getElementById('btn-hamburger-menu');
let menu = document.getElementById('menu');
let openMenuCheck = false;


toAnchor.forEach(element =>{
    element.addEventListener('click', (e)=>{
        e.preventDefault()
        let scrollToElem = element.getAttribute('href');
        let coordinatesOfForm = document.querySelector(scrollToElem).offsetTop;
        window.scrollTo({
            top: coordinatesOfForm,
            behavior: 'smooth'
        });
        menu.style.transform = 'translateY(-100%)';
        document.body.style.overflow = "auto";
        menu.style.opacity = 0;
        buttonToOpenMenuHamburger.classList.remove('hamburger-menu-active');
    });
});
document.onclick = (e)=>{
    targer = e.target;
    if(modal == targer)
        modal.style.display ='none';
}

buttonsToActiveModal.forEach(button=>{
    let inputNameSawarma = document.querySelector("input[name='nameSawarma']");
    button.addEventListener('click', (e)=>{
        e.preventDefault();
        inputNameSawarma.value = button.value;
        modal.style.display = 'flex';
    })
});

orderButton.addEventListener('click', (e)=>{
    e.preventDefault();
    let coordinatesOfForm = document.querySelector('#form').offsetTop;
    window.scrollTo({
        top: coordinatesOfForm,
        behavior: 'smooth'
    });
})

buttonToOpenMenuHamburger.addEventListener('click', (e)=>{
    e.preventDefault();
    if(!openMenuCheck){
        menu.style.transform = 'translateY(0)';
        menu.style.opacity = 1;
        document.body.style.overflow = "hidden";
        buttonToOpenMenuHamburger.classList.add('hamburger-menu-active');
    }
    else{
        menu.style.transform = 'translateY(-100%)';
        menu.style.opacity = 0;
        buttonToOpenMenuHamburger.classList.remove('hamburger-menu-active');
        document.body.style.overflow = "auto";
    }
    openMenuCheck = !openMenuCheck;
});