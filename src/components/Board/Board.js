import React from 'react';

//Components
import List from '../List/List';


//Assets
import { Container } from './styles';

export default function Board() {
  return (
    <Container>
      <List />
      <List />
      <List />
      <List />
    </Container>
  );
}
