"use strict";

const imagesBD = [
  "https://moderncat.com/wp-content/uploads/2015/12/Sphynx.jpg",
  "https://production-aws-wp.spotpetins.com/wp-content/uploads/2021/04/Sphynx-Cat-1024x1024.jpg",
];

const [prevBtn, nextBtn] = document.querySelectorAll(".slider-container");
const img = document.querySelector(".slider-container .slide img");

const slider = new Slider(imagesBD);

const createSliderBtnHandler = (direction = 'next')=>()=>{
  const method = direction === 'next'? 'next': 'prev';
  slider.currentIndex = slider[method];
}
nextBtn.addEventListener('click',createSliderBtnHandler('next'));
prevBtn.addEventListener('click',createSliderBtnHandler('prev'))

function updateView(){
img.setAttribute("src", slider.currentSlide);
}
updateView();