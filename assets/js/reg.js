let reg = document.querySelector('.reg');
let pic = document.querySelector('.reg-pic');
let form = document.querySelector('.reg-form');
let auth = document.querySelector('.auth-form');
let authBtn = document.querySelector('.auth');
let right = document.querySelector('.right');
let left = document.querySelector('.left');
let authText = document.querySelector('.auth-text');
let regText = document.querySelector('.reg-text');
let cont = document.querySelector('.main-container');
let curr = document.querySelector('.current-page');
let layer = document.querySelector('.layer')


authBtn.addEventListener('click', function () {
    if (authBtn.classList.contains('flex')) {
        auth.classList.remove('opacity');
        auth.classList.add('opacityShow')
        authBtn.classList.remove('flex');
        authBtn.classList.add('none');
        left.classList.remove('flex');
        left.classList.add('none');
        pic.classList.add('transition');
        layer.classList.remove('end');
        layer.classList.add('start');
        reg.classList.remove('none');
        reg.classList.add('flex');
        right.classList.remove('none');
        right.classList.add('flex');
        form.classList.remove('opacityShow')
        form.classList.add('opacity');
        authText.classList.remove('none');
        authText.classList.add('flex');
        regText.classList.remove('flex');
        regText.classList.add('none');
        cont.classList.remove('bg-white')
        document.body.classList.remove('bg');
        pic.classList.remove('bg-pic2');
        pic.classList.add('bg-pic')


    }
})

reg.addEventListener('click', function () {

    if (authBtn.classList.contains('none')) {
        auth.classList.remove('opacityShow');
        auth.classList.add('opacity')
        pic.classList.remove('transition');
        layer.classList.remove('start');
        reg.classList.remove('flex')
        reg.classList.add('none');
        right.classList.remove('flex')
        right.classList.add('none');
        left.classList.remove('none');
        left.classList.add('flex');
        authBtn.classList.remove('none');
        authBtn.classList.add('flex');
        form.classList.remove('opacity');
        form.classList.add('opacityShow')
        authText.classList.remove('flex')
        authText.classList.add('none');
        regText.classList.remove('none');
        regText.classList.add('flex');
        cont.classList.add('bg-white')
        document.body.classList.add('bg');
        pic.classList.remove('bg-pic');
        pic.classList.add('bg-pic2')

    }
})
right.addEventListener('click', function () {

    if (authBtn.classList.contains('none')) {
        auth.classList.remove('opacityShow');
        auth.classList.add('opacity')
        pic.classList.remove('transition');
        layer.classList.remove('start');
        reg.classList.remove('flex')
        reg.classList.add('none');
        right.classList.remove('flex')
        right.classList.add('none');
        left.classList.remove('none');
        left.classList.add('flex');
        authBtn.classList.remove('none');
        authBtn.classList.add('flex');
        form.classList.remove('opacity');
        form.classList.add('opacityShow')
        authText.classList.remove('flex')
        authText.classList.add('none');
        regText.classList.remove('none');
        regText.classList.add('flex');
        cont.classList.add('bg-white')
        document.body.classList.add('bg');
        pic.classList.remove('bg-pic');
        pic.classList.add('bg-pic2')


    }
})

left.addEventListener('click', function () {
    if (authBtn.classList.contains('flex')) {
        auth.classList.remove('opacity');
        auth.classList.add('opacityShow')
        authBtn.classList.remove('flex');
        authBtn.classList.add('none');
        left.classList.remove('flex');
        left.classList.add('none');
        pic.classList.add('transition');
        layer.classList.remove('end');
        layer.classList.add('start');
        reg.classList.remove('none');
        reg.classList.add('flex');
        right.classList.remove('none');
        right.classList.add('flex');
        form.classList.remove('opacityShow')
        form.classList.add('opacity');
        authText.classList.remove('none');
        authText.classList.add('flex');
        regText.classList.remove('flex');
        regText.classList.add('none');
        cont.classList.remove('bg-white')
        document.body.classList.remove('bg');
        pic.classList.remove('bg-pic2');
        pic.classList.add('bg-pic')


    }
})

let formm = document.getElementById('form-register');


formm.addEventListener('submit', (e) => {
    e.preventDefault
})