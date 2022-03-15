"use strict";

//  let user;
//  let userName = "Вася";
//  user = userName;
//  console.log(user);

/*Task 1 💻

Создайте переменные, затем сложите их и выведите результат в консоль разработчика.

Решение */

//   const x = 20
//   const y = 58
//   const z = 42
//   console.log(x + y + z)

/*  #### Task 2 💻

Создайте переменные:

    - количество секунд в минуте
    - количество минут в часу
    - количество часов в сутках
    - количество суток в году
    
Посчитайте ваш возраст в секундах и поместите результат в переменную **`myAgeInSeconds`** (Сделал так как ты говорил на уроке через prompt)

Решение*/

//   const secondsInMinutes = 60;
//   const minutesInHour = 60;
//   const hourInDays = 24;
//   const daysInYear = 365;
//   let age = prompt('Сколько тебе лет ? ');
//   let myAgeInSeconds = age * daysInYear * hourInDays * minutesInHour * secondsInMinutes;
//   alert(`Твой возраст в секундах ${myAgeInSeconds}`);
//   console.log(myAgeInSeconds);

/*#### Task 3 💻
Создайте две переменные. Поместите в них переменную **`count`** и превратите в строку, а **`userName`** наоборот в число.
Попробуйте реализовать задачу двумя разными способами.

Решение*/

//    let userAge = '25' * '42';
//    let count = 42;
//    let userName = '42';
//    let city = 'minsk'+ 42;
//    count = String(count);
//    console.log(typeof count);
//    userName = Number(userName);
//    console.log(typeof userName);
//    console.log(typeof userAge);
//    console.log(typeof city);

/*#### Task 4 💻
Имеется три переменные:

```javascript
  let a = 1
  let b = 2
  let c = "белых медведей"
```

Сложите переменные так, чтобы в результате получилось выражение: **`12 белых медведей`** и результат выведите в консоль.

Решение*/

//   const a = 1;
//   const b = '2';
//   const c = "белых медведей";
//   console.log(a + b + c);

/*#### Task 5 💻

Создайте переменные и поместите в них нижеприведенные слова. Затем создайте еще одну переменную **`lengthWords`** и посчитайте в ней длинну всех слов из списка:

    - доступ 
    - морпех
    - наледь
    - попрек
    - рубило

    Решение*/

//  const a = 'доступ';
//  const b = 'морпех';
//  const c = 'наледь';
//  const d = 'попрек';
//  const e = 'рубило';
//  const wordLength = (a + b + c + d + e).length;
//  console.log(wordLength);

/*#### Task 6 💻
    
Создать 3 переменные разных типов и вывести в консоль для каждой из них строку следующего вида:    

    `Variable: %variable name% have type: %type variable%`

Решение*/

//  const dog = 'Variable: %variable name% have type: %type variable%';
//  var man = 'Variable: %variable name% have type: %type variable%';
//  let cat = 'Variable: %variable name% have type: %type variable%';
//  console.log(dog);
//  console.log(cat);
//  console.log(man);

/*#### Task 7 💻

Запросить у пользователя имя и возраст и вывести их в консоль.

Решение*/

//  let userName = prompt('Как тебя зовут?');
//  let userAge = prompt('Сколько тебе лет ?');
//  console.log(userName);
//  console.log(userAge);

/* ### ADVANCED level

#### Task 1 👨‍🏫 

Поменяйте значение переменных местами не создавая дополнительной переменной:

```javascript
    let a = 4
    let b = 3
```
Решение*/

//    let a = 4;
//    let b = 3;
//    [a,b] = [b,a];
//    console.log(a);

/* #### Task 2 👨‍🏫 

В данном послании скрыт шифр! Чтобы его разгадать нам нужно соединить все вторые символы слов!

```javascript
    let codeWord1 = "обернись";
    let codeWord2 = "неужели";
    let codeWord3 = "огурцы";
    let codeWord4 = "липкие";
    let codeWord5 = "?!";
```

Создайте переменную **`cipher`** и поместите туда необходимые символы

Решение*/

//    let codeWord1 = "обернись";
//    let codeWord2 = "неужели";
//    let codeWord3 = "огурцы";
//    let codeWord4 = "липкие";
//    let codeWord5 = "?!";
//    let cipher = 'беги!';

/*Дополнительные задачи 
Задание 1 */

//      let user = prompt('Сколько часов вы занималсись ?');
//      let water = Math.floor(user * 0.5);
//      console.log(typeof water)
//      alert(`Ты должен выпить ${water}  литров воды !`);

/*Задание 2*/

//      let numberOfYears = prompt('Какой сейчас год ?');         /*Узнаю год */
//      let calculation = Math.ceil(numberOfYears / 100);           /*Узнаю век*/
//      let typeOfYear = Math.round(numberOfYears / 4);           /*Узнаю тип с округлением */
//      let type = numberOfYears / 4;                             /*Узнаю тип без округления */    
//      if (typeOfYear === type){
//          alert("Это высокостный год :)");
//      } else{
//          alert("Это не высокостный год :(");
//      }
//      alert(`Ты находишся в ${calculation}  веке`);




