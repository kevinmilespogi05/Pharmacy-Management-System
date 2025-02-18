import React from "react";
import { ResponsiveTableContainer, ResponsiveTable } from './tableStyle';

export default class customercount extends React.Component {

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
 
  const response = await fetch("http://localhost:1300/searchcustomer/customercount")

  if(response.ok)
  {
    const users = await response.json()
      console.log(users[0])
      this.setState({users, isLoading:false})
    }
    else
    {
      this.setState({isError:true, isLoading:false})
    }
  }

  renderTableRows = () => {
    return this.state.users[0].map((user, index) => {
      return (
        <tr key={index}>
          <td>{user.pincode}</td>
          <td>{user.Frequency}</td>
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
      );
    }

    if (isError) {
      return (
        <ResponsiveTableContainer>
          <div>Error loading data</div>
        </ResponsiveTableContainer>
      );
    }

    return users.length > 0
      ? (
        <ResponsiveTableContainer>
          <ResponsiveTable>
            <caption>
              <h1><b>Area-wise Customer Frequency</b></h1>
              <div>Total areas: {users[0].length}</div>
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
          <div>No data available</div>
        </ResponsiveTableContainer>
      )
  }
}
          
