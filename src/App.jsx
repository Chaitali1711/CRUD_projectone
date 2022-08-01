import React, { Component } from "react";
import {Routes,Route,BrowserRouter, Link} from 'react-router-dom';
import NavBar from "./NavBar";
// import MainContent2 from "./MainContent2";
// import MainContent from "./MainContent";
// import Order from "./Order";
// import Cart  from "./Cart";
// import ShoppingCart from './ShoppingCart'
import Shoppingcartfetch from "./Shoppingcartfetch";
import Login from "./Login";
import RegistrationForm from "./RegistrationForm";
import NewCustomer from './InsertCustomer'
import AddProducts from './AddProducts';
// import Widgets from "./Widgets";
// import Pagination from "./Pagination";
import Retrive from './Retrive';
import Taskform from './Taskform'
import Create from "./CRUD/Create";

// import Table from './Table'
export default class App extends Component {
  render() {
    return (
      // <React.Fragment>
      //   <NavBar />
      //   {/* <Table /> */}
      //   {/* <MainContent2 /> */}
      //   {/* <MainContent /> */}
      //   {/* <Cart /> */}
      //   {/* <ShoppingCart/> */}
      //   {/* <Shoppingcartfetch/> */}
      //   <Login/>
      //   <RegistrationForm/>
      //   {/* <TravelForm/> */}
      //   {/* <Widgets/> */}
      //   {/* <Pagination/> */}
      // </React.Fragment>
      <BrowserRouter>
      <NavBar/>
       <Routes>
        {/* <Route path="/" exact element={<Widgets/>}/> */}
        <Route path="/" element={<Shoppingcartfetch/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Create" element={<Create/>}/>

        <Route path="/Taskform" element={<Taskform/>}/>
        <Route path="/RetriveProducts" element={<Retrive/>}/>
        <Route path="/AddProduct" element={<AddProducts/>}/>
        <Route path="/InsertCustomer" element={<NewCustomer/>}/>
        <Route path="/RegistrationForm" element={<RegistrationForm/>}/>
      </Routes>
      </BrowserRouter>

    );
  }
}
