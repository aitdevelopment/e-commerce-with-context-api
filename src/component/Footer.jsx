import { AuthContext } from '@/contextApi/AuthContext'
import React, { useContext } from 'react'

const Footer = () => {

  const {userInfo} = useContext(AuthContext)
  return (
    <div>
      <h4>{userInfo.name}</h4>
      <h4>{userInfo.email}</h4>
    </div>
  )
}

export default Footer