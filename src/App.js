// render(App)
import React from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';
import 'aframe';
import 'aframe-particle-system-component';
import {Entity, Scene} from 'aframe-react';
// import 'aframe-physics-system'

// require aframe physics system
require('aframe-physics-system');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 30,
      scenex:0,
      scenez: 0,
      amount:0,
      boxes:[]
     };
    //  this.createBoxes= this.createBoxes.bind(this);
     this.createBox= this.createBox.bind(this);
  }


  componentDidMount() {
    this.setState({
      timer : 30,
      scenex:200,
      scenez: 400,
      amount: 20
    })
  }

  createBox(){
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    let posx =getRandomInt(20);
    let posz =getRandomInt(5);
    let scale = getRandomInt(5)
    console.log("create a box");
    let newBox =<Entity geometry={{primitive: 'box'}} material={{color: 'green'}} scale={{x: scale, y: scale, z:scale}} position={{x: posx, y: 2, z: posz}}/> 

    return newBox
  }

  handleCollide = () => {
    alert('You found it!');
  }

  

  render () {
  
    let box = this.createBox();
  
    return (
    <Scene physics="debug: true">
      <Entity primitive='a-sky' color='black'/>
    <Entity camera look-controls/>
    <Entity particle-system={{preset: 'snow', particleCount: 3000}}/>

    <Entity static-body geometry={{primitive: 'box'}} material={{color: 'red'}}  scale={{x: this.state.scenex, y: 0, z:this.state.scenez}} position={{x: 0, y: 0, z: 0}}/>
    {box}{box}{box}

    <Entity text={{value: 'Find the BlackBox'}}  scale={{x: 20, y: 20, z:20}} position={{x: 5, y:2, z: -5}}/>
    <h2>FIND THE PINK BOX</h2>
  </Scene>

  );
}
}

export default App;