import React from "react";
import { ResponsiveTableContainer, ResponsiveTable } from './tableStyle';

export default class GetFulltable extends React.Component {

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
 
  const response = await fetch("http://localhost:1300/searchcustomer/customerList")

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
        <tr key={user.id}>
          <td>{user.fname}</td>
          <td>{user.lname}</td>
          <td>{user.age}</td>
          <td>{user.pincode}</td>
          <td>{user.email}</td>
          <td>{user.username}</td>
          <td>{user.password}</td>
        </tr>
      )
    })
  }

  renderTableHeader = () => {
    return Object.keys(this.state.users[0][0]).map(attr => 
      <th key={attr}>{attr.toUpperCase()}</th>
    )
  }

  render() {
    const { users, isLoading, isError } = this.state

    if (isLoading) {
      return (
        <ResponsiveTableContainer>
          <div>Loading...</div>
        </ResponsiveTableContainer>
      )
    }

    if (isError) {
      return (
        <ResponsiveTableContainer>
          <div>Error loading data</div>
        </ResponsiveTableContainer>
      )
    }

    return users.length > 0 ? (
      <ResponsiveTableContainer>
        <ResponsiveTable>
          <caption>
            <h1><b>CUSTOMER DETAILS</b></h1>
            <div>Total records: {users[0].length}</div>
          </caption>
          <thead>
            <tr>
              {this.renderTableHeader()}
            </tr>
          </thead>
          <tbody>
            {this.renderTableRows()}
          </tbody>
        </ResponsiveTable>
      </ResponsiveTableContainer>
    ) : (
      <ResponsiveTableContainer>
        <div>No users found</div>
      </ResponsiveTableContainer>
    )
  }
}
          
