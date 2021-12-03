const makeArray = (length: number) => {
  const newArray = [];

  for (let index = 0; index < length; index++) {
    newArray.push(0);
  }

  return newArray;
};

const createInvertedArray = (numberArray: number[]) => {
  const invertedArray: number[] = [];
  numberArray.forEach((number) => {
    if (number === 0) {
      invertedArray.push(1);
    } else {
      invertedArray.push(0);
    }
  });

  return invertedArray;
};

export function run(input: string[]) {
  const numberOfBits = input[0].length;
  const inputArray = input.map((inputEl) => inputEl.split(''));

  const resultArrayGamma = makeArray(numberOfBits);

  for (let index = 0; index < numberOfBits; index++) {
    let numberZero = 0;
    let numberOne = 0;

    input.forEach((inputElements) => {
      const number = inputElements[index];
      if (number === '0') numberZero++;
      if (number === '1') numberOne++;
    });

    const biggestNumber = numberZero > numberOne ? 0 : 1;
    resultArrayGamma[index] = biggestNumber;
  }

  const resultArrayEpsilon = createInvertedArray(resultArrayGamma);

  const gamma = parseInt(resultArrayGamma.join(''), 2);
  const epsilon = parseInt(resultArrayEpsilon.join(''), 2);

  return gamma * epsilon;
}
