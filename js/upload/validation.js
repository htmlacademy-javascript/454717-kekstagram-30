import '../../vendor/pristine/pristine.min.js';

const form = document.querySelector('.img-upload__form');
const inputHashtags = form.querySelector('.text__hashtags');

const pristine = new Pristine(form,
  {classTo: 'text__hashtags',
  errorTextParent: 'form-group',
  errorTextClass: 'text-help'
});

// const validateHashtags = (hashtag) => {
//   const regexp = /^#[a-zа-яё0-9]{1,19}$/i;
//   regexp.test(hashtag);
// };

// pristine.addValidator (
//   inputHashtags,
//   validateHashtags(inputHashtags.value),
//   'введён невалидный хэш-тег'
// );
