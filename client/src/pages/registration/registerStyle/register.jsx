import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  padding: 20px;
  margin-top: 50px;

  @media screen and (max-width: 968px) {
    flex-direction: column;
    align-items: center;
  }
`

export const FormWrap = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 20px;

  @media screen and (max-width: 968px) {
    margin-top: 40px;
  }

  @media screen and (max-width: 480px) {
    margin: 40px 10px;
  }
`

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Form = styled.form`
  background-color: #f2f2f2;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 30px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 480px) {
    padding: 20px;
  }
`

export const FormH1 = styled.h1`
  font-family: 'Encode Sans Expanded', sans-serif;
  margin-top:20px;
  margin-bottom:30px;
  color: black;
  font-size: 23px;
  font-weight: 400;
  text-align: center;
`

export const FormLabel = styled.label`
  font-family: 'Encode Sans Expanded', sans-serif;
  margin-bottom: 8px;
  font-size: 14px;
  color: black;
`

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border-radius: 4px;
`

export const Text = styled.span`
text-align: center;
color: black;
font-size: 14px;
`

export const ImgWrap = styled.div`
  max-width: 600px;
  width: 100%;
  padding: 20px;
  background-color: #e8f5e9;  /* Light green color */
  border-radius: 8px;

  @media screen and (max-width: 968px) {
    max-width: 500px;
    order: -1;
  }
`
export const Img = styled.img`
  width: 100%;
  margin-top: 50px;
  height: auto;
`

export const Video = styled.video`
  width: 100%;
  height: auto;
`

export const FormButton = styled.button`
  font-family: 'Encode Sans Expanded', sans-serif;
  border-radius: 4px;
  background: #038ea1;
  padding: 16px 0;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  border: none;
  width: 100%;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #02707f;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
    padding: 12px 0;
  }
`

export const Divider = styled.div`
margin-top: 50px;
display: flex;
justify-content:row;
`
