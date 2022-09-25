/*
Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить в консоль, 
начиная от первого и заканчивая вторым. Используйте setInterval.

Например, пользователь ввёл числа 5 и 15. Каждую секунду в консоль должно печататься число, 
начиная с 5 и заканчивая 15 (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15)
*/
function printNumbers(firstNumber, lastNumber) {
   var timerId = setInterval(function () {
      console.log(firstNumber);
      if (firstNumber == lastNumber) {
         clearInterval(timerId);
      }
      firstNumber += 1;
   }, 1000);

}

var x = prompt("Введите первое число", "0");
var y = prompt("Введите второе число", "0");
var num1 = parseInt(x);
var num2 = parseInt(y);

printNumbers(num1, num2);