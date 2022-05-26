import React, { Component } from "react";

export default class Order extends Component{
state={
    products:this.props.customer
}
    render() {
        return (
            <div>
                <div className="card " style={{ width: '18rem' }}>
                    <div className="card-body ">
                        {/* <h5 className="card-title text-center">{this.props.id} : {this.props.name}</h5>
                        <p className="card-text ">The product costs for {this.props.price}</p>
                        {console.log(this.props.customer)} */}
                        <div className="position-relative" >
                        <span className="badge bg-success text-white position-absolute" style={{right:'0px',top:'0px'}}>Cart:
                        <span>{this.props.customer.Quantity}</span>
                         </span>
                        </div>
                        <h4 className="card-title text-center">{this.props.customer.id} : {this.props.customer.name}</h4>
                        
                        <p className="card-text ">The product costs for {this.props.customer.Price}</p>
                        <div className="btn-group " role="group" aria-label="Basic example">
                            {/* {console.log(this.props.customer)}
                            {console.log(this.props.index)} */}

                            <button type="button" className="btn btn-primary" onClick={()=>this.fnAddbtn(this.props.customer,this.props.index)}>+</button>
                            <button type="button" className="btn btn-primary" onClick={()=>this.fnRembtn(this.props.customer,this.props.index)}>-</button>

                        </div>
                    </div>
                </div>
            </div>
        );
    };

    fnAddbtn =(cust,index)=>{
        let prodArr=this.state.products;
        // console.log(prodArr)
        prodArr.Quantity = prodArr.Quantity + 1;
        this.setState({
            products:prodArr
        })
        console.log(prodArr.Quantity);
    }


    fnRembtn =()=>{
        let prodArr=this.state.products;
        

        if(prodArr.Quantity == 0){
            // alert("please add something to cart")
            return;
        }
        else{
        // console.log(prodArr)
        prodArr.Quantity = prodArr.Quantity - 1;
        this.setState({
            products:prodArr
        })
        }
        console.log(prodArr.Quantity);

    }
}
