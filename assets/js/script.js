var swiper = new Swiper(".firstSwiper", {
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
});

var swiper1 = new Swiper(".SunGlasses-Swiper", {
    slidesPerView: 4,
    spaceBetween: 30,


    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1354: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        970: {
            slidesPerView: 3,
            spaceBetween: 30,
        },


        0: {
            slidesPerView: 1.5,
            spaceBetween: 30,
        }

    }

});

var swiper2 = new Swiper(".boxesSwiper", {
    direction: "horizontal",
    slidesPerView: 3,
    spaceBetween: 30,
    loop: false,

    breakpoints: {
        976: {
            slidesPerView: 3,
        },

        700: {
            slidesPerView: 1.5,
        },
        0: {
            slidesPerView: 1.3
        }

    }

});