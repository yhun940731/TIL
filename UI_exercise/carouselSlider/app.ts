// TODO: server fetch 
const images: string[] = [
  'https://occ-0-1007-3996.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfRunIgRuibk6xdSBIdlJVg3r3rA3gPYCJA70qUFLC4db7nAJPL3r_15txbOjQnALfQ_WM02ejbym72r3KIoWUYTcUY.webp?r=8d0',
  'https://occ-0-1007-3996.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcZQXIucIN_xRu1gyK_fb9U4zOPM7N_0uUh0zT9caSez5blf---4foEcBqrOGp5fjpLSjyfJRQc76BT1tewf1-5Go0HJWwVb5qguK2xgvel2F3rMunc132yG337r.jpg?r=449',
  'https://occ-0-1007-3996.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUWABujkk_IMCnztl0EhuJjaQz7O1kpAxSVvFqpst0hCNTXygWVdyw-xFBy7xwzO7LR-TmuordV7NlZDg2jKGC9YnuKsXAEL9j28FEUS5ZtdKa_R9vOvYAIeIUA5.jpg?r=dd1',
  'https://occ-0-1007-3996.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWex9f-iWrovQQkWnoA74IkLGjtkFIzpswvO0cIep2p78WCHSVKgWsh3B6yvnbhpCdifBBfI9NqF8geBUhffxNxXEwpHp7jvCoNB3ubqgVtANvhGjINSjLrzxO3v.jpg?r=c9f'
]

const $carousel: HTMLElement = document.querySelector('.carousel') as HTMLElement;
const CONTROL_TIME: string = '500';

let sliders: HTMLElement;
let prev: HTMLElement;
let next: HTMLElement;
let pageNum: number = 1;

const carousel = ($container: HTMLElement, images: string[]) => {
 const $div: HTMLElement = document.createElement('div') as HTMLElement;
 $div.setAttribute('class', 'carousel-slides');
 sliders = $div;

 images.forEach((img: string, i, arr) => {
  if (i === 0) {
    const $img: HTMLElement = document.createElement('img') as HTMLElement;
    $img.setAttribute('src', arr[arr.length - 1]);
    $img.setAttribute('style', 'width: 100%');
    $div.appendChild($img);
  }

  const $img: HTMLElement = document.createElement('img') as HTMLElement;
  $img.setAttribute('src', img);
  $img.setAttribute('style', 'width: 100%');
  $div.appendChild($img);

  if (i === arr.length - 1) {
    const $img: HTMLElement = document.createElement('img') as HTMLElement;
    $img.setAttribute('src', arr[0]);
    $img.setAttribute('style', 'width: 100%');
    $div.appendChild($img);
  }
}) 
 $container.appendChild($div);

 if(images.length < 2) return;
 const $prevBtn: HTMLElement = document.createElement('button') as HTMLElement;
 $prevBtn.setAttribute('class', 'carousel-control prev');
 $prevBtn.textContent = '«';
 const $nextBtn: HTMLElement = document.createElement('button') as HTMLElement;
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

document.addEventListener('DOMContentLoaded', () => {
  carousel($carousel, images);
  
  prev.onclick = () => {
    if (sliders.style.getPropertyValue('--duration') === '0') {
      sliders.style.setProperty('--duration', CONTROL_TIME);
     }

     if (pageNum === 1) {
      setTimeout(() => {
        sliders.style.setProperty('--duration', '0');
        sliders.style.setProperty('--currentSlide', `${pageNum = images.length}`)
      }, +CONTROL_TIME)
    }
 
     if (!pageNum) {
     sliders.style.setProperty('--currentSlide', `${pageNum = images.length + 1}`);
     sliders.style.setProperty('--duration', '0');
     } 

    sliders.style.setProperty('--currentSlide', `${pageNum -= 1}`);
  };

  next.onclick = () => {
    if (sliders.style.getPropertyValue('--duration') === '0') {
     sliders.style.setProperty('--duration', CONTROL_TIME);
    }

    if (pageNum === images.length) {
      setTimeout(() => {
        sliders.style.setProperty('--duration', '0');
        sliders.style.setProperty('--currentSlide', `${pageNum = 1}`)
      }, +CONTROL_TIME)
    }

    // if (pageNum === images.length) {
    //   sliders.ontransitionend = e => {
    //     if (e.isTrusted) {
    //       sliders.style.setProperty('--duration', '0');
    //       sliders.style.setProperty('--currentSlide', `${pageNum = 1}`);
    //     }
    //   } else sliders.ontransitioncancel;
    // }

    sliders.style.setProperty('--currentSlide', `${pageNum += 1}`);
    console.log(pageNum, images.length);
  };
})