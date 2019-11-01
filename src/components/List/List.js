import React from 'react';

import Card from '../Card/Card'
import { Container } from './styles';

export default function List() {
  return (
    <Container>
      <header>
        <h2>Tarefas</h2>
        <button type="button">
          +
        </button>
      </header>

      <ul>
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
    </Container>
  );
}
