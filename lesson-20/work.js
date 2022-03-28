// ### NORMAL level

// #### Task 1 🖥

// Дан массив:

// ```javascript
//     const colors = ['red', 'green', 'blue']
// ```

// Выведите в консоль его длину.
// ОТВЕТ

// const colors = ['red', 'green', 'blue'];

// console.log(colors.length);

// #### Task 2 🖥

// Дан массив:

// ```javascript
//     const animals = ['monkey', 'dog', 'cat']
// ```
// Выведите в консоль его последний элемент вне зависимости от его длинны.
// ОТВЕТ

// const animals = ['monkey', 'dog', 'cat']
// console.log(animals[animals.length - 1])


// #### Task 3 🖥

// Дан массив:

// ```javascript
//     const numbers = [5, 43, 63, 23, 90]
// ```

// Удалите все элементы в массиве и выведите в консоль полученный результат.

// > Реализуйте решение двумя способами.
// ОТВЕТ
// 1 СПОСОБ

// const numbers = [5, 43, 63, 23, 90];
// numbers.splice(0,5);
// console.log(numbers);

// 2 СПОСОБ

// const numbers = [5, 43, 63, 23, 90];
// delete numbers[0];
// delete numbers[1];
// delete numbers[2];
// delete numbers[3];
// delete numbers[4];
// console.log(numbers)

// #### Task 4 🖥

// Дан массив:

// ```javascript
//     const students = ['Polina', 'Dasha', 'Masha']
// ```

// + Удалите последний элемент массива, затем вместо него добавьте в массив студента `Borya`.
// + Удалите первый элемент массива, затем вместо него добавьте в массив студента `Andrey`.
// + Полученный результат не забудьте вывести в консоль.
//ОТВЕТ 

// const students = ['Polina', 'Dasha', 'Masha']
// students.splice(2,3,"Borya");
// students.splice(0,1,"Andrey");
// console.log(students);

// #### Task 5 🖥

// Дан массив:

// ```javascript
//     const cats = ['Gachito', 'Tom', 'Batman']
// ```

// Выведите в консоль все элементы массива. Сначала через цикл **`for`**, затем **`for of`**.

// const cats = ['Gachito', 'Tom', 'Batman']
// for (i = 0; i < cats.length; i += 1){
//     console.log(cats[i]);
// }

// const cats = ['Gachito', 'Tom', 'Batman']
// for(let cat of cats){
//     console.log(cat);
// }

// #### Task 6 🖥

// ```javascript
//     const evenNumbers = [2, 4, 6, 8, 10]
//     const oddNumbers = [1, 3, 5, 7, 9]
// ```

// + Соедините два массива чисел в один.
// + В полученном массиве попробуйте найти индекс числа **`8`**

    // const evenNumbers = [2, 4, 6, 8, 10];
    // const oddNumbers = [1, 3, 5, 7, 9];
    // const sum = evenNumbers.concat(oddNumbers);
    // console.log(sum.indexOf(8));

// #### Task 7 🖥

// Дан массив:

// ```javascript
//     const binary = [0, 0, 0, 0]
// ```
// + Наш бинарный массив неполный, в нем явно не хватает единиц.
// + Превратите данный массив в строку.

// > [0, 0, 0, 0] -> '0101010'

// const binary = [0, 0, 0, 0]
// const cod = binary.join(1);
// console.log(cod);

// ### ADVANCED level

// > Для решения задач используйте циклы **`for`** или **`for of`**

// #### Task 1 👨‍🏫

// Реализуйте функцию которая будет проверять, является ли слово палиндромом.

// let a = prompt("Введите слово полиндром");
// let reverse = a.split('').reverse().join('');
// function check () {
//     if ( a === reverse) {
//         alert('Это палиндром');
//     } else if ( a !== reverse) {
//         alert('Это не полиндром');
//     }
// }
// console.log(check());

// #### Task 2 👨‍🏫

// ```javascript
//     const matrix = [
//         [12, 98, 78, 65, 23],
//         [54, 76, 98, 43, 65],
//         [13, 324, 65, 312],
//         [9092, 22, 45, 90000],
//     ]
// ```

// > Выведите в консоль среднее значение чисел в многомерном массиве.

        // const matrix = [
        //     [12, 98, 78, 65, 23],
        //     [54, 76, 98, 43, 65],
        //     [13, 324, 65, 312],
        //     [9092, 22, 45, 90000],
        // ]

//        let sum = 0;
//        let contNumb = 0;
//        for ( let i = 0; i < matrix.length; i += 1) {
//            for ( let j = 0; j < matrix [i].length; j += 1){
//                sum += matrix[i][j];
//                contNumb += 1;
//                console.log(i, j, sum, contNumb);
//            }
//        }
//        console.log(sum / contNumb);
       
// #### Task 3 👨‍🏫

// Дан массив:

// ```javascript
//    const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4]
// ```

// Создайте два массива, в один поместите все положительные числа включая 0, в другой все отрицательные. Оба массива затем выведите в консоль. 

// const mixedNumbers = [ 24, -89, 43, 0 , -1, 412, 4]

// let a = [];
// let b = [];
// for (let number of mixedNumbers) {
//     if (number > 0){
//         a.push(number)
//     } else if (number < 0){
//         b.push(number)
//     }
// }
// console.log(a)
// console.log(b)
   

// #### Task 4 👨‍🏫

// Создать массив длинной не менее 5, из динамически созданных случайных чисел. Далее написать алгоритм который берет все числа из исходного массива, возводит их в куб и записывает в новый массив. В конце вывести оба массива в консоль.
