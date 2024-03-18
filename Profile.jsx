import React, { useState } from "react";
import styled from "styled-components";
import { firebaseAuth } from "../utils/firebase-config";
import { signOut } from "firebase/auth";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

import {BsArrowLeft, BsEnvelopeExclamationFill} from 'react-icons/bs'

export default function Profile() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const userEmail = firebaseAuth.currentUser ? firebaseAuth.currentUser.email : '';
  const navigate = useNavigate()

  const handleSubscribe = () => {
    // Logic to handle subscription activation
    setIsSubscribed(true);
    // Add any further logic here, e.g., API call to activate subscription
  };

  return (
    <Container>
        <div className="logo">
        <img src={logo} alt="logo" />
      </div>
            <div className='backArrow'>
                <BsArrowLeft onClick={()=>navigate(-1)}/>
            </div>
        <Avatar src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Netflix Avatar" />
        <div className="user">
            <Email>{userEmail}</Email>
        </div>
        <Plan>Premium Plan - $15.99/month</Plan>
        <SubscribeButton disabled={isSubscribed} onClick={handleSubscribe}>
            {isSubscribed ? "Subscribed" : "Subscribe Now"}
        </SubscribeButton>
        <Plan>Medium Plan - $11.99/month</Plan>
        <SubscribeButton disabled={isSubscribed} onClick={handleSubscribe}>
            {isSubscribed ? "Subscribed" : "Subscribe Now"}
        </SubscribeButton>
        <Plan>Basic Plan - $5.99/month</Plan>
        <SubscribeButton disabled={isSubscribed} onClick={handleSubscribe}>
            {isSubscribed ? "Subscribed" : "Subscribe Now"}
        </SubscribeButton>
        <LogoutButton onClick={() => signOut(firebaseAuth)}>Logout</LogoutButton>
    </Container>
  );
}

const Container = styled.div`
  .logo {
    img {
      height: 2.5rem;
      position: relative;
      top: 0rem;
      margin-left:-35rem;
    }
  }
  .user{
    display:flex;
    justify-content: space-between;
    svg{
        height: 2rem;
    }
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
     .backArrow{
         position: absolute;
         padding: 2rem;
         margin-left: -80rem;
         margin-top: -2.5rem;
         z-index: 1;
         svg{
          font-size: 3rem;
          cursor: pointer;
          color: white;
         }
      }
`;

const Avatar = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 1rem;
`;

const Email = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Plan = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;


const SubscribeButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  background-color: #e50914;
  color: #fff;
  font-weight: 200;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }
  &:hover {
    background-color: #ff0a16;
  }
`;

const LogoutButton = styled.button`
  margin-top: 2rem;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: #555;
  }
`;
