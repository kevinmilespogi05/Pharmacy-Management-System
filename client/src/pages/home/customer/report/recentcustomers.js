import React from "react";
import { ResponsiveTableContainer, ResponsiveTable } from './tableStyle';

export default class recentcustomers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: false,
      isError: false
    };
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      const response = await fetch("http://localhost:1300/searchcustomer/recentcustomerslist");
      if (response.ok) {
        const users = await response.json();
        this.setState({ users, isLoading: false });
      } else {
        throw new Error('Failed to fetch');
      }
    } catch (error) {
      this.setState({ isError: true, isLoading: false });
    }
  }

  renderTableRows = () => {
    return this.state.users[0].map(user => {
      return (
        <tr key={user.username}>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.Date_of_joining}</td>
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
    const { users, isLoading, isError } = this.state;

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

    return users.length > 0 ? (
      <ResponsiveTableContainer>
        <ResponsiveTable>
          <caption>
            <h1><b>RECENTLY JOINED CUSTOMERS</b></h1>
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
        <div>No recent customers found</div>
      </ResponsiveTableContainer>
    );
  }
}
