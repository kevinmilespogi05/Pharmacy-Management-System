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
          </FooterLinkWrapper>
        </FooterLinkContainer>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
