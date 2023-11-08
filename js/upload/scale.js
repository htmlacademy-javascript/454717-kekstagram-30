const scale = document.querySelector('.scale__control--value');
const scaleDown = document.querySelector('.scale__control--smaller');
const scaleUp = document.querySelector('.scale__control--bigger');

const setScale = (image, step = 25) => {
  let scaleValue = 100;

  scaleDown.addEventListener ('click', () => {
    if (scaleValue > 25) {
      scaleValue -= step;
      scale.value = `${scaleValue}%`;
      image.style.transform = `scale(${scaleValue / 100})`;
    }
  });

  scaleUp.addEventListener ('click', () => {
    if (scaleValue < 100) {
      scaleValue += step;
      scale.value = `${scaleValue}%`;
      image.style.transform = `scale(${scaleValue / 100})`;
    }
  });
};

export {setScale};
