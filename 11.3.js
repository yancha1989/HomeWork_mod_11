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
