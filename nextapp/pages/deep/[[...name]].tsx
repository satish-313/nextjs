import {useRouter} from 'next/router'

export default function name() {
  const router = useRouter()

  console.log(router.query)
  const list = router.query.name
  try {
    console.log(list)
  } catch (error) {
    console.log('master')
  }
  
  return <h1>dello</h1>
}