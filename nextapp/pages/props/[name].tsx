import { GetStaticPaths, GetStaticProps } from "next"
import {useRouter } from 'next/router'

export const getStaticProps: GetStaticProps = async (context) => {
  
  return {
    props: {
      mynum: Math.floor(Math.random() * 100),
    }
  }
}

// getStaticProps run as build time. It does not run at runtime
export const getStaticPaths : GetStaticPaths = async () => {

  return {
    paths: [{
      params: {name: 'hello'},
    },{
      params: {name: 'world'}
    },
  ],
    fallback: true
  }
}

export default function dynamic (props){
  const router = useRouter()

  if(router.isFallback){
    <h1>loading...</h1>
  }

  return <h1>dynamic number - {props.mynum}.</h1>
}