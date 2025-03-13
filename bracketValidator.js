// Функция для проверки корректности последовательности скобок
function isValid(s) {
    // Создаем стек для хранения открывающих скобок
    const stack = [];

    // Создаем объект для сопоставления открывающих и закрывающих скобок
    const brackets = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    // Проходим по каждому символу строки
    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            // Если символ — открывающая скобка, добавляем её в стек
            stack.push(char);
        } else if (char === ')' || char === '}' || char === ']') {
            // Если символ — закрывающая скобка, проверяем соответствие
            if (stack.length === 0 || stack.pop() !== brackets[char]) {
                return false;
            }
        }
    }

    // Если стек пуст, последовательность корректна
    return stack.length === 0;
}

// Примеры использования
console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([)]")); // false
console.log(isValid("{[]}")); // true
console.log(isValid("")); // true (пустая строка)

// Дополнительные тесты
console.log(isValid("((()))")); // true
console.log(isValid("{[()]}")); // true
console.log(isValid("{[}]")); // false
console.log(isValid("({[]})")); // true
console.log(isValid("({[}])")); // false
