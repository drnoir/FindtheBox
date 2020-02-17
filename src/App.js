// render(App)
import React from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';
import 'aframe';
import 'aframe-particle-system-component';
import {Entity, Scene} from 'aframe-react';
import Box from './components/Box.js'
// import 'aframe-mountain-component';
import 'aframe-physics-system';

// require aframe physics system
require('aframe-physics-system');
require('aframe-mountain-component');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 30,
      scenex:0,
      scenez: 0,
      amount:20,
      boxes:[]
     };
    //  this.createBoxes= this.createBoxes.bind(this);
    //  this.createBox= this.createBox.bind(this);
  }


  componentDidMount() {
    this.setState({
      timer : 30,
      scenex:200,
      scenez: 400,
      amount: 20
    })
  }

  // createBoxes(amount){
  // console.log("create"+amount+"boxes");
  // var i;
  //   for (i = 0; i < amount; i++) {
  //     return <Box/>
  //   }
  // }

  handleCollide = () => {
    alert('You found it!');
  }

  

  render () {
  
    // let boxes = this.createBoxes(10);
  

    let snow = {
      shader: 'flat',
      src : 'snow.jpg'
  };

  let sky = {
    shader: 'flat',
    src : 'cloud.jpg'
  }


    return (
    <Scene physics="debug:true" cursor="rayOrigin: mouse">
      {/* <Entity mountain/> */}
      <Entity primitive='a-sky'   material={sky}/>
    <Entity camera look-controls wasd-controls={{ acceleration: 5000 }} position={{x: 0, y: 0, z: 0}}/>
    <Entity particle-system={{preset: 'snow', particleCount: 3000}}/>
      <Box/><Box/><Box/><Box/><Box/><Box/><Box/><Box/><Box/><Box/><Box/><Box/>
      <Box/><Box/><Box/><Box/><Box/><Box/><Box/><Box/><Box/><Box/><Box/><Box/>
      <Box/><Box/><Box/><Box/><Box/><Box/><Box/><Box/><Box/><Box/><Box/><Box/>
      <Box/><Box/><Box/><Box/><Box/><Box/><Box/><Box/><Box/><Box/><Box/><Box/>
      <Box/><Box/><Box/><Box/><Box/><Box/><Box/><Box/><Box/><Box/><Box/><Box/>
      <Box/><Box/><Box/><Box/><Box/><Box/><Box/><Box/><Box/><Box/><Box/><Box/>
      <Box/><Box/><Box/><Box/><Box/><Box/><Box/><Box/><Box/><Box/><Box/><Box/>
    <Entity static-body geometry={{primitive: 'box'}}    material={snow} scale={{x: this.state.scenex, y: 0, z:this.state.scenez}} position={{x: 0, y: 0, z: 0}}/>
    <Entity text={{value: 'Find the BlackBox'}} color={{value:'black'}}  scale={{x: 20, y: 20, z:20}} position={{x: 5, y:2, z: -5}}/>
 
  </Scene>

  );
}
}

export default App;