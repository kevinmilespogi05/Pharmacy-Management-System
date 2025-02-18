import React from "react";
import styled from 'styled-components';

// Styled components for responsive design
const ResponsiveTable = styled.div`
  overflow-x: auto;
  margin: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  border: 3px solid black;
  
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const TableCaption = styled.caption`
  border: 3px solid black;
  padding: 20px 16px;
  background-color: white;
  
  h1 {
    font-size: 1.5rem;
    margin: 0;
    
    @media screen and (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
`;

const TableHeader = styled.thead`
  background-color: #FF416C;
  color: white;
  
  th {
    padding: 12px 8px;
    border: 1px solid black;
    white-space: nowrap;
    
    @media screen and (max-width: 768px) {
      padding: 8px 4px;
    }
  }
`;

const TableBody = styled.tbody`
  background-color: #ffdde1;
  
  tr {
    &:nth-child(even) {
      background-color: #ffe8ea;
    }
    
    &:hover {
      background-color: #ffccd1;
    }
  }
  
  td {
    padding: 12px 8px;
    border: 1px solid #ddd;
    text-align: center;
    
    @media screen and (max-width: 768px) {
      padding: 8px 4px;
    }
  }
`;

export default class Getmedtable extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        users:[],
        isLoading: false,
        isError: false
      }
    }
async componentDidMount() {
  this.setState({isLoading: true})
 
  const response = await fetch("http://localhost:1300/medicines/stock/expirySort")

  if(response.ok)
  {
    const users = await response.json()
      console.log(users)
      this.setState({users, isLoading:false})
    }
    else
    {
      this.setState({isError:true, isLoading:false})
    }
  }

  renderTableRows = () => {
    return this.state.users.map(user => {
      return (
        <tr key={user.id}>
          <td>{user.sr_no}</td>
          <td>{user.med_name}</td>
          <td>{user.qty_left}</td>
          <td>{user.med_cost}</td>
          <td>{user.exp_date}</td>
          <td>{user.med_mfg}</td>
          <td>{user.rac_loc}</td>
          <td>{user.mfg_date}</td>
        </tr>
      )
    })
  }
renderTableHeader = () => {
    return Object.keys(this.state.users[0]).map(attr => <th key={attr}>{attr.toUpperCase()}</th>)
  }

  
  render() {
    const { users, isLoading, isError } = this.state

    if (isLoading) {
      return <div>Loading...</div>
    }

    if (isError) {
      return <div>Error</div>
    }

    return users.length > 0
      ? (
        <ResponsiveTable>
          <Table>
            <TableCaption>
              <h1><b>Medicine Details</b></h1>
              Total records: {users.length}
            </TableCaption>
            <TableHeader>
              <tr>
                {this.renderTableHeader()}
              </tr>
            </TableHeader>
            <TableBody>
              {this.renderTableRows()}
            </TableBody>
          </Table>
        </ResponsiveTable>
      ) : (
        <div>
          No users.
      </div>
      )
  }
}
          
