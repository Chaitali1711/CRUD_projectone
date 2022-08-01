import React, { Component } from "react";

export default class Widgets extends Component{
    constructor(){
        super();
        this.state={
            name:'',
            passwd:'',
            fname:'',
            lname:'',
            pwd:'',
            gender:{
                female:'',
                male:''
            },
            hobbie:{
                sports:'',
                reading:'',
                art:'',
                dance:''
            }
        }
    }

//Login form functions
    fnTextChange=(x)=>{ this.setState({ name:x.target.value  }) }
    fnPwdChange=(x)=>{ this.setState({ passwd:x.target.value }) }
    fnSubmit=(x)=>{ console.log("Name:" +this.state.name +" Password: "+this.state.passwd);  }

//Registration form functions
    fnfnameChange=(v)=>{ this.setState({ fname:v.target.value }) }
    fnlnameChange=(v)=>{this.setState({ lname:v.target.value }) }
    fnpwdChange=(v)=>{this.setState({ pwd:v.target.value }) }
    fnradioChange=(v)=>{ this.setState({gender:v.value })}
    fnCheckboxChange=(v)=>{this.setState({hobbie: v.target}) }
    fnSubmitInquiry=()=>{
        console.log("Your Name:" +this.state.fname +" " +this.state.lname) ;
        console.log("Your password: "+this.state.pwd);
        console.log("Gender:"+this.state.gender)   
        console.log("Hobbies are:" +this.state.hobbie)      
    }

    render(){
        return(
            <div>
                <div className="d-flex justify-content-end">
                    <ul className="nav nav-tabs">
                        <li className="active"><a href="#Login" data-toggle="tab" className="nav-link">Login</a></li>
                        <li ><a href="#Registration" data-toggle="tab" className="nav-link">Registration</a></li>
                        <li ><a href="#dashboard" data-toggle="tab" className="nav-link">Dashboard</a></li>
                        <li ><a href="#Aboutus"  data-toggle="tab" className="nav-link">About Us</a></li>
                        <li ><a href="#Contactus" data-toggle="tab" className="nav-link">Contact Us</a></li>
                    </ul>
                </div>
                <div className="tab-content">
                    <div id="Login" className="tab-pane fade in active row w-50 mx-auto my-5">
                        <div className='mb-3'>
                            <h2 className="text-center text-primary">LOGIN FORM</h2>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="uname">Name</label>
                            <input type="text" id='uname' className='form-control' placeholder='Enter the username' value={this.state.name} onChange={this.fnTextChange}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="pwd" >Password</label>
                            <input type="password" id="pwd" className='form-control' placeholder='Enter the password' value={this.state.passwd} onChange={this.fnPwdChange}/>
                        </div>
                        <div className='mb-3 d-flex justify-content-center'>
                            <input type="button" value="Submit" className='mx-3' onClick={()=>{this.fnSubmit()}}/>
                            <input type="reset" value="Clear" className='mx-3' />
                        </div>                    
                    </div>
                    <div id="Registration" className="tab-pane fade row w-75 mx-auto my-5">
                        <h2 className='text-center text-primary'>REGISTRATION FORM</h2>
                        <div className="mb-3">
                            <label htmlFor="fname" className="form-label">First Name</label> &nbsp;
                            <input type="text" className="form-control" id="fname" value="" onChange={this.fnfnameChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lname" className="form-label">Last Name</label> &nbsp;
                            <input type="text" className="form-control" id="lname" value="" onChange={this.fnlnameChange}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label" />Password &nbsp;
                            <input type="password" className="form-control" id="password"  onChange={this.fnpwdChange} />
                        </div>
                        <div className="mb-3 " id="gen">
                            <label htmlFor="gender" className="form-label" />Gender: &nbsp;
                            <input type="radio" name="Gender" id="gender1" value="Male" checked onChange={this.fnradioChange}/>Male &nbsp;
                            <input type="radio" name="Gender" id="gender2" value="Female" onChange={this.fnradioChange} />Female
                        </div>
                        <div className="my-3 ">
                            <label htmlFor="check1" />Select Hobbies : &nbsp;
                            <input type="checkbox" name="hobbies" checked onChange={this.fnCheckboxChange}/>Sports &nbsp;
                            <input type="checkbox" name="hobbies"  onChange={this.fnCheckboxChange}/>Reading &nbsp;
                            <input type="checkbox" name="hobbies"  onChange={this.fnCheckboxChange}/>Art &nbsp;
                            <input type="checkbox" name="hobbies"  onChange={this.fnCheckboxChange}/>Dance &nbsp;
                        </div>
                        <button type="submit" id="btnsubmit" className="btn btn-primary" onClick={()=>this.fnSubmitInquiry()}>Submit</button>
                    </div>
                    <div id="dashboard" className="tab-pane fade in active row w-50 mx-auto my-5">
                        <h3 className='text-center text-primary'>DASHBOARD</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div id="Aboutus" className="tab-pane fade row w-75 mx-auto my-5">
                        <h3 className='text-center text-primary'>About Us</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div id="Contactus" className="tab-pane fade row w-75 mx-auto my-5">
                        <h3 className='text-center text-primary'>CONTACT US</h3>
                        <div className="mb3">
                            <label htmlFor="name2" value="" placeholder="Enter Name"/>Full Name:
                            <input type="text" id="name2" className="form-control"/>
                        </div>
                        <div className="mb3">
                            <label htmlFor="mail" value="" placeholder="Enter Email"/>Email Address:
                            <input type="email" id="mail" className="form-control"/>
                        </div>
                        <div className="mb3">
                            <label htmlFor="contactno" value="" placeholder="Enter Contact Number"/>Contact Number:
                            <input type="text" id="contactno" className="form-control"/>
                        </div>
                        <div className="mb3">
                            <label htmlFor="stream" value="" className="me-4"/>Select Stream: 
                            <select id="stream">
                                <option>Select Stream</option>
                                <option>UX / UI</option>
                                <option>Web Design</option>
                                <option>Web Development</option>
                                <option>Android</option>
                                <option>IOS</option>
                            </select>
                        </div>
                        <div className="mb3">
                            <label htmlFor="course" value="" />Intrested Course
                            <textarea rows="2" cols="30" id="course"></textarea>
                        </div>
                        <div className="mb3">
                            <label htmlFor="message" value="" />Your Message
                            <textarea rows="2" cols="30" id="message"></textarea>
                        </div>
                        <div className="mb3">
                            <input type="submit" value="Submit"/>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}