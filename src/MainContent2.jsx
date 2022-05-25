import React, { Component } from "react";

export default class MainContent extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      {
        id: 1,
        name: "Ram",
        phone: "123456789",
        address: { city: "New Delhi" },
        image: "https://www.picsum.photos/id/1001/200",
      },
      {
        id: 2,
        name: "Shyam",
        phone: null,
        address: { city: "Suart" },
        image: "https://www.picsum.photos/id/1001/200",
      },
      {
        id: 3,
        name: "AAnant",
        phone: "6598659865",
        address: { city: "Mumbai" },
        image: "https://www.picsum.photos/id/1003/200",
      },
      {
        id: 4,
        name: "Kevin",
        phone: "9854875498",
        address: { city: "Banglore" },
        image: "www.picsum.photos/id/1001/200",
      },
      {
        id: 5,
        name: "Rahul",
        phone: "9855325421",
        address: { city: "Pune" },
        image: "www.picsum.photos/id/1001/200",
      },
    ],
  };

  render() {
    return (
      <div>
        <h3 className="border-bottom">
          {this.state.pageTitle}
          <span>{this.state.customerCount}</span>
          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h3>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {this.state.customers.map((cust) => {
              return (
                <tr key={cust.id}>
                  <td>
                    <img src={cust.image} />
                  </td>
                  <td> {cust.id}</td>
                  <td className={this.myStyle(cust.name)}>{cust.name}</td>
                  <td>{this.getPhoneContact(cust)}</td>
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
  getPhoneContact(cust) {
    if (cust.phone) return cust.phone;
    else {
      return <div className="bg-warning p-2 text-center">No Phone</div>;
    }
    // cust.phone ? cust.phone :  return <div className="bg-warning p-2 text-center">No Phone</div>
  }

  myStyle = (custName) => {
    console.log(custName);
    if (custName.startsWith("R")) return "bg-warning p-2 text-center";
  };
}
