const isMaxLengthValid = (text, maxLength) => text.length <= maxLength;

// Cтрока короче 20 символов
isMaxLengthValid('строка', 20); // true
// Длина строки ровно 18 символов
isMaxLengthValid('проверяемая строка', 18); // true
// Строка длиннее 10 символов
isMaxLengthValid('проверяемая строка проверяемая строка', 10); // false


const isPalindrome = (data) => {
  let textToCheck;
  if (typeof data === 'number') {
    textToCheck = String(data);
  } else {
    textToCheck = data.replaceAll(' ', '').toLowerCase();
  }
  for (let i = 0; i < textToCheck.length / 2; i++) {
    if (textToCheck.at(i) !== textToCheck.at(-i - 1)) {
      return false;
    }
  }
  return true;
};

isPalindrome(68.86);


const parseDigits = (data) => {
  const text = String(data);
  let result = '';
  for (let i = 0; i < text.length; i++) {
    if (text[i] >= '0' && text[i] <= '9') {
      result += text[i];
    }
  }
  return (result === '') ? NaN : Number(result);
};

parseDigits('2023 год');
parseDigits('ECMAScript 2022');
parseDigits('-1 кефир, 0.5 батона');
parseDigits('агент 007');
parseDigits('а я томат');
parseDigits(2023);
parseDigits(-1);
parseDigits(1.5);
