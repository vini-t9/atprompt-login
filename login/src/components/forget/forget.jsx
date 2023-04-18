import React from "react";
import styled from "styled-components";
import Inputforget from "./Inputforget";
import Buttonforget from "./Buttonforget";
import {Link} from 'react-router-dom';

function forget()  {
  return (
    <React.StrictMode>
      <ForgetContainer>
        <ForgetText>Reset your password</ForgetText>
        <ForgetInputContainer>
        <Inputforget type="email" placeholder="Enter your work email" />
        </ForgetInputContainer>
        <ForgetButtonContainer>
        <Buttonforget content="Next" onClick={() => ""}/>
        </ForgetButtonContainer>
        <HorizontalLine2 />
        <ExistMember><Link to="..">Back to Login</Link></ExistMember>
      </ForgetContainer>
    </React.StrictMode>
  );
};
const ForgetContainer = styled.div`
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
    width: 90vw;
    height: 50vh;
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
    height: 60vh;
  }
`;
const ForgetText = styled.h2`
  margin: 3rem 0 2rem 0;
  align-items: center;
`;
const ForgetInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
`;
const ForgetButtonContainer = styled.div`
  margin: 1rem 0 1rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const HorizontalLine2 = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #b414d4 21%, #03217b 79%);
  background-color: rgb(238, 218, 218);
  margin: 1rem 0 1rem 0;
  backdrop-filter: blur(25px);
`;
const ExistMember = styled.h5`
  margin: 1rem 0 2rem 0;
`;
export default forget;