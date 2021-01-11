import { useState } from 'react'
import styles from '../styles/main.module.css'
import jwt from 'jsonwebtoken'
import axios from 'axios'

export default function Home() {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [auth, setAuth] = useState<boolean>(false)
  const [dis,setDis] = useState<string>("")

  const HandleSubmit = async (e) => {
    e.preventDefault()
    const url = "http://localhost:3000/api/login"
    try {
      const res = await axios.post(url,{username,password})

      if (res.data.auth) {
        setAuth(true)
        const name = jwt.decode(res.data.token) as { [key: string]: string}
        setDis(name.username)
      }

      setUsername("")
      setPassword("")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h1 className={styles.h1}>hello world!</h1>
      <p>learnig nextjs</p>
      <form onSubmit={HandleSubmit}>
        <input type="text" name="username" onChange={(e) => setUsername(e.target.value)} value={username} /><br />
        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
        <input type="submit" value="Login" />
      </form>
      {auth ? <h1>{`You are login as ${dis}`}</h1> : ''}
    </div>
  )
}
