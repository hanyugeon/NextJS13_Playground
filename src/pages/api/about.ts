import { aboutData } from '@/data'
import type { AboutDataType } from '@/types/about'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<AboutDataType[]>,
) {
  res.status(200).json(aboutData)
}
