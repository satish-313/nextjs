import { NextApiRequest, NextApiResponse } from "next";

export default function(req: NextApiRequest, res: NextApiResponse){
  console.log(req.body)
  console.log(req.query)
  const {q} = req.query
  if(q === '1'){
    res.send(`hello you type the ${q}`)
  }
  else if( q === '2'){
    res.setHeader('it\'s-okay-not-to-be-okay','2 is op')
    res.send(`${q} is op`)
  }
  else{
    res.send(`it is not a 1 but it is ${q}`)
  }
  
}