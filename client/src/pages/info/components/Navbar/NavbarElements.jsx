import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
  background: ${({scrollNav}) => (scrollNav ? 'rgba(255, 255, 255, 0.95)' : 'transparent')};
  backdrop-filter: blur(10px);
  height: 70px;
  margin-top: -70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 5;
  box-shadow: ${({scrollNav}) => (scrollNav ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none')};

  @media screen and (max-width: 960px) {
    transition: 0.3s all ease;
  }
`
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`
export const NavLogo = styled(LinkR)`
  color: ${({ scrollNav }) => (scrollNav ? '#333' : '#fff')};
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: 500;
  text-decoration: none;
  margin-right: 20px;
  letter-spacing: 1px;
`
export const MobileIcon = styled.div`
  display: none;
  
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`
export const NavMenu = styled.ul`
  display:flex;
  justify-content: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const NavItem = styled.li`
  height: 62px;
`
export const NavLinks = styled(LinkS)`
  color: ${({ scrollNav }) => (scrollNav ? '#333' : '#fff')};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-weight: 400;
  letter-spacing: 0.5px;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${({ scrollNav }) => (scrollNav ? '#666' : 'rgba(255, 255, 255, 0.8)')};
  }

  &.active {
    border-bottom: 2px solid ${({ scrollNav }) => (scrollNav ? '#333' : '#fff')};
  }
`

export const NavLinksR = styled(LinkR)`
  color: ${({ scrollNav }) => (scrollNav ? '#333' : '#fff')};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-weight: 400;
  letter-spacing: 0.5px;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${({ scrollNav }) => (scrollNav ? '#666' : 'rgba(255, 255, 255, 0.8)')};
  }
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const NavBtnLink = styled(LinkR)`
  border-radius: 4px;
  background: transparent;
  border: 1px solid ${({ scrollNav }) => (scrollNav ? '#333' : '#fff')};
  padding: 8px 20px;
  color: ${({ scrollNav }) => (scrollNav ? '#333' : '#fff')};
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 0.5px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${({ scrollNav }) => (scrollNav ? '#333' : '#fff')};
    color: ${({ scrollNav }) => (scrollNav ? '#fff' : '#333')};
  }
`
