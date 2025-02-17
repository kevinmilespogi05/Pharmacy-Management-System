import React from "react";
import {
  TableContainer,
  Table,
  TableCaption,
  TableHeader,
  TableBody,
  TR,
  TD
} from './tableStyle';

export default class AllTransactions extends React.Component {

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
 
  const response = await fetch("http://localhost:1300/transaction/lookup/all")

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
    return this.state.users[0].map(user => {
      return (
        <tr>
          <td>{user.billno}</td>
          <td>{user.totalcost}</td>
          <td>{user.billdate}</td>
          <td>{user.C_ID}</td>
        </tr>
      )
    })
  }
renderTableHeader = () => {
    return Object.keys(this.state.users[0][0]).map(attr => <th key={attr}>{attr.toUpperCase()}</th>)
  }

  
  render() {
    const { users, isLoading, isError } = this.state

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error</div>

    return users.length > 0 ? (
      <TableContainer>
        <Table>
          <TableCaption>
            <h1>TRANSACTION RECORDS</h1>
            Total records: {users[0].length}
          </TableCaption>
          <TableHeader>
            <TR>{this.renderTableHeader()}</TR>
          </TableHeader>
          <TableBody>
            {this.renderTableRows()}
          </TableBody>
        </Table>
      </TableContainer>
    ) : (
      <div>No transactions found.</div>
    )
  }
}
          
