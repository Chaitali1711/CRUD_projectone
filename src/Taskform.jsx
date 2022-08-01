import React, { Component } from 'react'

export default class Taskform extends Component {
 constructor(props){
    super(props);
    this.state={
        time:'',user:'', title: '', discreption:''
 }
}

 
    render() {
    return (
      <div className='d-flex justify-content-center'>
        <div className="card " style= {{width:'40rem'}}>
            <div className="card-body">
                <div className="row">
                    <div className="col-6">
                        <span>{new Date().toLocaleString()}</span>
                    </div>
                    <div className="col-6 text-right">
                        <span> Hello user ! {this.state.user} </span>
                    </div>
                </div>
            <div className="row justify-content-center"> 
                <input type="text" className="card-title"  placeholder='task Title' onChange={(e)=>{this.setState({title:e.target.value})}} value={this.state.title} />
            </div>
            <div className="row justify-content-center"> 
            <textarea className="card-text" cols='30' placeholder='task Discription' value={this.state.discreption} onChange={(e)=>{this.setState({discreption:e.target.value})}}/>
            </div>   
            <div className="row justify-content-center my-2"> 
            <a href="#" className="card-link"  >Edit</a>
            <a href="#" className="card-link" >Update</a>
            <a href="#" className="card-link" onClick={()=>{}} >Save</a>
            </div>
            </div>
        </div>
      </div>
    )
  }
}
