const leftBtn = document.querySelector(".slider-controls-left");
const rightBtn = document.querySelector(".slider-controls-right");
const sliderSections =document.querySelector(".slider-sections");

let index = 0;
let right = 0;
let sliderWidth = document.querySelector(".slider-container").offsetWidth;

leftBtn.addEventListener("click", function(){
    if(index > 0){
        right = right - sliderWidth;
        sliderSections.style.right = right + "px";
        index--;
    } else {
        right = sliderWidth * 2;
        sliderSections.style.right = right + "px";
        index = 2;
    }
});

rightBtn.addEventListener("click", function(){
    if(index < 2){
        right = right + sliderWidth;
        sliderSections.style.right = right + "px";
        index++;
    }else{
        rigth = 0;
        index = 0;
        sliderSections.style.right = 0 + "px";
    }
});
