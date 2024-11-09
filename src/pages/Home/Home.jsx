import AccountDialog from '@/component/accountDialog/AccountDialog';
import Header from '@/component/Header';
import { AuthContext } from '@/contextApi/AuthContext';
import React, { useContext } from 'react'

const Home = () => {
  const { userInfo } = useContext(AuthContext);
  return (
    <div>
      <h4>Name: {userInfo.name}</h4>
      <h4>email: {userInfo.email}</h4>
    </div>
  )
}

export default Home