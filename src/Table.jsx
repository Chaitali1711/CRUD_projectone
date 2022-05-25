import React, { Component } from "react"

export default class Table extends Component{
state={
    Data :[
        {
           rate:50,
           qtity : 200,
           amt: 10000,
           disc: '?',
           bill:'?', 
           gst:'?',
           netbill: '?'
    }]

}

    render(){

        
        return (
<div>
    <table className="table align-center m-3 border-secondary">
        <thead>
            <tr >
                <th>Rate</th>
                <th>Quantity</th>
                <th>Amount</th>
                <th>Discount</th>
                <th>Bill</th>
                <th>GST</th>
                <th>Net Bill</th>
            </tr>
        </thead>
        
            {this.state.Data.map((d)=>{
                return(
                    <tbody>
                        <tr key={d.qtity}>
                            <td>{d.rate}</td>
                            <td>{d.qtity}</td>
                            <td>{d.amt}</td>
                            <td>{this.funDiscount(d)}</td>
                            <td>{this.funBill(d)}</td>
                            <td>{this.funGst(d)}</td>
                            <td>{this.funNetbill(d)}</td>
                        </tr>
                        <tr >
                            <th colSpan='7' className={this.mystyle()}>Your net Bill Amount is {d.netbill}</th>
                        </tr>
                        <tr>
                            <th colSpan='7'  className={this.mystyle()}>You have saved {d.disc}</th>
                        </tr>
                    </tbody> 
                )
            })}
    </table>
    </div>
        );
    }

        
    funDiscount= (d)=>{
        if(d.amt >= 10000){
            d.disc= 0.05 * d.amt;
            return d.disc
        }
        else
        return 0.1 * d.amt
    }

    funBill = (d)=>{
        d.bill=d.amt - d.disc;
        return d.bill;
    }

    funGst= (d)=>{
        if(d.amt >= 10000){
             d.gst = 0.28 * d.bill; //2660
             return d.gst
        }
        else
        return d.gst = 0.18 * d.amt
    }

    funNetbill =(d) =>{
        d.netbill=d.gst + d.bill
        console.log(d.netbill)
        if(d.netbill > 10000){
            alert("Your total bill is "+d.netbill)
        }
        return d.netbill;
    }

    mystyle =(d) => {
        
            return "bg-secondary text-center text-white"
        
    }
}