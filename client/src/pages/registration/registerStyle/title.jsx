import styled from 'styled-components';
// #038ea1

export const Headline = styled.div`
  background-color: #2980B9;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  min-height: 120px;
  position: relative;
  z-index: 1;
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