import React from "react";

export default class Transtoday extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        users:[],
        isLoading: false,
        isError: false
      }
    }
    async componentDidMount() {
      this.setState({ isLoading: true });
      const response = await fetch("http://localhost:1300/transaction/today");
      if (response.ok) {
        const result = await response.json();
        const users = result[0]; // Access the first element of the response
        console.log(users); // Log the data to verify
        this.setState({ users, isLoading: false });
      } else {
        this.setState({ isError: true, isLoading: false });
      }
    }

    renderTableRows = () => {
      return this.state.users.map((user, index) => (
        <tr key={index}>
          <td>{user.billno}</td>
          <td>{user.billdate}</td>
          <td>{user.totalcost}</td>
          <td>{user.C_ID}</td>
        </tr>
      ));
    };

  renderTableHeader = () => {
    if (this.state.users.length === 0) {
      return null; // Return nothing if there's no data
    }
    const firstUser = this.state.users[0]; // Get the first user to extract keys
    return Object.keys(firstUser).map((attr) => (
      <th key={attr}>{attr.toUpperCase()}</th>
    ));
  };

  
  render() {
  const { users, isLoading, isError } = this.state;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  if (users.length === 0) {
    return <div>No users.</div>;
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <table style={{ border: "3px solid black", padding: "20px 16px" }}>
        <caption style={{ border: "3px solid black", padding: "20px 16px" }}>
          <h1>
            <b>CUSTOMERS ELIGIBLE FOR COVID VACCINE</b>
          </h1>
          Total records: {users.length}
        </caption>
        <thead style={{ backgroundColor: "#FF416C", border: "1px solid black", color: "white" }}>
          <tr style={{ border: "1px solid black", padding: "10px 8px" }}>
            {this.renderTableHeader()}
          </tr>
        </thead>
        <tbody style={{ backgroundColor: "#ffdde1", border: "1px solid blue", textAlign: "center", padding: "10px 8px" }}>
          {this.renderTableRows()}
        </tbody>
      </table>
    </div>
  );
}
}
          
