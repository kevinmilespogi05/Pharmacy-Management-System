import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ResponsiveTableContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  width: 100%;
  overflow-x: auto;

  @media screen and (max-width: 768px) {
    padding: 10px;
  }
`

export const ResponsiveTable = styled.table`
  border: 3px solid black;
  border-collapse: collapse;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

  caption {
    border: 3px solid black;
    padding: 20px 16px;
    background-color: white;
    margin-bottom: 10px;

    h1 {
      font-size: 24px;
      margin: 0;

      @media screen and (max-width: 768px) {
        font-size: 18px;
      }
    }
  }

  thead {
    background-color: #FF416C;
    color: white;

    th {
      padding: 15px 10px;
      border: 1px solid black;
      white-space: nowrap;

      @media screen and (max-width: 768px) {
        padding: 10px 8px;
        font-size: 14px;
      }
    }
  }

  tbody {
    background-color: #ffdde1;
    
    td {
      border: 1px solid black;
      padding: 12px 10px;
      text-align: center;

      @media screen and (max-width: 768px) {
        padding: 8px 6px;
        font-size: 14px;
      }
    }

    tr:nth-child(even) {
      background-color: #ffe8ea;
    }
  }
`

export const TD = styled.td`
  border: 1px solid black;
  font-family: arial, sans-serif;
  padding: 20px 50px;
  font-size: 15px;

  @media screen and (max-width: 768px) {
    padding: 10px 15px;
    font-size: 14px;
  }
`

export const TR = styled.tr`
  border: 1px solid black;
`

export const BUTTON = styled(Link)`
  font-family: 'Encode Sans Expanded', sans-serif;
  border-radius: 5px;
  background: green;
  padding: 16px 50px;
  white-space: nowrap;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  z-index: 1;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    padding: 12px 30px;
    font-size: 16px;
  }
`