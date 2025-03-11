import styled from 'styled-components';
// #038ea1

export const Headline = styled.div`
  background-image: linear-gradient(to right,#00bf8f,#001510 );
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 120px;
  position: relative;
  margin-bottom: 25px;
  z-index: 1;
  :before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
  }
  text-align: center;
`

export const HeadH1 = styled.h1`
  background: #fff;
  font-size: 50px;
  padding: 15px;
  font-family: Montserrat, sans-serif;
  border: 1px solid #fff;
  border-radius: 0.2rem;
  margin: 0 15px;

  @media screen and (max-width: 768px) {
    font-size: 30px;
    padding: 10px;
  }

  @media screen and (max-width: 480px) {
    font-size: 24px;
    padding: 8px;
  }
`

export const HeadH2 = styled.h2`
  font-size: 30px;
  font-family: Montserrat, sans-serif;
  border: 1px solid black;
  padding: 15px;
  text-align: center;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
    padding: 10px;
  }

  @media screen and (max-width: 480px) {
    font-size: 20px;
    padding: 8px;
  }
`