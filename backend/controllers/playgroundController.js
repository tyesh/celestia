import expressAsyncHandler from 'express-async-handler';
import { interpolateFactorToZero } from '../utils/interpolation.js';

const testFunction = expressAsyncHandler(async (req, res) => {
  console.log(interpolateFactorToZero());
  res.json({ ok: 'ok' });
});

export { testFunction };
