import { NextApiRequest, NextApiResponse } from 'next';
import { ping } from '../../../server/handlers';

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  const body = ping();
  res.status(200).send(body);
}
