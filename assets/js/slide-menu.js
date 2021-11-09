let burg = document.querySelector(".burg");
let burgMenu = document.querySelector('.burg-menu');
let menu = document.querySelector(".burger-menu");
let menuBtn = document.querySelector('.menu-btn');
let closeBtn = document.querySelector('.close');
let closeButton = document.querySelector('.closeBtn');

closeButton.addEventListener('click', function () {
    if (menu.classList.contains('flex')) {
        menu.classList.remove('flex')
        menu.classList.add('none')
        closeBtn.classList.remove('flex')
        closeBtn.classList.add('none')
        menuBtn.classList.remove('none');
        menuBtn.classList.add('flex')
        burg.classList.remove('menu-padd')
    }
})

burg.addEventListener("click", function () {
    if (menu.classList.contains("none")) {
        menu.classList.remove("none");
        menu.classList.add("flex");
        menuBtn.classList.remove('flex')
        menuBtn.classList.add('none')
        closeBtn.classList.remove('close')
        closeBtn.classList.remove('none')
        closeBtn.classList.add('close-padd')
        burg.classList.add('menu-padd')
    } else if (menu.classList.contains('flex')) {
        menu.classList.remove('flex');
        menu.classList.add('none')
        menuBtn.classList.remove('none');
        menuBtn.classList.add('flex')
        closeBtn.classList.add('close')
        burg.classList.remove('menu-padd')
    }
});

burgMenu.addEventListener("click", function () {
    if (menu.classList.contains("none")) {
        menu.classList.remove("none");
        menu.classList.add("flex");
        menuBtn.classList.remove('flex');
        menuBtn.classList.add('none');
        closeBtn.classList.remove('close');
        closeBtn.classList.add('flex');
        closeBtn.classList.add('close-padd');
        burg.classList.add('menu-padd');
    } else if (menu.classList.contains('flex')) {
        menu.classList.remove('flex');
        menu.classList.add('none');
        menuBtn.classList.remove('none');
        menuBtn.classList.add('flex');
        closeBtn.classList.add('close');
        burg.classList.remove('menu-padd');
    }
});

let slide = document.querySelector('.slide-up');
let resMenu = document.querySelector('.responsive-menu');
let btnClose = document.querySelector('.close-btn')
slide.addEventListener('click', function () {
    if (resMenu.classList.contains('hide')) {
        resMenu.classList.remove('hide');
        resMenu.classList.add('show');
        slide.classList.remove('flex');
        slide.classList.add('none');
        btnClose.classList.remove('none')
        btnClose.classList.add('flex')
    }
})

btnClose.addEventListener('click', function () {
    if (resMenu.classList.contains('show')) {
        btnClose.classList.remove('flex');
        btnClose.classList.add('none');
        slide.classList.remove('none');
        slide.classList.add('flex');
        resMenu.classList.remove('show');
        resMenu.classList.add('hide')
    }
})

slide.addEventListener('click', (e) => { scrollTo(resMenu, e) }, false);

$(document).ready(function () {
    $('select').niceSelect();
});

let wide = document.querySelector('#myselect');

wide.classList.toggle('wide', window.matchMedia('(max-width:970px').matches);

console.log(wide)