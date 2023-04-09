import { techData } from '@/data'
import type { TechDataType } from '@/types/tech'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TechDataType[]>,
) {
  res.status(200).json(techData)
}
