const isShorterThanMaxLength = (string, maxLength) => string.length <= maxLength;

// Cтрока короче 20 символов
isShorterThanMaxLength('строка', 20); // true
// Длина строки ровно 18 символов
isShorterThanMaxLength('проверяемая строка', 18); // true
// Строка длиннее 10 символов
isShorterThanMaxLength('проверяемая строка проверяемая строка', 10); // false
