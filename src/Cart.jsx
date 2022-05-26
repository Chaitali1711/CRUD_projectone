import React, { Component } from "react"
import Order from "./Order";

export default class Cart extends Component {

    state = {
        customer: [
        {
            id:1,
            name:"Mobile",
            Price:"Rs.30000",
            Quantity:0
        },
        {
            id:2,
            name:"Laptop",
            Price:"Rs. 70000",
            Quantity:0
        },
        {
            id:3,
            name:"TV",
            Price:"Rs. 110000",
            Quantity:0
        },
        {
            id:4,
            name:"Washing M/C",
            Price:"Rs. 110000",
            Quantity:0
        },
        {
            id:5,
            name:"AC",
            Price:"Rs. 110000",
            Quantity:0
        },],
    };
    
    render() {
        return(
            <div className="row">
                {this.state.customer.map((cust,index) => {
              return (
                    //   <div className="col-4"><Order id={cust.id} name={cust.name}  price={cust.Price}/></div>
                      <div className="col-4" key={cust.id}><Order  customer={cust} index={index}/></div>

              );
            })}
            </div>
        );        
    }
}