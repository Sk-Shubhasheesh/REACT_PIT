import React, { useContext } from 'react'
import UserContext from '../utils/UserContext'

export default function CompoC() {
    const user = useContext(UserContext)
  return (
    <div className='border border-black'>
        <h1>User Profie</h1>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
    </div>
  )
}
