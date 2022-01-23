import React from 'react';
import Avatar from '../components/Avatar'
import Content from '../components/Content'

function BioPage(props) {
  return(
  <div>
    <Avatar title={props.title} />
    <Content>
      <p>Thank you for stopping by.  I am a full stack engineer who is skilled in React, Javascript, NodeJS, Redux, Firebase, and SEO. This is folded into a poet, astrologer, tea master, and contemplative.  </p>

      <p>I spent my twenties and thirties living at a Nyingma Buddhist retreat center, Chagdud Gonpa Rigdzin Ling. I left to raise a family and practice astrology. On the way I founded Planet Teas. After filling myself with plenty of tea, I became a software engineer.
      </p>

      <p>Code is a form of art and poetry. It is a tool for good and evil. It is a builder of a new and better world, a craftsmans tools to create beauty and elegance. I humbly lay myself at the feet of this exciting new craft. I would love to work with you in this noble endeavor. </p>

      <p> I am available for freelance work, please reach out through the contact page.</p>
    </Content>
  </div>
  );
}
export default BioPage
