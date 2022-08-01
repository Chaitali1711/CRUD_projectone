import React from 'react';
import InsertCustomer from './InsertCustomer'

class Showcustomer extends React.Component {
state={
  custData:this.props.custData
}

    render(){
  return (
    <div>
      {this.state.custData.map((customData,index)=>{
    return (
        <InsertCustomer custdata={customData} />
          );
      })}

    </div>
  )
  }
}

export default Showcustomer