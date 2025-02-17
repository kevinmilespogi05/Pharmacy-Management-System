import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  overflow-x: auto;
  
  @media screen and (max-width: 768px) {
    padding: 0.5rem;
  }
`

export const Table = styled.table`
  border: 3px solid black;
  padding: 20px 16px;
  width: 100%;
  max-width: 1200px;
  
  @media screen and (max-width: 768px) {
    padding: 10px 8px;
  }
`

export const TD = styled.td`
  border: 1px solid black;
  font-family: arial, sans-serif;
  padding: 12px 16px;
  font-size: 15px;
  
  @media screen and (max-width: 768px) {
    padding: 8px;
    font-size: 14px;
  }
`

export const TR = styled.tr`
  border: 1px solid black;
  
  &:nth-child(even) {
    background-color: #f8f8f8;
  }
`

export const BUTTON = styled(Link)`
  font-family: 'Encode Sans Expanded', sans-serif;
  border-radius: 5px;
  background: green;
  padding: 12px 24px;
  white-space: nowrap;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    background: darkgreen;
    transform: translateY(-2px);
  }
  
  @media screen and (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`

export const TableCaption = styled.caption`
  border: 3px solid black;
  padding: 20px 16px;
  font-size: 1.5rem;
  font-weight: bold;
  
  @media screen and (max-width: 768px) {
    padding: 12px;
    font-size: 1.2rem;
  }
`

export const TableHeader = styled.thead`
  background-color: #FF416C;
  border: 1px solid black;
  color: white;
  
  th {
    padding: 12px;
    
    @media screen and (max-width: 768px) {
      padding: 8px;
      font-size: 14px;
    }
  }
`

export const TableBody = styled.tbody`
  background-color: #ffdde1;
  border: 1px solid blue;
  text-align: center;
  
  td {
    padding: 12px;
    
    @media screen and (max-width: 768px) {
      padding: 8px;
      font-size: 14px;
    }
  }
`