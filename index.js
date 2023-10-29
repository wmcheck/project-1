'use strict';

// Метод массива forEach() позволяет применить колбэк-функцию 
// ко всем элементам массива.

const arrNumber = [1, 2, 3, 4, 5, 6];
console.log(arrNumber);

arrNumber.forEach((num) => {
  console.log(num * 2);
});


function sliceFruit(fruit) {
  console.log('Разрезаю ' + fruit + '!')
}

const fruits = ['🍎', '🍊', '🍋', '🍓', '🥝']

fruits.forEach(sliceFruit)
fruits.forEach(
  console.log
)

const food = ['🍔', '🍟', '🍦']
food.forEach((item, index, arr) => {
  console.log('Текущий элемент ' + item)
  console.log('Его индекс ' + index)
  console.log('Исходный массив ' + arr)
})

const empty = []
console.log(empty.forEach, food.forEach)