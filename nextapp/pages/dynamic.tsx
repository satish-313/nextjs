import { GetStaticProps } from "next"
import path from 'path'

// execution first on server
export const getStaticProps: GetStaticProps = async (context) => {
  
  const fs = require('fs')

  const txt = fs.readFileSync(path.join(process.cwd(), 'public/iam.txt'),'utf8')
  
  return {
    // revalidate:10, work on production , in 10 sec request update page
    props: {
      mynum: 20,
      txt
    }
  }
}

// execution on server and pages
export default function dynamic ({mynum,txt}){
  // const {mynum} = props
  return <h1>dynamic number - {mynum}.. {txt}</h1>
}