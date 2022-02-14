// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  id: string;
  name: string;
};

export default function getUserRequest(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ name: 'admin', id: 'ldflsdafe' });
}
