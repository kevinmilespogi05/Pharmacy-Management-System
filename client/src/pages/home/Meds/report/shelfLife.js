import React from "react";
import { TableContainer, Table, TD, TR } from "./tableStyle";

export default class GetshelfLife extends React.Component {

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
 
  const response = await fetch("http://localhost:1300/medicines/stock/shelfLife")

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
      if(user.shelf_life_month<0 || user.shelf_life_year<0) {
        return (
          <TR key={user.id}>
            <TD>{user.sr_no}</TD>
            <TD>{user.med_name}</TD>
            <TD style = {{color:"red"}}><b>EXPIRED!</b></TD>
          </TR>
        )
      }
      return (
        <TR key={user.id}>
          <TD>{user.sr_no}</TD>
          <TD>{user.med_name}</TD>
          <TD>{user.shelf_life_year} year and {user.shelf_life_month} months</TD>
        </TR>
      )
    })
  }

  render() {
    const { users, isLoading, isError } = this.state

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error</div>

    return users.length > 0 ? (
      <TableContainer>
        <Table>
          <caption style={{
            border: "3px solid black",
            padding: "20px 16px",
            marginBottom: "1rem"
          }}>
            <h1><b>MEDICINES SORTED BY QUANTITY LEFT</b></h1>
            Total records : {users.length}
          </caption>
          <thead style={{
            backgroundColor: "#FF416C",
            color: "white"
          }}>
            <TR>
              <TD as="th">SR NO</TD>
              <TD as="th">MEDICINE NAME</TD>
              <TD as="th">SHELF LIFE</TD>
            </TR>
          </thead>
          <tbody style={{
            backgroundColor: "#ffdde1",
            textAlign: "center"
          }}>
            {this.renderTableRows()}
          </tbody>
        </Table>
      </TableContainer>
    ) : (
      <div>No users.</div>
    )
  }
}
          
