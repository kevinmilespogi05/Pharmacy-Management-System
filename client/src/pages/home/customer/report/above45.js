import React from "react";
import { ResponsiveTableContainer, ResponsiveTable } from './tableStyle';

export default class covidvaccine extends React.Component {
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
      const response = await fetch("http://localhost:1300/searchcustomer/covidList");
      if (response.ok) {
        const users = await response.json();
        console.log('Fetched users:', users); // Debug log
        this.setState({ users, isLoading: false });
      } else {
        throw new Error('Failed to fetch');
      }
    } catch (error) {
      console.error('Fetch error:', error); // Debug log
      this.setState({ isError: true, isLoading: false });
    }
  }

  renderTableRows = () => {
    if (!this.state.users[0] || !this.state.users[0].length) return null;
    
    return this.state.users[0].map((user, index) => {
      return (
        <tr key={index}>
          <td>{user.username || 'N/A'}</td>
          <td>{user.fname || 'N/A'}</td>
          <td>{user.lname || 'N/A'}</td>
          <td>{user.age || 'N/A'}</td>
          <td>{user.pincode || 'N/A'}</td>
          <td>{user.email || 'N/A'}</td>
        </tr>
      );
    });
  }

  renderTableHeader = () => {
    if (!this.state.users[0] || !this.state.users[0].length) return null;
    
    const headers = ['Username', 'First Name', 'Last Name', 'Age', 'Pincode', 'Email'];
    return headers.map(header => <th key={header}>{header}</th>);
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
            <h1><b>CUSTOMERS ELIGIBLE FOR COVID VACCINE</b></h1>
            <div>Total records: {users[0]?.length || 0}</div>
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
        <div>No eligible customers found</div>
      </ResponsiveTableContainer>
    );
  }
}
          
