import React, { Component } from "react";
export default class Retrive extends Component{
    constructor(){
        super();
        this.state={
            pname:'',
            price:'',
            quantity:'',
            id:''
        }
    }
fnSubmit=async(e)=>{
    let data=await fetch(`http://localhost:3004/products?id=${this.state.id}`, {method:"GET"},)

    // console.log(data);
    let data2=await data.json();
    console.log(data2);
    console.log(data2[0].id);
    console.log(data2[0].price);
    console.log(data2[0].productName);
    // console.log(this.state.id)
    
    this.setState({
        pname:data2[0].productName,
        price:data2[0].price,
        quantity:data2[0].quantity
    })
        // console.log(this.state.pname)
        // console.log(this.state.price)
        

    }
  
    render(){
        return(
            <div className='row align-items-center flex-column m-5'>
                <form className='form '>
                    <div className="row">
                        <div className='mb-3 col-3'>
                            <label htmlFor="pid">Product Id</label>
                        </div>
                        <div className='mb-3 col-6'>
                            <input type="text" id='pid' className='form-control' value={this.state.id} onChange={(e)=>{this.setState({id:e.target.value})}} placeholder="Enter product id" />
                        </div>
                        <div className='mb-3 col-3'>
                            <input type="button" value="Submit" onClick={(e)=>this.fnSubmit(e)} />
                        </div> 
                    </div>
                    <div className="row">
                        <div className='mb-3 col-6'>
                            <label htmlFor="pname">Product Name</label>
                        </div>
                        <div className='mb-3 col-6'>
                            <input type="text" id='pname' className='form-control' value={this.state.pname} onChange={(e)=>{this.setState({id:e.target.value})}} />
                        </div>
                    </div>
                    <div className='mb-3 row'>
                        <div className='mb-3 col-6'>
                            <label htmlFor="pprice" >Product Price</label>
                        </div>
                        <div className='mb-3 col-6'>
                            <input type="text" id="pprice" className='form-control' value={this.state.price} onChange={(e)=>{this.setState({price:e.target.value})}}/>
                        </div>
                    </div>
                    <div className='mb-3 row'>
                        <div className='mb-3 col-6'>
                            <label htmlFor="pprice" >Product Quantity</label>
                        </div>
                        <div className='mb-3 col-6'>
                            <input type="text" id="pprice" className='form-control' value={this.state.quantity} onChange={(e)=>{this.setState({quantity:e.target.value})}}/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}