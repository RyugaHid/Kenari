let min = document.querySelector('.min');

let plus = document.querySelector('.plus');
let inp = document.querySelector('.inp');
let counter = 0;


inp.value = counter;




plus.addEventListener('click', function () {
    inp.value = counter++;


})
min.addEventListener('click', function () {

    if (inp.value > 0) {
        inp.value = counter--;
    } else {
        return
    }
})
