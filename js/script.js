//Задача 1
let name = prompt ('Ваше имя');
alert ('Меня зовут ' + name);

let age = prompt ('Сколько Вам лет?');
alert ('Мне ' + age + ' ' + 'лет');

let city = prompt ('В каком городе живете?');
alert ('Я проживаю в городе' + ' ' + city);

let phone = prompt ('Ваш телефон?');
alert ('Мои контактные данные' + ' ' + phone);

let email = prompt ('Ваша почта?');
alert ('Моя почта' + ' ' + email);

let company = prompt ('Где Вы работаете?');
alert ('Я работаю в компании' + ' ' + company);


// //Задача 2
console.log(name + ' родился/сь в ' + (2021-age) + ' ' + 'году');



//Задача 3
let str = prompt('Введите число из 6 цифр');
if ((+str[0] + +str[1] + +str[2]) == (+str[3] + +str[4] + +str[5])) {
console.log('Да');
} else {
console.log('Нет');
}



// //Задача 4
let number = prompt ('Введите число');
let access = (number > 0) ? ('Верно!'): ('Неверно!');
console.log (access);

//Задача 5
let a = 10,
    b = 2;
console.log (a + b);
console.log (a - b);
console.log (a * b);
console.log (a / b);
if (a+b>1) console.log (a+b**2);

//Задача 6


if (2<a<11) {
    console.log ('Верно');
    } else {
    console.log ('Hеверно');
    }

if (6<=b<14) {
    console.log ('Верно');
    } else {
    console.log ('Hеверно');
    }

//Задача 7
let n = prompt ("Введите число от 0 до 59");
  
 if (n >= 0 && n <= 14) {
     console.log ("Первая");
 }
 if (n >= 15 && n <= 30) {
    console.log ("Вторая");
 }
 if (n >= 31 && n <= 45) {
    console.log ("Третья");
 }
  if (n >= 46 && n <= 59) {
    console.log ("Четвертая");
}

//Задача 8
let day = prompt ("Введите число от 1 до 31");
  
 if (day >= 1 && day <= 10) {
     console.log ("Первая");
 }
 if (day >= 11 && day <= 20) {
    console.log ("Вторая");
 }
 if (day >= 21 && day <= 31) {
    console.log ("Третья");
 }