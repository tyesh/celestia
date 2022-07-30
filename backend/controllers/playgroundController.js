import expressAsyncHandler from 'express-async-handler';
import { interpolateThreeTabValues } from '../utils/interpolation.js';

const testFunction = expressAsyncHandler(async (req, res) => {
  console.log(interpolateThreeTabValues());
  res.json({ ok: 'ok' });
});

export { testFunction };
