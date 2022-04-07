import React from 'react'
import { useAuth } from '../../Proteced';
import Login from '../Login';
import Content from './Content';

function Layout({children}) {

  const authContext = useAuth();




  return (
    <>
          {
            authContext?.isAuth?
            <Content/>
            :<Login/>
    }
    </>
  )
}

export default Layout