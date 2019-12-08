import React from 'react';
import { BrowserRouter, Link, Route } from "react-router-dom";
class MyProfile extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
          name: "",
          id:"",
          photo:"",
          tab2:[{id:0,
            name:'akrem',
          photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png"},
          {id:1,
            name:'anas',
            photo:'./logo512.png'}
            ,
            {id:3,
              name:'malek',
              photo:'./logo192.png'}],
          textDecoration : '',
      };
    
        this.handleChange = this.handleChange.bind(this);
      }
      handleChange(event) {
        if (event.target.name ==="name") {
          this.setState({name: event.target.value});
          console.log(this.state.name);
        }else if(event.target.name ==="id"){
            this.setState({id: event.target.value});
          console.log(this.state.id);
        }else if(event.target.name ==="photo"){
            this.setState({photo: event.target.value});
          console.log(this.state.photo);
        }
       
      }
    render(){

        return(
            <div>
            <label>Enter the name</label><input type="text" value={this.state.name} onChange={this.handleChange} name="name"></input>
            <label>Enter the id</label><input type="text" value={this.state.id} onChange={this.handleChange} name="id"></input>
            <label>Enter photo</label><input type="text" value={this.state.photo} onChange={this.handleChange} name="photo"></input>
    <button onClick={()=>this.setState({tab2:this.state.tab2.concat({id:this.state.id,name:this.state.name,photo:this.state.photo})})}>Add</button>
      {/* <Link to={`/profile/${props.id}/${props.name}/${props.photo}`}>{props.name}</Link>  */}
      {
          this.state.tab2.map((e,i)=><Link to={`/profile/${e.id}/${e.name}/${e.photo}`}>{e.name}</Link> )
      }
      
         
      </div>
    
    
        );
    }
    
}

export default MyProfile