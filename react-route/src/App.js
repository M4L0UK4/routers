import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route } from "react-router-dom";
import Example from './Example';
import { Card, Button, CardTitle, CardText,Container, Row, Col,Table ,Jumbotron } from 'reactstrap';
import MyProfile from './MyProfile';
let tab2 = 
[
  {id:0,
    name:'akrem',
  photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png"},
  {id:1,
    name:'anas',
    photo:'./logo512.png'}
    ,
    {id:3,
      name:'malek',
      photo:'./logo192.png'}]
const Home = ()=>{
  return (<div>
    <Row>
        <Col xs="5"></Col>
        <Col xs="auto"><Card body inverse color="info">
        <CardTitle>Page d'acceuil</CardTitle>
        <CardText>Ajoutez un profile.</CardText>

      </Card></Col>
        <Col xs="3"></Col>
      </Row>
    <div class="col-md-6"></div>
   <center> <div class="col-md-4"> </div></center>
      <div class="col-md-6"></div>
  </div>)
}
const tab =[{name:"prod1",description:"prodDesc1"},{name:"prod2",description:"prodDesc2"},{name:"prod3",description:"prodDesc3"}];
// const MyProfile = ()=>{
//   return(
//   <div>
//           <input type="text" value={this.state.value} onChange={this.handleChange}></input>
//         <button onClick={()=>tab2.push(50,this.state.value,"test")}>Add</button> 
//   {
//   tab2.map((e,i)=><Link to={`/profile/${e.id}/${e.name}/${e.photo}`}>{e.name}</Link> )
//   }
     
//   </div>
//   );
// }
const Profiles = (props)=>{
  return (<div>
    <Jumbotron>
  <h1 className="display-3">Hello {props.match.params.name}!</h1>
        <p className="lead">Mon Profile {props.match.params.id}</p>
        <hr className="my-2" />
        <p><img height="100px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png"></img></p>
        <p className="lead">
          
        </p>
      </Jumbotron>
  </div>)
}
const Product = ()=>{
  return(
    <div>
      <h1>list of Products</h1>
      <Row>
        <Col xs="4"></Col>
      <Col xs="5">
      <Table dark>
      <thead>
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>Product description</th>
         
        </tr>
      </thead>
      <tbody>
  {tab.map((e,i)=><tr><td>{i}</td><td>{e.name}</td><td>{e.description}</td></tr>)}
      </tbody>
    </Table>
    </Col>
    </Row>
    </div>
  )
  ;
}
const Price =()=>{
  return(
    <div>
      <h1>list of Prices</h1>
      <Link to="/">Go back to home</Link>
    </div>
  )
  ;
}
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
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
  
      this.setState({name: event.target.value});
      console.log(this.state.name);
   
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Example></Example>
          <Route path="/" exact component={Home}/>
          <Route path="/profile" exact component={MyProfile}/>
          <Route path="/product" exact component={Product}/>
          <Route path="/price" exact component={Price}/>
          <Route path="/profile/:id/:name/:photo" component={Profiles} />
         </div>
      </BrowserRouter>
    );
  }
}

