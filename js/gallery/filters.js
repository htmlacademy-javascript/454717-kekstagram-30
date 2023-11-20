const container = document.querySelector('.img-filters');
const form = container.querySelector('.img-filters__form');
const filterButtons = container.querySelectorAll('.img-filters__button');

const onFormClick = (event) => {
  if (event.target.closest('.img-filters__button')) {
    filterButtons.forEach((item) => item.classList.remove('img-filters__button--active'));
    event.target.classList.add('img-filters__button--active');
    const filterSetting = event.target.id.replace('filter-', '');
    document.dispatchEvent(new CustomEvent('filterChange', {detail: filterSetting}));
  }
};

const initFilters = () => {
  container.classList.remove('img-filters--inactive');
  form.addEventListener('click', onFormClick);
};

const shuffle = (sequence) => {
  const copiedSequence = structuredClone(sequence);
  for (let i = copiedSequence.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copiedSequence[i], copiedSequence[j]] = [copiedSequence[j], copiedSequence[i]];
  }
  return copiedSequence;
};

const filterData = (data, setting) => {
  const compareThumbnails = (thumbnailA, thumbnailB) => {
    if (thumbnailA.comments.length > thumbnailB.comments.length) {
      return thumbnailB.comments.length - thumbnailA.comments.length;
    }
  };

  switch (setting) {
    case 'default':
      return data;
    case 'discussed':
      return data.slice().sort(compareThumbnails);
    case 'random':
      return shuffle(data).slice(0, 10);
  }
};

export {initFilters, filterData};
