import React, { Component } from "react";
import { Link } from "react-router-dom";
import Showcustomer from './Showcustomer'
class NewCustomer extends Component {
  constructor(props) {
    super(props);
    this.state ={
      customer: [{ name: "", city: "", phone: "", photo: ""} ]
    }
  }
    

  render() {
    return (
      <div className="row">
        <div className="col-lg-6 mx-auto">
          <form>
            <h4 className="p-2 border-bottom">New Customer</h4>
            {/* customer name starts */}
            <div className="form-group form-row">
              <label className="col-lg-4">Customer Name</label>
              <div className="col-lg-8">
                <input
                  type="text"
                  className="form-control"
                  value={this.state.name}
                  onChange={(event) => {
                    this.setState({ name: event.target.value });
                  }}
                ></input>
              </div>
            </div>

            <div className="form-group form-row">
              <label className="col-lg-4">City</label>
              <div className="col-lg-8">
                <input
                  type="text"
                  className="form-control"
                  value={this.state.city}
                  onChange={(event) => {
                    this.setState({ city: event.target.value });
                  }}
                ></input>
              </div>
            </div>

            <div className="form-group form-row">
              <label className="col-lg-4">Phone</label>
              <div className="col-lg-8">
                <input
                  type="text"
                  className="form-control"
                  value={this.state.phone}
                  onChange={(event) => {
                    this.setState({ phone: event.target.value });
                  }}
                ></input>
              </div>
            </div>

            <div className="form-group form-row">
              <label className="col-lg-4">Photo</label>
              <div className="col-lg-8">
                <input
                  type="text"
                  className="form-control"
                  value={this.state.photo}
                  onChange={(event) => {
                    this.setState({ photo: event.target.value });
                  }}
                ></input>
              </div>
            </div>

            <div className=" border-top p-2">
              <button className="btn btn-success" onClick={this.onSaveClick}>
                Save
              </button> 
              {/* <Link to='/Login'>Login</Link> */}
            </div>
          </form>
         
          <div id="showdata">
            <button className="btn btn-secondary" onClick={this.btnShowData}>Show All Data</button>
            {this.state.customer.map((d,i)=>{
      return (
            <div>
              <table className="border border-success w-50">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>City</th>
                    <th>Phone</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{d.name}</td>
                    <td></td>
                    <td></td>
                    <td>
                      <button className="btn btn-warning" onClick={this.onEdit}>Edit</button>
                      <button className="btn btn-warning" onClick={this.onDelete}>Delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            )
          })}
          </div>
          
        </div>
      </div>
    );
  }

  btnShowData=async (event)=>{
    event.preventDefault();
    let data=await fetch("http://localhost:3004/customer",{method:"GET"});
    let Customerdatat=await data.json();
    this.setState({...Customerdatat})
    console.log(Customerdatat)
  }
  onEdit=(e)=>{console.log("Entry Edited")}
  onDelete=(e)=>{console.log("Entry Deleted")}

  onSaveClick = async (event) => {
    event.preventDefault(); //prevent page refresh

    var custmomer = {
      name: this.state.name,
      address: { city: this.state.city },
      phone: this.state.phone,
      photo: this.state.photo,
    };

    // post request
    var response = await fetch("http://localhost:3004/customer", {
      method: "POST",
      body: JSON.stringify(custmomer),
      headers: {
        "Content-type": "application/json",
      },
    });

    var body = await response.json();
    console.log(body);
    // console.log(this)
            


    //after receiving response body, redirect to /customers
    // if (body) {
    //   this.props.history.replace("/customers");
    // }
  };
}

export default NewCustomer;
