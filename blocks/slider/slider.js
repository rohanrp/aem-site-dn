export default function decorate(block) {
  console.error('ssss')
  try {
  const logoSlider = document.createElement('div');
  logoSlider.classList.add('slider-carousel');
  const childDivs =  Array.from(block.firstElementChild.children);
 
  for (let i = 0; i < childDivs.length; i++) {
    const imgSlider = document.createElement('div');
    const p = childDivs[i].querySelector('p');
    imgSlider.innerHTML = p ? p.innerHTML : childDivs[i];
    logoSlider.appendChild(imgSlider);
  }


  block.innerHTML = '';
  block.appendChild(logoSlider);

  const filesToLoad = [
    'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.css',
    'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js',
  ];

  window.loadFiles(filesToLoad, () => {
    window.loadFiles(['https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js'], () => {
      setTimeout(() => {
        $(logoSlider).slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          nextArrow: '<button class="slick-next slick-button"></button>',
          prevArrow: '<button class="slick-prev slick-button"></button>',
        });
      }, 100)
    });
  });

  } catch(e) {
    console.error(e);
  }
}

