import { NextApiRequest, NextApiResponse } from "next";
import jwt from 'jsonwebtoken'

const secret = 'lkajdflkjdalfkjadlkfjlkldkfj'

export default function(req: NextApiRequest ,res: NextApiResponse ) {
  if(!req.body){
    res.end('error')
    return
  }

  const {username,password} = req.body
  
  res.json({
    auth:true,
    token: jwt.sign(
      {
        username,
      },
      secret
    )
  })
}