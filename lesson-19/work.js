// #### Task 1 💻

// Создать любой обьект с двумя ключами и любыми значениями в них, а затем удалить ключи из обьекта. 


// let work = { 
//   name: "Vlad", 
//   box: "Big", 
// }; 
// delete work.name; 
// console.log(work); 
 
// #### Task 2 🖥

// Создать любой обьект с двумя ключами и любыми значениями в них, а затем проверить есть ли в обьекте определенный ключ и если есть вывести в консоль **true**


// console.log('box' in work); 
 
// #### Task 3 🖥

// Дан обьект:

// ```javascript
//     const student = {
//         name: 'John',
//         age: 19,
//         isHappy: true
//     }
// C помощью цикла **for in** вывести в консоль сначала все ключи, потом значения ключей обьекта.

// const student = { 
//   name: 'John', 
//   age: 19, 
//   isHappy: 'true' 
// } 
// for (let room in student) { 
//   console.log(room) 
//   console.log(student[room]) 
//  } 

// #### Task 4 🖥
// Дан обьект:
// ```javascript
// const colors = {
//     'ru pum pu ru rum': {
//         red: 'красный',
//         green: 'зеленый',
//         blue: 'синий'
//     },
// };
// Вывести в консоль слово красный и синий

// const colos = { 
//   'ru pum pu ru rum': { 
//     red: 'Красный', 
//     green: 'зеленый', 
//     blue: 'синий' 
//   }, 
// }; 
 
// console.log(colos['ru pum pu ru rum'].red); 
// console.log(colos['ru pum pu ru rum'].blue); 
 
// #### Task 5 🖥
// Дан обьект:
// ```javascript
//     let salaries = {
//         andrey: 500,
//         sveta: 413,
//         anton: 987,
//         andrey: 664,
//         alexandra: 199
//     }
// ```
// Вычислите среднюю зарплату сотрудников и результат поместите в соответствующую переменную

// let salaries = { 
//   andrey: 500, 
//   sveta: 413, 
//   anton: 987, 
//   andry: 664, 
//   alexandra: 199 
// } 
// let sum = 0; 
// let n = 0; 
// for (let key in salaries) { 
//   sum = sum + salaries[key]; 
//   n += 1; 
// } 
// let allSum = sum / n; 
// console.log(allSum); 
 
// #### Task 6 🖥

// Создать валидатор, запросить у пользователя логин и пароль для регистрации. Затем данные записать в обьект. 
// Потом попросить пользователя подтвердить данные. Если верно введен логин и пароль, вывести сообщение **Добро пожалоВать**. 


// let userName = prompt('Введите логин');
// let userPassword = prompt('Введите пароль');

// let wrapper = {
//     login: userName,
//     password: userPassword,
// }
// let a = confirm(${userName} это твой логин? ${userPassword} твой пароль?);
// if (a) {
//     alert("Добро пожаловать")
// } else {
//     alert("досвидос")
// }

// ### ADVANCED level
// ### Task 2 🖥

// Даны два одинаковых обьекта. Сравните их так чтобы они были равны

// ```javascript
//     let student1 = {
//         name: 'Polina',
//         age: 27,
//     }

//     let student2 = {
//         name: 'Polina',
//         age: 27,
//     }
// ```


// let student1 = {
//     name: 'Polina',
//     age: 27,
// }
// let student2 = {
//     name: 'Polina',
//     age: 27,
// }
// console.log(JSON.stringify(student1) === JSON.stringify(student2));

// #### Task 3 🖥

// У нас есть обьект с животными. Наша задача узнать имя птицы и вывести его в консоль. Но произошла ошибка и в этом обьекте нету птицы. Если попробуем узнать имя мы получим **ОШИБКУ**. 
// Задача придумать как обратиться к несуществующему обьекту и не получить ошибку чтобы наша программа работала дальше.

// ```javascript
// const animals = {
//    cat: {
//       name: 'Енчик',
//       age: 3,
//    },
//    dog: {
//       name: 'Орео',
//       age: 2,
//    }
// }
// ```


// const animals = {
//     cat: {
//         name: 'Енчик',
//         age: 3,
//     },
//     dog: {
//         name: 'Орео',
//         age: 2,
//     }
// }
// console.log(animals && animals.bird && animals.bird.name);
