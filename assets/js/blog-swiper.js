var swiper = new Swiper(".boxesSwiper", {
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 20,
    loop: false,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",

    },
    breakpoints: {
        1354: {
            slidesPerView: 7,
            spaceBetween: 20,
        },
        970: {
            slidesPerView: 6,
            spaceBetween: 20,
        },


        500: {
            slidesPerView: 3.3,
            spaceBetween: 20,
        },
        0: {
            slidesPerView: 1.8,
            spaceBetween: 20,
        }

    }

});