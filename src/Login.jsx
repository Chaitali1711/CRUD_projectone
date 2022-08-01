import React from 'react'
import { Link } from 'react-router-dom';
import Taskform from './Taskform'

export default class Login extends React.Component{
    constructor(){
        super();
        this.state={
                    name:'',
                    passwd:'',
                    message:'Enter Username and Password',
                    style:'text-info'
        }
    }

    fnTextChange=(x)=>{
        this.setState({
            name:x.target.value
        })
    }

    fnPwdChange=(x)=>{
        this.setState({
            passwd:x.target.value
        })
    }

    fnLogin=async ()=>{
        // console.log("Name:" +this.state.name +" Password: "+this.state.passwd)
        let user=await fetch(`http://localhost:3004/users?username=${this.state.name}&password=${this.state.passwd}`,{method:"GET"})
        console.log(user);
        let logCheck=await user.json();
        console.log(logCheck.length) //0 if invalid, 1 if valid
        console.log(logCheck)

        if(logCheck.length>0){
            this.setState({
                message:"LOGIN Successful",
                style:'text-success'
            })
            return <Taskform/>
        }
        else{
            this.setState({
                message:"Invalid credentials, please try again",
                style:'text-danger'
            })
        }
    }



    render(){
        return(
            <div className='row align-items-center flex-column'>
                <form className='form'>
                    <div className='mb-3 text-center'>
                        <h2 className="text-primary">LOGIN FORM</h2>
                        <span className={this.state.style} >{this.state.message}</span>
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
                    <Link to='/InsertCustomer'>                        
                        <input type="button" value="LogIn" className='mx-3' onClick={()=>{this.fnLogin()}}/>
                    </Link>

                        <input type="reset" value="Clear" className='mx-3' />
                    </div> 
                    <div className='mb-3 d-flex justify-content-center'>
                    <Link to='/InsertCustomer'>                        
                        <input type="button" value="SignIN" className='mx-3'/>
                    </Link>
                        {/* <Link to='/InsertCustomer'> Sign In for new user</Link> */}
                    </div> 
                </form>
            </div>
        );
    }

    
}
