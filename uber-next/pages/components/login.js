import React, { useState, useEffect } from 'react'
import tw from "tailwind-styled-components";

const Login = () => {
  return (
    <LoginWrapper>
        <LoginImg src = "https://i.ibb.co/n6LWQM4/Post.png"/>
        <LoginHeading>
            Login to access your account
        </LoginHeading>
        <LoginBodyImage src = "https://i.ibb.co/CsV9RYZ/login-image.png"/>
        <LoginButton>
            Sign in with Google
        </LoginButton>
    </LoginWrapper>
  )
}

const LoginWrapper = tw.div`
p-3 h-screen flex flex-col gap-y-5
`;

const LoginImg = tw.img`
h-7 w-20
`;

const LoginHeading = tw.div`
text-4xl text-gray-400
`;

const LoginBodyImage = tw.img``;

const LoginButton = tw.button`
bg-black text-white text-sm w-full p-3 flex items-center justify-center
`;

export default Login