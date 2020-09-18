function typeNumb(a) {
  while (a < 1000) {
    if (a < 2) {
      return "Число должно быть больше 1";
    } else if (a === 2) {
      return "Простое число";
    }

    let i = 2;
    const limit = Math.sqrt(a);
    while (i <= limit) {
      if (a % i === 0) {
        return "Составное число";
      }
      i += 1;
    }

    return "Простое число";
  }
  return "Данные не верны";
}
