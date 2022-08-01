import React, { Component } from "react";
import Product from "./Product";

export default class Shoppingcartfetch extends Component {
  state = {
    products: [
      
    ],
  };

  render() {
    return (
      <div className="container-fluid">
        <h4>Shopping Cart</h4>
        <div className="row">
          {this.state.products.map((prod,index) => {
            return (
              <Product
                key={prod.id}
                product={prod}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
              >
                <button className="btn btn-primary">Buy Now</button>
                <button className="btn btn-warning" onClick={()=>this.fnDelete(prod,index)}>Delete from List</button>
              </Product>
            );
          })}
        </div>
      </div>
    );
  }
  // render ends here

// componentDidMount(){
//     var promise=fetch("http://localhost:3004/products",{method:"GET"});
//     promise.then((res)=>{
//         console.log(res)
//         var promise2=res.json();
//         console.log(promise2);
//         promise2.then((prods)=>{
//             console.log(prods);
//             this.setState({
//                 products:prods
//             });
//          });
//     });
// }


componentDidMount=async()=>{
  // var response=await fetch("http://localhost:3004/products",{method:"GET"});
  var response=await fetch("https://polar-chamber-75571.herokuapp.com/products",{method:"GET"});
  console.log("Response::",response);
  var prods= await response.json();
          this.setState({
              products:prods
          });
  }
  

  //executes when the user clicks on + button.
  handleIncrement = (product, maxValue) => {
    //get index of selected product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (allProducts[index].quantity < maxValue) {
      allProducts[index].quantity++;

      //update the state of current component (parent component)
      this.setState({ products: allProducts });
    }
  };

  //executes when the user clicks on - button.
  handleDecrement = (product, minValue) => {
    //get index of selected product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (allProducts[index].quantity > minValue) {
      allProducts[index].quantity--;

      //update the state of current component (parent component)
      this.setState({ products: allProducts });
    }
  };

  fnDelete=(prod,index)=>{
    var proceed = window.confirm("Are you sure you want to delete?");
    let newarr = this.state.products
    if(proceed)
    {
    // console.log(newarr[index])
    console.log(newarr.splice(index,1))
    this.setState({
      products:newarr
    })
    console.log(newarr)
  }

  else
   return;

  }
}
