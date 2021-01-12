import { useRouter } from 'next/router'

export default function Fruitname() {
  const router = useRouter()

  // console.log(router)

  const takemehome = () => {
    router.push('/')
  }

  return <h1>hello from inner section,{router.query.fruit} and inner is {router.query.name}
    <button onClick={takemehome}>Home</button>
  </h1>
}