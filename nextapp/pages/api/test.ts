import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest,res: NextApiResponse) => {
  res.json({status: '200',num: Math.floor(Math.random() *100)})
}

// http://localhost/api/test