import React from 'react'
import Icon1 from './../info/images/svg-1.svg'
import Icon2 from './../info/images/svg-2.svg'
import Icon3 from './../info/images/svg-3.svg'
import Icon4 from './../info/images/svg-4.svg'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './customerStyle'
import {Link as LinkR} from 'react-router-dom'

const Functions = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Features</ServicesH1>
      <ServicesWrapper>
        <LinkR to='/customer' style={{ textDecoration: 'none', color: 'black' }}>
          <ServicesCard>
            <ServicesIcon src={Icon1}/>
            <ServicesH2>CUSTOMER DETAILS</ServicesH2>
            <ServicesP>Create, delete, update and generate reports.</ServicesP>
          </ServicesCard>
        </LinkR>
        <LinkR to='/bills' style={{ textDecoration: 'none', color: 'black' }}>
          <ServicesCard>
            <ServicesIcon src={Icon2}/>
            <ServicesH2>TRANSACTION RECORDS</ServicesH2>
            <ServicesP>Create, delete, update and generate reports.</ServicesP>
          </ServicesCard>
        </LinkR>
        <LinkR to='/medicine' style={{ textDecoration: 'none', color: 'black' }}>
          <ServicesCard>
            <ServicesIcon src={Icon3}/>
            <ServicesH2>MEDICINE RECORDS</ServicesH2>
            <ServicesP>Create, delete, update and generate reports.</ServicesP>
          </ServicesCard>
        </LinkR>
        <LinkR to='/profile' style={{ textDecoration: 'none', color: 'black' }}>
          <ServicesCard>
            <ServicesIcon src={Icon4}/>
            <ServicesH2>USER PROFILE</ServicesH2>
            <ServicesP>View and update your profile information.</ServicesP>
          </ServicesCard>
        </LinkR>
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
