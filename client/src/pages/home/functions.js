import React from 'react'
import Icon1 from './../info/images/svg-1.svg'
import Icon2 from './../info/images/svg-2.svg'
import Icon3 from './../info/images/svg-3.svg'
import Icon5 from './../info/images/svg-5.svg'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './customerStyle'
import {Link as LinkR} from 'react-router-dom'

const Functions = () => {
  const features = [
    {
      icon: Icon1,
      title: "CUSTOMER DETAILS",
      description: "Create, delete, update and generate reports.",
      path: "/customer"
    },
    {
      icon: Icon2,
      title: "TRANSACTION RECORDS",
      description: "Create, delete, update and generate reports.",
      path: "/bills"
    },
    {
      icon: Icon3,
      title: "MEDICINE RECORDS",
      description: "Create, delete, update and generate reports.",
      path: "/medicine"
    },
    {
      icon: Icon5,
      title: "USER PROFILE",
      description: "View and update your profile information.",
      path: "/profile"
    }
  ];

  return (
    <ServicesContainer id='services'>
      <ServicesH1>Features</ServicesH1>
      <ServicesWrapper>
        {features.map((feature, index) => (
          <LinkR 
            key={index} 
            to={feature.path} 
            style={{ 
              textDecoration: 'none', 
              color: 'black',
              width: '100%'
            }}
          >
            <ServicesCard>
              <ServicesIcon src={feature.icon} alt={feature.title} />
              <ServicesH2>{feature.title}</ServicesH2>
              <ServicesP>{feature.description}</ServicesP>
            </ServicesCard>
          </LinkR>
        ))}
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export const redirectHome = (e) => {
    e.preventDefault();
    window.location.href='/home';
}

export const redirectMed = (e) => {
    e.preventDefault();
    window.location.href='/medicine';
}

export const redirectCust = (e) => {
    e.preventDefault();
    window.location.href='/customer';
}

export const redirectBill = (e) => {
    e.preventDefault();
    window.location.href='/bills';
}

export const redirectProfile = (e) => {
    e.preventDefault();
    window.location.href='/profile';
}

export const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('userId'); // Clear user data on logout
    window.location.href='/';
}

export default Functions;
