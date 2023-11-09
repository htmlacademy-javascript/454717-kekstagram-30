import '../../vendor/nouislider/nouislider.js';
import '../../vendor/nouislider/nouislider.css';

const slider = document.querySelector('.img-upload__effect-level');
const value = document.querySelector('.effect-level__value');

noUiSlider.create(slider, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
});

slider.noUiSlider.on('update', () => {
  value.value = slider.noUiSlider.get();
});

const setEffect = (target, image) => {
  switch (target) {
    case 'chrome':
      image.style.filter = `grayscale(${value.value})`;
      break;
    case 'sepia':
      image.style.filter = `sepia(${value.value}%)`;
      break;
    case 'marvin':
      slider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 100,
        },
        start: 80,
        step: 1
      });
      image.style.filter = `invert(${value.value}%)`;
      break;
    case 'phobos':
      slider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3,
        },
        start: 2,
        step: 0.1
      });
      image.style.filter = `blur(${value.value}px)`;
      break;
    case 'heat':
      slider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3,
        },
        step: 0.1
      });
      image.style.filter = `brightness(${value.value})`;
      break;
  }
};

export {setEffect};
