const isStringLengthValid = (string, maxLength) => string.length <= maxLength;

// Cтрока короче 20 символов
isStringLengthValid('строка', 20); // true
// Длина строки ровно 18 символов
isStringLengthValid('проверяемая строка', 18); // true
// Строка длиннее 10 символов
isStringLengthValid('проверяемая строка проверяемая строка', 10); // false


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
