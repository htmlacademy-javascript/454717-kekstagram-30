const isMaxLengthValid = (text, maxLength) => text.length <= maxLength;

const isPalindrome = (sequence) => {
  const textToCheck = String(sequence).replaceAll(' ', '').toLowerCase();
  for (let i = 0; i < textToCheck.length / 2; i++) {
    if (textToCheck.at(i) !== textToCheck.at(-i - 1)) {
      return false;
    }
  }
  return true;
};

const parseDigits = (sequence) => {
  const digits = String(sequence).replace(/[^0-9]+/g, '');
  return digits ? Number(digits) : NaN;
};

void(isMaxLengthValid, isPalindrome, parseDigits);
