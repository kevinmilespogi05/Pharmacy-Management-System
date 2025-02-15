import React from 'react'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavLinksR,
  NavItem,
  NavBtn,
  NavBtnLink,
} from './NavbarElements'
import { animateScroll as scroll } from 'react-scroll'

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = React.useState(false)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  React.useEffect(() => {
    window.addEventListener('scroll', changeNav)
    return () => {
      window.removeEventListener('scroll', changeNav)
    }
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <>
      <IconContext.Provider value={{ color: scrollNav ? '#333' : '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome} scrollNav={scrollNav}>
              DOSE
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  scrollNav={scrollNav}
                >
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="services"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  scrollNav={scrollNav}
                >
                  Services
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinksR to="/registration" scrollNav={scrollNav}>
                  Sign Up
                </NavLinksR>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/signin" scrollNav={scrollNav}>
                Sign In
              </NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
