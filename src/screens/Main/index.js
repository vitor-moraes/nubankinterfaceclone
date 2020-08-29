import React from 'react';

import Header from '../../components/Header';
import Tabs from '../../components/Tabs';

import {Container} from './styles';

const Main = () => {
  return (
    <Container>
      <Header />
      <Tabs />
    </Container>
  );
};

export default Main;
