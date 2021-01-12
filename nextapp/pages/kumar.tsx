import Link from 'next/link'

export default function () {
  return (
    <div>
      <h1>hi kumar</h1>
      <Link href="/satish"><a>Go to kumar</a></Link><br/>
      <Link href="/"><a>Go to index</a></Link>
    </div>
  )
}