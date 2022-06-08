let numbers = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};

export function romanToInteger(str) {
    let result = 0;
    /*
 Напишите код, преобразующий число из римской записи в арабскую.
 На вход вы получите строку, ответом должно быть число.
     */
    let length = str.length;

    for (let i = 0; i < length; i++) {
        let current = numbers[str[i]];

        if (i >= length - 1) {
            result += current;
            break;
        }

        let next = numbers[str[i + 1]];

        if (next > current) {
            result += next - current;
            i++;
        } else {
            result += current;
        }
    }

    return result;
}
