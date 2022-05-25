import React, { Component } from "react";

export default class MainContent extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      {
        id: 1,
        name: "Ram",
        phone: null,
        address: { city: "New Delhi" },
      },
      {
        id: 2,
        name: "Shyam",
        phone: "6598659865",
        address: { city: "Surat" },
      },
      {
        id: 3,
        name: "AAnant",
        phone: "6598659865",
        address: { city: "Mumbai" },
      },
      {
        id: 4,
        name: "Kevin",
        phone: "9854875498",
        address: { city: "Banglore" },
      },
      {
        id: 5,
        name: "Rahul",
        phone: "9855325421",
        address: { city: "Pune" },
      },
    ],
  };

  render() {
    return (
      <div>
        <h3 className="border-bottom">
          {this.state.pageTitle}
          <span className="badge badge-secondary m-2">
            {this.state.customersCount}
          </span>
          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h3>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {this.state.customers.map((cust) => {
              return (
                <tr key={cust.id}>
                  <td>{cust.id}</td>
                  <td>{cust.name}</td>
                  <td>{
                  cust.phone ? cust.phone : 
                  (<div className="bg-warning">No Contact Info</div>)
                  
                  }</td>
                  <td>{cust.address.city}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
  onRefreshClick = () => {
    this.setState({
      customerCount: 7,
    });
  };
}
