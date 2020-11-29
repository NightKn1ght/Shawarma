let buttonSlideRight = document.getElementById('slide-right');
let buttonSlideLeft = document.getElementById('slide-left');
let containerImages = document.getElementById('slide-img');
let images = ['img/customers/1 1.png', 'img/customers/2 1.png', 'img/customers/3 1.png', 'img/customers/4 1.png']
let positionFirstElement = moveSlider = 0;
let elementsOfSlider = document.querySelectorAll('.img-slider');


//alert(document.documentElement.scrollWidth);
buttonSlideLeft.onclick = ()=>{
    positionFirstElement++;
    if(positionFirstElement > 3)
        positionFirstElement = 0
    moveSlider = positionFirstElement;
    changeImg();
}
buttonSlideRight.onclick = ()=>{
    positionFirstElement--;
    if(positionFirstElement < 0)
        positionFirstElement = 3
    moveSlider = positionFirstElement;
    changeImg();
}
let changeImg = () =>{
    elementsOfSlider.forEach(element =>{
        if(moveSlider > 3)
            moveSlider = 0;
        element.style.backgroundImage = "url('"+images[moveSlider]+"')";
        moveSlider++;
    });
}
