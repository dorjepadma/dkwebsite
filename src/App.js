import React from 'react';

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
      <div>Hello dear fans!</div>
    );
  }
}

export default App;
