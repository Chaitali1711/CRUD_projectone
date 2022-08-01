import React, { Component } from "react";
export default class AddProducts extends Component{
    constructor(){
        super();
        this.state={
            name:'',price:'',quantity:''}
    }

    render(){
        return(
        <div className="d-flex flex-column align-items-center m-5">
            <div className="row my-2">
                <div className="col-6"><label htmlFor='pname'>Product Name</label></div>
                <div className="col-6"><input type="text" value={this.state.name}
                onChange={(e)=>{this.setState({name:e.target.value})}}/></div>
            </div>
            <div className="row my-2">
                <div className="col-6"><label htmlFor='pprice'>Product Price</label></div>
                <div className="col-6"><input type="text" value={this.state.price}
                onChange={(e)=>{this.setState({price:e.target.value})}}/></div>
            </div>
            <div className="row my-2">
                <div className="col-6"><label htmlFor='pquantity'>Product Quantity</label></div>
                <div className="col-6"><input type="text" value={this.state.quantity}
                onChange={(e)=>{this.setState({quantity:e.target.value})}}/></div>
            </div>
            <div className="row my-2">
                <input type="button" value="Add to Products" onClick={(e)=>this.fnAdd(e)}/>
            </div>
        </div>
        )
    }
    fnAdd = async (event) => {
        event.preventDefault(); //prevent page refresh
    
        var products = {
          name: this.state.name,
          price: this.state.price,
          quantity: this.state.quantity,
        };
    
        // post request
        var response = await fetch("http://localhost:3004/products", {
          method: "POST",
          body: JSON.stringify(products),
          headers: {
            "Content-type": "application/json",
          },
        });
    
        var body = await response.json();
        console.log(body);
    
        //after receiving response body, redirect to /customers
        // if (body) {
        //   this.props.history.replace("/customers");
        // }
      };
}