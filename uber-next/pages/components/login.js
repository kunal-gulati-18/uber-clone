import React, { useState, useEffect } from 'react'
import tw from "tailwind-styled-components";
import { useRouter } from  'next/router';
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { auth, provider } from '../../firebase';

const Login = () => {
  const router = useRouter();

  const onClick = () => {
    signInWithPopup(auth, provider)
  }

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      console.log('user', user)
      if(user) {
        router.push('/');
      }
    })
  }, []);

  return (
    <LoginWrapper>
        <LoginImg src = "https://i.ibb.co/n6LWQM4/Post.png"/>
        <LoginHeading>
            Login to access your account
        </LoginHeading>
        <LoginBodyImage src = "https://i.ibb.co/CsV9RYZ/login-image.png"/>
        <LoginButton onClick = {onClick}>
            Sign in with Google
        </LoginButton>
    </LoginWrapper>
  )
}

const LoginWrapper = tw.div`
p-3 h-screen w-screen flex flex-col gap-y-5
`;

const LoginImg = tw.img`
h-7 w-20 object-contain
`;

const LoginHeading = tw.div`
text-4xl text-gray-500
`;

const LoginBodyImage = tw.img`
object-contain
`;

const LoginButton = tw.button`
bg-black text-white text-sm w-full p-3 flex items-center justify-center
`;

export default Login