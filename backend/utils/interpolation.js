import { angleToDegrees } from './angles.js';
const MAX_ITER = 1000;

const interpolateThreeTabValues = (valuesX, valuesY, x) => {
  if (Array.isArray(valuesX) && Array.isArray(valuesY)) {
    const { a, b, c } = getThreeTabDifference(valuesY);
    const n = x - valuesX[1];
    const y = valuesY[1] + (n / 2) * (a + b + n * c);
    return {
      a,
      b,
      c,
      n,
      y,
    };
  }
  throw new Error('Tabular values size are not equals');
};

const interpolateThreeTabMinMax = (valuesY) => {
  const { a, b, c } = getThreeTabDifference(valuesY);
  const ym = valuesY[1] - ((a + b) * (a + b)) / (8 * c);
  const nm = -((a + b) / (2 * c));
  return {
    a,
    b,
    c,
    ym,
    nm,
  };
};

const interpolateFactorToZero = (n = 0, valuesY) => {
  valuesY = [-1693.4, 406.3, 2303.2];
  let n0 = n,
    count = 0,
    repeat = true;
  const { a, b } = getThreeTabDifference(valuesY);
  while (repeat && count < MAX_ITER) {
    const prevValue = n0;
    n0 = (2 * valuesY[1]) / (a + b + count - n0);
    repeat = roundNumber(prevValue, 4) !== roundNumber(n0, 4);
    count++;
  }
  console.log(count);
  console.log(roundNumber(n0, 5));
  return n0;
};

const getThreeTabDifference = (valuesY) => {
  if (valuesY.length === 3) {
    const a = valuesY[1] - valuesY[0];
    const b = valuesY[2] - valuesY[1];
    const c = b - a;
    return {
      a,
      b,
      c,
    };
  }
  throw new Error('Dimension of tabular values incorrect');
};

const getCentralIndex = (valuesX, x) => {
  let xm = Math.abs(x - valuesX[0]);
  let central = 0;
  for (let index = 1; index < valuesX.length; index++) {
    if (Math.abs(x - valuesX[index]) < xm) {
      xm = Math.abs(x - valuesX[index]);
      central = index;
    }
  }
  return central;
};

const roundNumber = (num, precision = 6) => {
  return Number(num.toFixed(precision));
};

export {
  interpolateThreeTabValues,
  interpolateThreeTabMinMax,
  interpolateFactorToZero,
};
