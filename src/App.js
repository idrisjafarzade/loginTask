import './App.css';
import React from 'react';
import Content from './components/common/Content';

import Blogs from './components/Blogs';
import Login from './components/Login';
import Layout from './components/common/Layout';
import { AuthProvider, useAuth } from './Proteced';
 
function App() {
  const [isAuth,setIsAuth]=React.useState(false);
  
  const authContext= useAuth();

  React.useEffect(()=>{
    console.log(authContext);

  },[authContext])

  
  return (
    <>
    <AuthProvider>
      <Layout />
    </AuthProvider>
 
    </>
  );
}

export default App;
