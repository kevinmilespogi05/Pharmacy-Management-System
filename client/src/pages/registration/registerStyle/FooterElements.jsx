import styled from 'styled-components'

export const Footer = styled.footer`
  background-color: #101522;
  min-height: 240px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;

  @media screen and (max-width: 968px) {
    padding: 30px 10px;
  }
`

export const Image = styled.img`
  max-width: 220px;
  width: 100%;
  height: auto;
  margin: 10px;

  @media screen and (max-width: 768px) {
    max-width: 180px;
  }

  @media screen and (max-width: 480px) {
    max-width: 150px;
  }
`

export const Location = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 250px;

  @media screen and (max-width: 768px) {
    margin: 10px;
    min-width: 200px;
  }
`

export const Contact = styled.h3`
  color:#fff;
  margin: 4px;
  font-family:monospace;
`

export const Heading = styled.h1`
  color:#fff;
  padding: 5px;
  border: 1px solid white;
  margin-bottom:10px;
  text-align:center;
  font-family:Helvetica;
`