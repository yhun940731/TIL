"use strict";
// TODO: server fetch 
var images = [
    'https://occ-0-1007-3996.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfRunIgRuibk6xdSBIdlJVg3r3rA3gPYCJA70qUFLC4db7nAJPL3r_15txbOjQnALfQ_WM02ejbym72r3KIoWUYTcUY.webp?r=8d0',
    'https://occ-0-1007-3996.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcZQXIucIN_xRu1gyK_fb9U4zOPM7N_0uUh0zT9caSez5blf---4foEcBqrOGp5fjpLSjyfJRQc76BT1tewf1-5Go0HJWwVb5qguK2xgvel2F3rMunc132yG337r.jpg?r=449',
    'https://occ-0-1007-3996.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUWABujkk_IMCnztl0EhuJjaQz7O1kpAxSVvFqpst0hCNTXygWVdyw-xFBy7xwzO7LR-TmuordV7NlZDg2jKGC9YnuKsXAEL9j28FEUS5ZtdKa_R9vOvYAIeIUA5.jpg?r=dd1',
    'https://occ-0-1007-3996.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWex9f-iWrovQQkWnoA74IkLGjtkFIzpswvO0cIep2p78WCHSVKgWsh3B6yvnbhpCdifBBfI9NqF8geBUhffxNxXEwpHp7jvCoNB3ubqgVtANvhGjINSjLrzxO3v.jpg?r=c9f'
];
var $carousel = document.querySelector('.carousel');
var CONTROL_TIME = '500';
var sliders;
var prev;
var next;
var pageNum = 1;
var carousel = function ($container, images) {
    var $div = document.createElement('div');
    $div.setAttribute('class', 'carousel-slides');
    sliders = $div;
    images.forEach(function (img, i, arr) {
        if (i === 0) {
            var $img_1 = document.createElement('img');
            $img_1.setAttribute('src', arr[arr.length - 1]);
            $img_1.setAttribute('style', 'width: 100%');
            $div.appendChild($img_1);
        }
        var $img = document.createElement('img');
        $img.setAttribute('src', img);
        $img.setAttribute('style', 'width: 100%');
        $div.appendChild($img);
        if (i === arr.length - 1) {
            var $img_2 = document.createElement('img');
            $img_2.setAttribute('src', arr[0]);
            $img_2.setAttribute('style', 'width: 100%');
            $div.appendChild($img_2);
        }
    });
    $container.appendChild($div);
    if (images.length < 2)
        return;
    var $prevBtn = document.createElement('button');
    $prevBtn.setAttribute('class', 'carousel-control prev');
    $prevBtn.textContent = '«';
    var $nextBtn = document.createElement('button');
    $nextBtn.setAttribute('class', 'carousel-control next');
    $nextBtn.textContent = '»';
    prev = $prevBtn;
    next = $nextBtn;
    $container.appendChild($prevBtn);
    $container.appendChild($nextBtn);
    $carousel.style.setProperty('width', '350px');
    $carousel.style.setProperty('opacity', '1');
    sliders.style.setProperty('--duration', CONTROL_TIME);
    sliders.style.setProperty('--currentSlide', '1');
};
document.addEventListener('DOMContentLoaded', function () {
    carousel($carousel, images);
    prev.onclick = function () {
        if (sliders.style.getPropertyValue('--duration') === '0') {
            sliders.style.setProperty('--duration', CONTROL_TIME);
        }
        if (pageNum === 1) {
            setTimeout(function () {
                sliders.style.setProperty('--duration', '0');
                sliders.style.setProperty('--currentSlide', "" + (pageNum = images.length));
            }, +CONTROL_TIME);
        }
        if (!pageNum) {
            sliders.style.setProperty('--currentSlide', "" + (pageNum = images.length + 1));
            sliders.style.setProperty('--duration', '0');
        }
        sliders.style.setProperty('--currentSlide', "" + (pageNum -= 1));
    };
    next.onclick = function () {
        if (sliders.style.getPropertyValue('--duration') === '0') {
            sliders.style.setProperty('--duration', CONTROL_TIME);
        }
        if (pageNum === images.length) {
            setTimeout(function () {
                sliders.style.setProperty('--duration', '0');
                sliders.style.setProperty('--currentSlide', "" + (pageNum = 1));
            }, +CONTROL_TIME);
        }
        // if (pageNum === images.length) {
        //   sliders.ontransitionend = e => {
        //     if (e.isTrusted) {
        //       sliders.style.setProperty('--duration', '0');
        //       sliders.style.setProperty('--currentSlide', `${pageNum = 1}`);
        //     }
        //   } else sliders.ontransitioncancel;
        // }
        sliders.style.setProperty('--currentSlide', "" + (pageNum += 1));
        console.log(pageNum, images.length);
    };
});
