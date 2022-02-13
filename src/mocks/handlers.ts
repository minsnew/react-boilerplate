import { rest } from 'msw';

export const handlers = [
  rest.get('/fetchCount', (req, res, ctx) => {
    const amount = req.params.amount ?? 1;

    return res(
      ctx.status(200),
      ctx.json({
        data: amount,
      }),
    );
  }),
];
