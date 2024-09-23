"use strict";
const slider = document.getElementById('slider');
const imageSize = slider.children[0].clientWidth;
const numberOfImages = slider.children.length;
const right = document.getElementById('right');
const left = document.getElementById('left');
const groupOfButtons = document.getElementById('buttons');
let index = 0;
let buttons = groupOfButtons.children
function moveSlider(direction) {
    if (direction === 'right') {
        index++;
        if (index >= numberOfImages) {
            index = 0;
        }
    } else if (direction === 'left') {
        index--;
        if (index < 0) {
            index = numberOfImages - 1;
        }
    }
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active')
    }
    slider.style.transform = `translateX(-${(imageSize * index) + 30 * index}px)`;
    buttons[index].classList.add('active')

}
// Automatically move every 5 seconds
let movingInterval = setInterval(() => moveSlider('right'), 5000);

// Moving right
right.addEventListener("click", () => {
    moveSlider('right');
});

// Moving left
left.addEventListener("click", () => {
    moveSlider('left');
})

// while hovering stop and start the auto transition 
slider.addEventListener("mouseenter", () => {
    clearInterval(movingInterval);
})
slider.addEventListener("mouseleave", () => {
    movingInterval = setInterval(() => moveSlider('right'), 5000);
})

//buttons navigate between images 
Array.from(buttons).map((button, i) => {
    button.addEventListener('click', () => {
        index = i - 1
        moveSlider('right')
    })

})



