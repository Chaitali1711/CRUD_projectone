import React, { Component } from 'react'
export default class RegistrationForm  extends Component{
constructor(){
    super()
    this.state={
        fname:'',
        lname:'',
        pwd:'',
        email:'',
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

fnfnameChange=(v)=>{ this.setState({ fname:v.target.value }) }
fnlnameChange=(v)=>{this.setState({ lname:v.target.value }) }
fnemailChange=(v)=>{ this.setState({ email:v.target.value }) }
fnpwdChange=(v)=>{this.setState({ pwd:v.target.value }) }
fnradioChange=(v)=>{ this.setState({gender:v.value })}
fnCheckboxChange=(v)=>{this.setState({hobbie: v.target}) }

    fnSubmitInquiry=()=>{
        console.log("Your Name:" +this.state.fname +" " +this.state.lname) ;
        console.log("Email Address:" +this.state.email) ;
        console.log("Your password: "+this.state.pwd);
        console.log("Gender:"+this.state.gender)   
        console.log("Hobbies are:" +this.state.hobbie)      
    }
    render(){
        return (
            <div className="w-75 mx-auto my-5 border border-3 border-info p-5">
                <h2 className='text-center text-primary'>REGISTRATION FORM</h2>
                <div className="mb-3">
                    <label htmlFor="fname" className="form-label">First Name</label> &nbsp;
                    <input type="text" className="form-control" id="fname" value={this.state.fname} onChange={this.fnfnameChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="lname" className="form-label">Last Name</label> &nbsp;
                    <input type="text" className="form-control" id="lname" value={this.state.lname} onChange={this.fnlnameChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Address</label> &nbsp;
                    <input type="text" className="form-control" id="email" value={this.state.email} onChange={this.fnemailChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label" />Password &nbsp;
                    <input type="password" className="form-control" id="password" value={this.state.pwd} onChange={this.fnpwdChange} />
                </div>
                <div className="mb-3 " id="gen">
                    <label htmlFor="gender" className="form-label" />Gender: &nbsp;
                    <input type="radio" name="Gender" id="gender1" value="Male" checked onChange={this.fnradioChange}/>Male &nbsp;
                    <input type="radio" name="Gender" id="gender2" value="Female" onChange={this.fnradioChange} />Female
                </div>
                <div className="my-3 ">
                    <label htmlFor="check1" />Select Hobbies : &nbsp;
                    <input type="checkbox" name="hobbies" value={this.state.hobbie.sports} checked onChange={this.fnCheckboxChange}/>Sports &nbsp;
                    <input type="checkbox" name="hobbies" value={this.state.hobbie.reading} onChange={this.fnCheckboxChange}/>Reading &nbsp;
                    <input type="checkbox" name="hobbies" value={this.state.hobbie.art} onChange={this.fnCheckboxChange}/>Art &nbsp;
                    <input type="checkbox" name="hobbies" value={this.state.hobbie.dance} onChange={this.fnCheckboxChange}/>Dance &nbsp;
                </div>
                    <button type="submit" id="btnsubmit" className="btn btn-primary" onClick={()=>this.fnSubmitInquiry()}>Submit</button>
            </div>
    
        );
    }
    
        
}
