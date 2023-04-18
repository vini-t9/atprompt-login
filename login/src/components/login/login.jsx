import React from "react";
import styled from 'styled-components';
import Inputlogin from "./Inputlogin";
import Buttonlogin from './Buttonlogin';  
import {Link} from 'react-router-dom';



function login() {
  return (
    <React.StrictMode>
      <MainContainer>
        <WelcomeText>Welcome,</WelcomeText>
        <WelcomeText2>Sign in to continue!</WelcomeText2>
        <InputContainer>
          <Inputlogin type="text" placeholder="Username" />
          <Inputlogin type="password" placeholder="Password" />
        </InputContainer>

        <ButtonContainer>
          <Buttonlogin content="Sign In" />
        </ButtonContainer>
        <HorizontalRule />
        <NewUser><Link to="./../register" ClassName="activeLink">Not register?</Link></NewUser>
        <ForgetPassword><Link to="./../forget">Forget Password</Link></ForgetPassword>
      </MainContainer>
    </React.StrictMode>
  );
}

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31,38,135,0.37);
  backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  letter-spacing:0.3rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 70vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 70vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 60vh;
  }
  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
`;

const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
  align-items: center;
`;
const WelcomeText2 = styled.h3`
  margin: 1rem 0 2rem 0;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
`;

const ButtonContainer = styled.div`
  margin: 1rem 0 1rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #b414d4 21%, #03217b 79%);
  background-color: rgb(238, 218, 218);
  margin: 1rem 0 1rem 0;
  backdrop-filter: blur(25px);
`;
const NewUser = styled.h4`
  //margin: 1rem 0 2rem 0;
`;
const ForgetPassword = styled.h5`
  margin: 1rem 0 2rem 0;
`;

export default login;
