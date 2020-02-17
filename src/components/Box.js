import React from 'react';
import ReactDOM from 'react-dom'
import 'aframe';
import 'aframe-particle-system-component';
import {Entity, Scene} from 'aframe-react';
// import 'aframe-physics-system'

// require aframe physics system
require('aframe-physics-system');

class  Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scenex:0,
      scenez: 0,
      // colors: ['red, green, blue, black']
     };
   
  }


  componentDidMount() {
    this.setState({
      scenex:200,
      scenez: 400,
    })
  }


  handleCollide = () => {
    alert('You found it!');
  }

  

  render () {

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
  
      function getRandomColor(colors){
        return colors[Math.floor(Math.random() * colors.length)];
      }

      let posx =getRandomInt(300);
      let posz =getRandomInt(50);
      let scale = getRandomInt(5);
      let colorArr = ['red', 'green', 'blue', 'brown'];
      let color = getRandomColor(colorArr);
      console.log("created a box");
      console.log("rand color"+color);
    
      return (

        <Entity geometry={{primitive: 'box'}} material={{color: color}} scale={{x: scale, y: scale, z:scale}} position={{x: posx, y: 2, z: posz}}/> 
  );
}
}

export default Box;