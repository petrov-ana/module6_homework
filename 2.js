/*
Написать функцию, которая принимает на входе любое число (но не больше 1 000), 
определяет, является ли оно простым, и выводит простое число или нет. 
Если введено больше 1 000, то выводится сообщение, что данные неверны. 
Обратите внимание на числа 0 и 1.
*/
function isPrimeNumber(n) {

   const primeNumber = 'Число простое';
   const notPrimeNumber = 'Число не простое';
   const dataIsIncorrect = 'Неверные данные';

   if (!Number.isInteger(n) || n > 1000)
      return dataIsIncorrect;

   if (n == 2) return primeNumber;

   if (n % 2 == 0) return notPrimeNumber;

   for (let i = 3; i * i <= n; i += 2) {
      if (n % i == 0)
         return notPrimeNumber;
   }

   return primeNumber;
}

let result = isPrimeNumber(997);

console.log(result);