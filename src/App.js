import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
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

          <Navbar className='border-bottom' bg='transparent' expand='lg'>

            <Navbar.Brand>Dorje Kirsten</Navbar.Brand>

            <Navbar.Toggle className='border-0' aria-controls='navbar-toggle' />
            <Navbar.Collapse id='navbar-toggle'>
              <Nav className='ml-auto'>
                <Link className='nav-link' to="/">Home</Link>
                <Link className='nav-link' to="/Bio">Bio</Link>
                <Link className='nav-link' to="/Contact">Contact</Link>
              </Nav>
          </Navbar.Collapse>
          </Navbar>
        </Container>
      </Router>
    );
  }
}

export default App;
