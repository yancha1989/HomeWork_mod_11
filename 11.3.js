//11.3 написал два варианта
function func(num1, num2) {
  function sum(num) {
    return num;
  }

  return sum(num1) + sum(num2);
}

func(7, 3);

//2
function outputResult(result) {
  console.log(result);
}

function sum(num1, num2) {
  const result = num1 + num2;

  outputResult(result);
}

sum(5, 11);

// Оба варианта не соответствуют заданию, к сожалению :) Скорее всего, не совсем правильно поняли задание. Нужно создать функцию, которая возвращает другую функцию, причем каждая из этих функций (и внутренняя и внешняя) принимают в качестве аргумента по одному числу. Вторая функция возвращает сумму этих чисел. Правильный вариант решения ниже:

function getSumFunction(a) {
  return function(b) {
  	return a+b;
  }
}

const sumFunction = getSumFunction(2);

const sum = sumFunction(3);

console.log(sum); // 5