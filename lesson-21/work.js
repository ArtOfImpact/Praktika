// 1 задание +++++++

// const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

// function look(a){
//     console.log(a);
// }
// look(fibonacci);

// let look2 = (a) => {console.log(a)}
// look2(fibonacci);

// 2 задание +++++++++++++++++++++++++++++++++++

// const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']

// const newUsers = users.map((v,index) => `Member ${ index + 1}`+ ':' + v);
// console.log(newUsers)


// function show (a){
    
//     for(i = 0; i < a.length; i++){
//     console.log('Member' + [i + 1] + ':' + a[i]);
//     }
    
// }
// (show(users))

// Задание 3 +++++++++++++++

// С помощью метода **`filter`** создайте новый массив в котором не будет отрицательных чисел.



    // const numbers = [7, -4, 32, -90, 54, 32, -21]

    // let number = numbers.filter((i) => i > 0)
    // console.log(number)

    // function show (a){
    //     let q = []
    //     console.log(q)
    //     let b = []
    //     console.log(b)
    //     for(i = 0;i < a.length;i++){
    //         if (a[i] > 0 ){
    //             q.push(a[i])
    //             console.log()
    //         } else if (a[i] < 0){
    //             b.push(a[i])
    //         }
    //     } 
    //     return q;
    // }
    // console.log(show(numbers))

// Задание 4 ++++++++++++++++++++++

// Используя метод **`reduce`** получите сумму всех чисел массива.


    // const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

     // let sum = fibonacci.reduce((i,a) => i + a)
     // console.log(sum)

    // function col (a){
    //     let sum = 0; 
    //     for(i = 0; i < a.length; i++){
    //         sum = sum + a[i];
    //     }
    //     return sum;
    // }
    // console.log(col(fibonacci));

// Задание 5 +++++++++++++++++++++

// Используя метод **`find`** найдите в массиве первое четное число.


    // const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]

    // let show = numbers.find((i) => i % 2 === 0)
    // console.log(show)

    // function col (a){
    //     for(i = 0; i < a.length; i++){
    //         if (a[i] % 2 === 0){
    //             alert(`Это четное число ${a[i]}`)
    //         }  
    //     }
    // }
    // console.log(col(numbers))
