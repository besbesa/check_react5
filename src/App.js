import React, { Component } from 'react';
import Box from './components/box';
import img1 from './1.png';
import img2 from './1.png';
import img3 from './1.png';
import img4 from './1.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1><center>Notre équipe</center></h1>
        <Box gender='female' taswira={img1} name='emna' des1="Founder" des2="COO"/>
        <Box gender='female' taswira={img2} name='mahmoud' des1="Founder" des2="COO"/>
        <Box gender='male' taswira={img3} name='Arsslen idadi' des1="Software Engineer" des2="Part Time PRG.Manager"/>
        <Box gender='male' taswira={img4} name='Sameh Ghanmi' des1="Full Time Program" des2="Manager"/>
      </div>
    );
  }
}

export default App;
