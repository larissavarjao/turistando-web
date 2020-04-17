import React from 'react';
// import Footer from './Footer';
import Cover from './Cover';
import Header from './Header';
import { Container } from './style';

const Home = () => {
  return (
    <Container>
      <Header />
      <Cover />
      {/* <Footer /> */}
    </Container>
  );
};

export default Home;
