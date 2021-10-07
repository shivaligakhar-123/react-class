import React, {Component} from "react";

class Batch extends Component{
   constructor(props){
       super(props);
       this.state={
           count:0
       }
     
     console.log(this);
   }

   handleClick=()=>{
    //    flushSync Api react inbuilt - states updates batching fails and it will not be applied 
    setTimeout(() => {
        this.setState({count: this.state.count+1});
        this.setState({count: this.state.count+1});
        this.setState({count: this.state.count+5});
        this.setState({count: this.state.count+9});
 
       
      }, 1000);
    
     

   }
    render(){
      return(
          <div>
              <button onClick={this.handleClick}>Click Me!</button>
              <div>{this.state.count}</div>
          </div>
          
      )
    }
}




export default Batch;

