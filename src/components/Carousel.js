import React from 'react';

import Card from '../components/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Poegram from '../assets/images/poegram.png';
import neptune from '../assets/images/neptune.jpg';
import Serpent from '../assets/images/Khendo-Khani.jpg';
import Heartastrology from '../assets/images/heartastrology.png';
import NestzLogo from '../assets/images/Nestz-logo3.jpeg';

class Carousel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id:0,
          title: 'Nestz Life',
          subTitle: 'Nestz, a React website',
          imgSrc: NestzLogo,
          link: 'https://nestz.life',
          selected: false
        },
        {
          id:1,
          title: 'Dorje Shinno',
          subTitle: 'Single Stroke Serpent Painting, a wordpress website',
          imgSrc: Serpent,
          link: 'https://serpentpainting.com',
          selected: false
        },
        {
          id:2,
          title: 'Astral Tunes',
          subTitle: 'Creating Music through astrology, a React website',
          imgSrc: neptune,
          link: 'https://Astraltunes.com',
          selected: false
        },
        {
          id:3,
          title: 'Heart Astrology',
          subTitle: 'Astrology with heart, a wordpress website',
          imgSrc: Heartastrology,
          link: 'https://Heartastrology.com',
          selected: false
        },
        {
          id:4,
          title: 'Poegram',
          subTitle: 'Pure Poetry Art, a React website',
          imgSrc: Poegram,
          link: 'http://poegram-demo.herokuapp.com/AllPoegrams',
          selected: false
        },
          
      ]

    }
  }
  handleCardClick = (id, card) => {

    console.log(id);
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach(item => {
      if(item.id !== id) {
        item.selected = false;
      }
    });
    this.setState({
      items
    });
  }
  makeItems = (items) => {
    return items.map(item => {
      return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
    })
  }

  render() {
    return(
      <Container fluid={true}>
        <Row className='justify-content-around'>
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    )

  }
}
export default Carousel

