// render(App)
import React from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';
import 'aframe';
import 'aframe-particle-system-component';
import {Entity, Scene} from 'aframe-react';
import 'aframe-physics-system'

// // require aframe physics system
// require('aframe-physics-system');

class App extends React.Component {
  constructor(props) {
    super(props);
    // this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = {
      timer: 30,
     };
  }


  componentDidMount() {
    this.setState({
      timer : 30
    })


  }

  render () {

    return (
    <Scene physics="debug: true">
    <Entity camera look-controls geometry={{primitive: 'box'}} material={{color: 'red'}} position={{x: 0, y: 0, z: -5}}/>
    <Entity particle-system={{preset: 'snow'}}/>
    <Entity static-body geometry={{primitive: 'box'}} material={{color: 'red'}} position={{x: 20, y: 0, z: -5}}/>
    <Entity static-body geometry={{primitive: 'box'}} material={{color: 'green'}}  scale={{x: 200, y: 0, z:400}} position={{x: 0, y: 0, z: 0}}/>
    <Entity id = "box1"static-body geometry={{primitive: 'box'}} material={{color: 'black'}}  scale={{x: 2.4, y: 2.4, z: 5}} position={{x: 10, y: 0, z: 0}}/>
    <Entity id = "box1"static-body geometry={{primitive: 'box'}} material={{color: 'red'}}  scale={{x: 1, y: 2, z: 5}} position={{x: 20, y: 0, z: 20}}/>
    <Entity id = "box1"static-body geometry={{primitive: 'box'}} material={{color: 'green'}}  scale={{x: 5, y: 5, z: 5}} position={{x: 20, y: 0, z: 10}}/>
    <Entity id = "box1"static-body geometry={{primitive: 'box'}} material={{color: 'blue'}}  scale={{x: 5, y: 5, z: 5}} position={{x: 16, y: 0, z: 5}}/>
    <Entity id = "PINK" static-body geometry={{primitive: 'box'}} material={{color: 'pink'}}  scale={{x: 2, y: 2, z: 2}} position={{x: 25, y: 0, z: 9}}/>


    <Entity text={{value: 'Find your way out of the maze!'}}/>
    <h2>FIND THE PINK BOX</h2>
  </Scene>

  );
}
}

export default App;