const isMaxLengthValid = (string, maxLength) => string.length <= maxLength;

// Cтрока короче 20 символов
isMaxLengthValid('строка', 20); // true
// Длина строки ровно 18 символов
isMaxLengthValid('проверяемая строка', 18); // true
// Строка длиннее 10 символов
isMaxLengthValid('проверяемая строка проверяемая строка', 10); // false


const isPalindrom = (string) => {
  const stringToCheck = string.replaceAll(' ', '').toLowerCase();
  for (let i = 0; i < stringToCheck.length / 2; i++) {
    if (stringToCheck.at(i) !== stringToCheck.at(-i - 1)) {
      return false;
    }
  }
  return true;
};

isPalindrom('Топ от');


const parseDigits = (data) => {
  const string = String(data);
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] >= '0' && string[i] <= '9') {
      result += string[i];
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
