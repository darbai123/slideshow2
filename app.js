let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthItems = items.length - 1;
let itemWidth = items[0].offsetWidth; // Pasiimame vieno elemento plotį

next.addEventListener('click', function () {
    active = (active + 1) % items.length;
    reloadSlider();
});

prev.addEventListener('click', function () {
    active = (active - 1 + items.length) % items.length;
    reloadSlider();
});

let refreshSlider = setInterval(() => { next.click() }, 5000); // Pakeisti slankiklio atnaujinimo dažnumą pagal poreikį

function reloadSlider() {
    let checkLeft = -active * itemWidth; // Pritaikome vieno elemento plotį
    list.style.transform = `translateX(${checkLeft}px)`;

    let lastActiveDot = document.querySelector('.slider .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
}

dots.forEach((li, key) => {
    li.addEventListener('click', function () {
        active = key;
        reloadSlider();
    });
});
