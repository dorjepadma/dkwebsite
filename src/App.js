import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Dorje Kirsten',
      headerLinks: [
        { title: 'Home', path: '/'},
        { title: 'Bio', path: '/Bio'},
        { title: 'Contact', path: '/Contact'},
        { title: 'Heart Astrology', path: '/www.heartastrology.com'},
        { title: 'Serpent Paintings', path: '/www.serpentpainting.com'},
        { title: 'Good Teas', path: '/www.planet-teas.com'}
      ],
      home: {
        title: 'Transforms the world',
        subTitle: 'Working for a better tomorrow',
        text: 'A few of the projects I have worked on'
      },
      bio: {
        title: 'A taste of my story'
      },
      contact: {
        title: 'Get in touch'
      },
    }
  }
  render() {
    return (
      <Router>
        <Container className='p-0' fluid={true}>

          <Navbar>
            <Navbar.Brand>Dorje Kirsten</Navbar.Brand>
          </Navbar>

        </Container>
      </Router>
    );
  }
}

export default App;
