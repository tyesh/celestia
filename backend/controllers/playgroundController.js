import expressAsyncHandler from 'express-async-handler';

const testFunction = expressAsyncHandler(async (req, res) => {
  res.json({ ok: 'ok' });
});

export { testFunction };
