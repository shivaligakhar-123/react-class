import React, {Component} from "react";

class Student2 extends Component{
   constructor(props){
       super(props);
       this.state={
           name:''
       }
     this.handleChange=this.handleChange.bind(this);
     console.log(this);
   }
   handleChange(e){
       console.log(e);
       this.setState({name:e.target.value});
   }
    render(){
      return(
          <div>
              <input type="text" value ={this.state.name} onChange={this.handleChange}/>
              <div>{this.state.name}</div>
          </div>
          
      )
    }
}

// const Student = (props) => {
//     console.log(props);
//     return (
//       <div> <p>Hie {props.name}!</p>
//       <p> {props.age}</p>
//       </div>
//     )
// }

export default Student2;
// as the name suggests it renders jsx of class component
// functional m nhi hota
// 
// context : useContext 
// state : useState
// refs : useRef()
