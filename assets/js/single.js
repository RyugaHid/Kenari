var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".fa-chevron-right",
        prevEl: ".fa-chevron-left",
    },
    thumbs: {
        swiper: swiper,
    },
});

$(document).ready(function () {
    $('select').niceSelect();
});


var value = 1
$(".counter").val(value);
$('.increment').on("click", function () {
    value = parseInt(value + 1);
    $(".counter").val(value);
});
$('.decrement').on("click", function () {
    if (value > 0) {
        value = parseInt(value - 1);
        $(".counter").val(value);
    } else {
        value = 0;
        $(".counter").val(value);
    }
});

var value1 = 1
$(".counter1").val(value1);
$('.increment1').on("click", function () {
    value1 = parseInt(value1 + 1);
    $(".counter1").val(value1);
});
$('.decrement1').on("click", function () {
    if (value1 > 0) {
        value1 = parseInt(value1 - 1);
        $(".counter1").val(value1);
    } else {
        value1 = 0;
        $(".counter1").val(value1);
    }
});