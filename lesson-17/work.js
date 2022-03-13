"use strict"

/*#### Task 1 💻

Создайте переменные и присвойте им значения:

```javascript
    'true'
    false
    17
    undefined
    null
```
> Затем с помощью оператора **`typeof`** выведите в консоль все типы созданных значений переменных.*/

// let a = 2 > 1;
// let b = 2 < 1;
// let c = 17;
// let e;
// let v = null;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(e);
// console.log(v);

// Даны две переменные:

// ```javascript
//     let height = 15
//     let width = 20
// ```

// > С помощью условий выведите в консоль разработчика наибольшее число.

// let hight = 15;
// let width = 20;
// if (width > hight){
//     console.log(width);
// } else{
//     console.log(hight);
// }

// #### Task 3 💻

// Написать перебор от 1 до 20, где выведутся все числа кратные трём.

// > Для вычисления кратности обратите внимание на оператор %

// for(let num = 1;num < 20;num += 1){
//     if(num % 3 === 0)console.log(num);
// }

// #### Task 4 💻

// Нам надо идти на работу, но нужно проверить все ли мы взяли или нет?
// Нам точно нужны ключи документы и ручка, но из еды нам надо яблоко или апельсин. 
// Для решения этой задачи нам помогут логические операторы **`|| &&`**.

// ```javascript
//     let key = true
//     let documents = true
//     let pen = true
//     let apple = false
//     let orange = true
// ```

    // let key = true
    // let documents = true
    // let pen = true
    // let apple = false
    // let orange = true
    // let shouldGoToWork = key && documents && pen && (apple || orange);
    // console.log(shouldGoToWork);

    // #### Task 5 💻

    // Запросить у пользователя число: 
    
    //     1. Если число делится без остатка на 5 выводим сообщение Fiz
    //     2. Если число делится без остатка на 3 выводим сообшение Buz
    //     3. Если число делится без остатка и на 3 и на 5 выводим сообшение FizBuz
    

    // let num = prompt('Введите число!');
    // if (num % 3 === 0 && num % 5 === 0){
    //     alert("FuzBuz")
    // } else if( num % 5 === 0){
    //     alert("Fuz")
    //     console.log(num)
    // } else if(num % 3 === 0){
    //     alert("Buz");
    // }

//     #### Task 6 💻

// Написать программу, которая выполняет следующие операции:

// - Запрашивает у пользователя возраст, если он больше 18, то выводит сообщение - `Попей пивка`. 
// - Если меньше, то выводит сообщение - `Пей колу`. 
// - Добавить условие, что если возраст от 16-18, выводим сообщение - `Можешь выкурить сигаретку, только маме не говори`.


// let age = prompt("Сколько тебе лет?")
// if (age >= 16 && age < 18){
//     alert("Покури )");
// } else if(age > 18){
//     alert("Попей пивка!");
// } else if(age < 18){
//     alert("Пей колу!");
// }

// # Task 7 💻

// Напишем программу для туристического терминала. Запросите у пользователя в какую сторону света он бы хотел отправиться. После ввода данных мы должны вывести в консоль сообщение из списка. Если пользователь ввел неверные данные, выведите сообщение в консоль чтобы он попробовал еще раз.

// + `юг` на юг пойдешь счастье найдешь
// + `север` на север пойдешь много денег найдешь
// + `запад` на запад пойдешь верного друга найдешь
// + `восток` на восток пойдешь разработчиком станешь

// > 

// let direction = prompt('Куда тебе надо ?!')
// switch (direction){
//     case "юг":
//         alert('На юг пойдешь счастье найдешь');
//         break;
//     case "север":
//         alert('На север пойдешь много денег найдешь');
//         break;
//     case "запад":
//         alert('На запад пойдешь верного друга найдешь');
//         break;
//     case "восток":
//         alert('На восток пойдешь разработчиком станешь');
//         break;
//     default:
//         alert('Попробуй снова')
// }
    
    /*ДОПОЛНИТЕЛЬНЫЕ ЗАДАНИЯ !!!*/

    // ## Task 1
    // Перепишите "if..else" в "?"
    // ```
    // let result;
    
    // if (a + b < 4) {
    //   result = 'Мало';
    // } else {
    //   result = 'Много'
    // }
    // ``

//  let a = +prompt(); 
//  let b = +prompt(); 
 
//  let result = a + b < 4 ? "Мало" : "Много"; 
//  alert(result); 
 
// ## Task 2
// Проверка логина
// Напишите код, который будет спрашивать логин с помощью prompt.
// Если посетитель вводит «Админ», то prompt запрашивает пароль,
// если ничего не введено или нажата клавиша Esc – показать «Отменено»,
// в противном случае отобразить «Я вас не знаю».
// Пароль проверять так:
//     Если введён пароль «Я главный», то выводить «Здравствуйте!»,
//     Иначе – «Неверный пароль»,
//     При отмене – «Отменено».

//  let login = prompt("Ваш логин"); 
//  console.log(login); 
//  let massage; 
//  if (login === "admin") { 
//    let pass = prompt("Пароль"); 
//    if (pass === "Я главный") { 
//      alert("Здравствуйте!"); 
//    } else if (pass === null) { 
//      alert("Отмена!"); 
//    } else { 
//      alert("Неверный пороль!"); 
//    } 
//  } else if (login === null) { 
//    alert("Отмена!"); 
//  } else { 
//      alert('Я вас не знаю!') 
//  } 
 
// # Task 3
// Вывести все четные числа от 1 до n


// for (let num = 0; num < 100; num += 1){ 
//     if (num % 2 === 0) { 
//         console.log(num) 
//     } 
// } 
 
// ## Task 4
// Бесконечный цикл до тех пор пока пользователь не ввел больше 100


// let num = +prompt("Ведите число!"); 
// for (num;;num += 1) { 
//   console.log(num); 
//   if (num > 100) break; 
// }

// ## Task 5
// Калькулятор на switch


// let question = prompt('Введите действие (Сложение,умножение,вычитание или деление)');
// switch(question){
//     case 'Сложение':
//         let numAddition1 = +prompt('Введите число');
//         let numAddition2 = +prompt('Введите число');
//         let resultAddition = numAddition1 + numAddition2;
//         alert(`Результат ${resultAddition}`);
//         break;
//     case 'умножение':
//         let numMultiplication1 = +prompt('Введите число');
//         let numMultiplication2 = +prompt('Введите число');
//         let resultMultiplication = numMultiplication1 * numMultiplication2;
//         alert(`Результат ${resultMultiplication}`);
//         break;
//     case 'вычитание':
//         let numSubtraction1 = +prompt('Введите число');
//         let numSubtraction2 = +prompt('Введите число');
//         let resultSubtraction = numSubtraction1 - numSubtraction2;
//         alert(`Результат ${resultSubtraction}`);
//         break;
//     case 'деление':
//         let numDivision1 = +prompt('Введите число');
//         let numDivision2 = +prompt('Введите число');
//         let resultDivision = numDivision1 / numDivision2;
//         alert(`Результат ${resultDivision}`);
//         break;
// }


// ## Task 6
// Выбор поддержки браузера через switch
// Если Chrome, Firefox, Safari, Opera, то выводить "Мы поддерживаем эти браузеры"
// Если Edge то выводит "У тебя Edge!"


// let userBrowser = prompt('Какой у вас Браузер ?')
// switch(userBrowser){
//     case 'Chrome':
//         alert('Мы поддерживаем этот браузер');
//         break;
//     case 'Firefox':
//         alert('Мы поддерживаем этот браузер');
//         break;
//     case 'Safari':
//         alert('Мы поддерживаем этот браузер');
//         break;
//     case 'Opera':
//         alert('Мы поддерживаем этот браузер');
//         break;
//     case 'Edge':
//         alert('У тебя Edge!');
//         break;
// }

// ## Task 7
// Задача про собак и их вес
// Пользователь вводит вес своей собаки.
// Если собака весит больше или ровно 15 кг, то выводить "Моя собака делает ГАВ-ГАВ"
// Если собака весит меньше 15 кг , но больше 2, то выводит в консоль "Моя собака делает гав-гав"
// Если собака весит меньше, то выводит в консоль "Моя собака слишком маленькая, чтобы она что-то делала"


// let weightDog = +prompt('Введите вес собаки ^_^');
// if (weightDog < 15 && weightDog > 2){
//     alert('Моя собака делает гав-гав')
// } else if (weightDog >= 15){
//     alert('Моя собака делает ГАВ-ГАВ')
// } else if (weightDog < 2){
//     alert('Моя собака слишком маленькая, чтобы она что-то делала')
// }