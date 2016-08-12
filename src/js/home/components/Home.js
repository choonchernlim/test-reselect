import React from 'react';
import Container from '../../common/components/Container';

const Home = () => (
  <Container>
    <h1>Welcome!</h1>

    <p>This demo illustrates the usage of <a href="https://github.com/reactjs/reselect">Reselect</a>
      { ' ' } by comparing the effects on a React container using a selector vs not using a
      selector.
    </p>
  </Container>
);

export default Home;
