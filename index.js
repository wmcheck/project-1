'use strict';

// // Метод массива forEach() позволяет применить колбэк-функцию
// // ко всем элементам массива.

// const arrNumber = [1, 2, 3, 4, 5, 6];
// console.log(arrNumber);

// arrNumber.forEach((num) => {
//   console.log(num * 2);
// });

// function sliceFruit(fruit) {
//   console.log('Разрезаю ' + fruit + '!')
// }

// const fruits = ['🍎', '🍊', '🍋', '🍓', '🥝']

// fruits.forEach(sliceFruit)
// fruits.forEach(
//   console.log
// )

// const food = ['🍔', '🍟', '🍦']
// food.forEach((item, index, arr) => {
//   console.log('Текущий элемент ' + item)
//   console.log('Его индекс ' + index)
//   console.log('Исходный массив ' + arr)
// })

// const empty = []
// console.log(empty.forEach, food.forEach)

// function doa() {
//   const tos = 1;
// }

// function doa() {
//   console.log('y')
//   var tos = 2;
//   return;
//   //const tos
// }
// // doa()

// 5. Получить единый массив из любимых пицц каждого друга
// ['cheese', 'pepperoni', 'meat', 'fish']
const friends = [
    { name: 'alex', pizzas: ['cheese', 'pepperoni'] },
    { name: 'mike', pizzas: ['salami', 'margarita'] },
    { name: 'stas', pizzas: ['meat'] },
    { name: 'anna', pizzas: ['fish', 'margarita'] },
];

const lovePizzas = (list) => {
    const pizz = [];
    list.forEach((friend) => {
        pizz.push(...friend.pizzas);
    });
    return [...new Set(pizz)];
};

console.log(lovePizzas(friends));

const pizzas = friends.reduce((accum, current) => {
    return [...accum, ...current.pizzas];
}, []);

console.log(pizzas);

console.log('pizzas');

// 6. Записать строку (символы строки) в обратном порядке (2 способа)
// pizza => azzip
const myStr = 'pizza';

const reverse1 = myStr.split('').reverse().join('');
console.log(reverse1);