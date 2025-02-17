import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
`

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`

export const TD = styled.td`
  border: 1px solid black;
  font-family: arial, sans-serif;
  padding: 12px 20px;
  font-size: 15px;

  @media screen and (max-width: 768px) {
    padding: 8px 12px;
    font-size: 13px;
  }
`

export const TR = styled.tr`
  border: 1px solid black;
  
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid #ddd;
    margin-bottom: 10px;
  }
`

export const BUTTON = styled(Link)`
  font-family: 'Encode Sans Expanded', sans-serif;
  border-radius: 5px;
  background: green;
  padding: 12px 30px;
  white-space: nowrap;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 768px) {
    padding: 10px 20px;
    font-size: 14px;
    width: 100%;
    text-align: center;
  }
`