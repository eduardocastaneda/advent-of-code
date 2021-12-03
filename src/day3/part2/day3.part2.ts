export function run(input: string[]) {
  const numberOfBits = input[0].length;
  const inputArray = input.map((inputEl) => inputEl.split(''));
  let resultOx = inputArray.slice();
  let resultCo = inputArray.slice();

  for (let index = 0; index < numberOfBits; index++) {
    let numberZero = 0;
    let numberOne = 0;

    resultOx.forEach((inputElements) => {
      const number = inputElements[index];
      if (number === '0') numberZero++;
      if (number === '1') numberOne++;
    });

    const biggestNumber = numberZero > numberOne ? '0' : '1';
    resultOx = resultOx.filter((inputElement) => inputElement[index] === biggestNumber);
    if (resultOx.length === 1) break;
  }

  for (let index = 0; index < numberOfBits; index++) {
    let numberZero = 0;
    let numberOne = 0;

    resultCo.forEach((inputElements) => {
      const number = inputElements[index];
      if (number === '0') numberZero++;
      if (number === '1') numberOne++;
    });

    const lowestNumber = numberOne < numberZero ? '1' : '0';
    resultCo = resultCo.filter((inputElement) => inputElement[index] === lowestNumber);
    if (resultCo.length === 1) break;
  }

  const ox = parseInt(resultOx[0].join(''), 2);
  const co = parseInt(resultCo[0].join(''), 2);

  return ox * co;
}
