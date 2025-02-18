import styled from 'styled-components';
import {Link} from 'react-router-dom'



export const Container = styled.div`
display: flex;
flex-wrap: wrap;
margin-top: 50px;
width: 100%;
padding: 0 15px;

@media screen and (max-width: 768px) {
  margin-top: 30px;
  padding: 0 10px;
}
`
export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
  padding: 20px;
  
  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
    padding: 10px;
  }
`
export const Columnadd = styled.div`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  
  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`
export const FrmWrap = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
`
export const FrmContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`
export const Frm = styled.form`
  background-color: black;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px 32px;
  border-radius: 8px;
`
export const FrmH1 = styled.h1`
  font-family: 'Encode Sans Expanded', sans-serif;
  margin-top:20px;
  margin-bottom:30px;
  color: white;
  font-size: 23px;
  font-weight: 400;
  text-align: center;
`
export const FrmLabel = styled.label`
  font-family: 'Encode Sans Expanded', sans-serif;
  margin-bottom: 8px;
  font-size: 14px;
  color: white;
`
export const FrmInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border-radius: 4px;
`
export const ExfrmInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border-radius: 4px;
  background-color:#FFFFBF
`
export const FrmButton = styled(Link)`
  font-family: 'Encode Sans Expanded', sans-serif;
  border-radius: 2px;
  background:#038ea1;
  white-space: nowrap;
  padding: padding: 16px 0px;
  color:#fff;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  height: 50px;
  width: 100%;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ?  '#fff' : 'green')};

  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
    height: 45px;
    padding: 12px 0px;
  }
`

export const Formadd = styled.form`
  background-color: navy;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 30px 32px;
  border-radius:2px;
  `
export const FormH1add = styled.h1`
  font-family: 'Encode Sans Expanded', sans-serif;
  margin-top:20px;
  margin-bottom:30px;
  color: white;
  font-size: 23px;
  font-weight: 400;
  text-align: center;
`
export const FormLabeladd = styled.label`
  font-family: 'Encode Sans Expanded', sans-serif;
  margin-bottom: 8px;
  font-size: 14px;
  color: white;
`
export const FormInputadd = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border-radius: 4px;
`
export const FormButtonadd = styled(Link)`
  font-family: 'Encode Sans Expanded', sans-serif;
  border-radius: 2px;
  background:#038ea1;
  white-space: nowrap;
  padding: padding: 16px 0px;
  color:#fff;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  height: 50px;
  width: 100%;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ?  '#fff' : 'green')};

  }
`
export const Position = styled.div`
  margin-top: 20px;
  
  @media screen and (max-width: 768px) {
    margin-top: 15px;
  }
`
export const FormWrap = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
`
export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`
export const Form = styled.form`
  background-color: white;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px 32px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`
export const FormH1 = styled.h1`
  font-size: 24px;
  color: #038ea1;
  margin-bottom: 20px;
  text-align: center;
  
  @media screen and (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 15px;
  }
`

export const FormH1del = styled.h1`
  font-family: 'Encode Sans Expanded', sans-serif;
  margin-top:140px;
  margin-bottom:30px;
  color: black;
  font-size: 23px;
  font-weight: 400;
  text-align: center;
`

export const FormH1delete = styled.h1`
  font-family: 'Encode Sans Expanded', sans-serif;
  margin-top:15px;
  margin-bottom:30px;
  color: black;
  font-size: 23px;
  font-weight: 400;
  text-align: center;
`
export const FormLabel = styled.label`
  font-size: 14px;
  margin-bottom: 5px;
  color: #333;
`
export const FormInput = styled.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
  
  @media screen and (max-width: 768px) {
    padding: 10px;
    font-size: 14px;
  }
`

export const FormButton = styled.button`
  background: #038ea1;
  padding: 12px;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #026d7a;
    transform: translateY(-2px);
  }
  
  @media screen and (max-width: 768px) {
    padding: 10px;
    font-size: 14px;
  }
`

export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: #fff;
  
  @media screen and (max-width: 768px) {
    padding: 10px;
  }
`

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #038ea1;
  margin-bottom: 40px;
  text-align: center;
  
  @media screen and (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 30px;
  }
  
  @media screen and (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 20px;
  }
`

export const ServicesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  
  @media screen and (max-width: 768px) {
    grid-gap: 15px;
    padding: 0 10px;
  }
`

export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
  
  @media screen and (max-width: 768px) {
    padding: 20px 15px;
  }
`

export const ServicesIcon = styled.img`
  height: 120px;
  width: 120px;
  margin-bottom: 20px;
  
  @media screen and (max-width: 768px) {
    height: 100px;
    width: 100px;
    margin-bottom: 15px;
  }
`

export const ServicesH2 = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 15px;
  text-align: center;
  color: #333;
  
  @media screen and (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 10px;
  }
`

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
  color: #666;
  line-height: 1.5;
  
  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }
`

export const TableContainer = styled.div`
  overflow-x: auto;
  width: 100%;
  margin: 20px 0;
  
  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;
  }
  
  th, td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #ddd;
    
    @media screen and (max-width: 768px) {
      padding: 8px;
      font-size: 14px;
    }
  }
  
  th {
    background-color: #038ea1;
    color: white;
  }
  
  tr:nth-child(even) {
    background-color: #f8f8f8;
  }
`

