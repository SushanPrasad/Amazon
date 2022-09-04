import { Button } from '@material-ui/core';
import React from 'react';
import "./Login.css";
import Signin from './Signin';

function Login() {
  return (
    <div className='login'>
<div className='login_container'>

    <a href='/'>
    <img src="https://ik.imagekit.io/amazonshop/amazon-2_bUAa89vOf.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1660806923405" alt='' className='image' />

    </a>
    <div className='login_text'>
      <h1> Sign in to Amazon  </h1>
    </div>

     <Signin />
     </div>

    </div>
  )
}

export default Login