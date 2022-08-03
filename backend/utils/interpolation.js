const interpolateThreeTabValues = (valuesX, valuesY, x) => {
  x = 8 + 4.35 / 24;
  if (Array.isArray(valuesX) && Array.isArray(valuesY)) {
    if (valuesX.length === 3 && valuesY.length === 3) {
      const a = valuesY[1] - valuesY[0];
      const b = valuesY[2] - valuesY[1];
      const c = b - a;
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
  }
};

const interpolateThreeTabMinMax = (valuesX, valuesY) => {
  if (Array.isArray(valuesX) && Array.isArray(valuesY)) {
    if (valuesX.length === 3 && valuesY.length === 3) {
      const a = valuesY[1] - valuesY[0];
      const b = valuesY[2] - valuesY[1];
      const c = b - a;
      const ym = valuesY[1] - ((a + b) * (a + b)) / (8 * c);
      const nm = -((a + b) / (2 * c));
      return {
        a,
        b,
        c,
        ym,
        nm,
      };
    }
  }
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

export { interpolateThreeTabValues, interpolateThreeTabMinMax };
