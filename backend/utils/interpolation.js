const interpolateThreeTabValues = (x, y, z) => {
  x = [12, 16, 20];
  y = [1.3814294, 1.3812213, 1.3812453];
  z = 0.18125;
  if (Array.isArray(x) && Array.isArray(y)) {
    if (x.length === 3 && y.length === 3 && x.length === y.length) {
      const a = y[1] - y[0];
      console.log(a);
      const b = y[2] - y[1];
      console.log(b);
      const c = b - a;
      console.log(c);
      let n = y[0];
      for (let index = 1; index < y.length; index++) {
        if (Math.abs(z - y[index]) < n) {
          n = y[index];
        }
      }
      console.log(n);
      n = z - n;
      console.log(n);
      const y1 = y[2] + (n / 2) * (a + b + n * c);
      console.log(y1);
      const ym = y[2] - (((a + b) * (a + b)) / 8) * c;
      console.log(ym);
      const nm = (-(a + b) / 2) * c;
      console.log(nm);
    }
  }
};

export { interpolateThreeTabValues };
