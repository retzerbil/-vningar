const pnr = "000119375";
let sum = 0;
for (let i = 0; i < pnr.length; i++) {
  const currentNumber = +pnr[i];

  if (i % 2 === 0) {
    // * 2
    const prod = currentNumber * 2;

    if (prod > 9) {
      sum += 1 + (prod % 10);
    } else {
      sum += prod;
    }
  } else {
    // * 1
    sum += currentNumber;
  }
}

const controlNumber = 10 - (sum % 10);

console.log(pnr + controlNumber);