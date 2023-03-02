// let salary = Number(prompt('Введите вашу зп'));
// let allMoney = salary / 100 * 87;
// console.log(`Деньги которые в твоём распоряжении ${allMoney}`);
function numMonth(monthNumber) {
    while (monthNumber <= 12) {
        if (monthNumber >= 1 && monthNumber <= 2 || monthNumber === 12) {
            console.log('Зима');
        } else if (monthNumber >= 3 && monthNumber <= 5) {
            console.log('Весна');
        } else if (monthNumber >= 6 && monthNumber <= 8) {
            console.log('Лето');
        } else if (monthNumber >= 9 && monthNumber <= 11) {
            console.log('Осень');
        }
        monthNumber++;
    }
}
numMonth(5);
// let monthNumber = 1;
// while (monthNumber <= 12) {
//     if (monthNumber >= 1 && monthNumber <= 2 || monthNumber === 12) {
//         console.log('Зима');
//     } else if (monthNumber >= 3 && monthNumber <= 5) {
//         console.log('Весна');
//     } else if (monthNumber >= 6 && monthNumber <= 8) {
//         console.log('Лето');
//     } else if (monthNumber >= 9 && monthNumber <= 11) {
//         console.log('Осень');
//     }
//     monthNumber++;
// }
// Увеличиваем значение monthNumber для следующего шага на 1
// это я пытался сделать функцию:
// if (a = 12 || a <= 2) {
//     console.log('Зима');
// } else if (a >= 3 || a <= 5) {
//     console.log('Весна');
// } else if (a >= 6 || a <= 8) {
//     console.log('Лето');
// } else if (a >= 9 || a <= 11) {
//     console.log('Осень');
// }