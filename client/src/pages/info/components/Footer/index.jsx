import React from 'react'
import { FooterContainer, FooterWrap, FooterLinkWrapper, FooterLinkItems, FooterLinkContainer, FooterLinkTitle, FooterLink, SocialMediaWrap, WebsiteRights } from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinkContainer>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Creators</FooterLinkTitle>
                <FooterLink to= {{ pathname:'https://www.facebook.com/kevin.miles.julhusin'}} target="_blank">Kevin Miles Julhusin</FooterLink>
                <FooterLink to= {{ pathname:'https://www.facebook.com/gardogqt'}} target="_blank">Edgar Calixtro</FooterLink>
                <FooterLink to= {{ pathname:'https://www.facebook.com/iniackiefranz.sarmac'}} target="_blank">Iniackie Franz Sumandal</FooterLink>
                <FooterLink to= {{ pathname:'https://www.facebook.com/kramyer.griego'}} target="_blank">Rey-mark Bustillos </FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
                <FooterLink to= {{ pathname:'https://discord.com/'}} target="_blank">Contact</FooterLink>
                <FooterLink to= {{ pathname:'https://discord.com/'}} target="_blank">Support</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>

          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Covid-19 data</FooterLinkTitle>
                <FooterLink to= {{ pathname:'https://timesofindia.indiatimes.com/india/coronavirus-lockdown-in-india-covid-19-vaccine-cases-live-updates-12-april-2021/liveblog/82023278.cms'}} target="_blank">In India</FooterLink>
                <FooterLink to= {{ pathname:'https://www.who.int/'}} target="_blank">In world</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>
        </FooterLinkContainer>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
