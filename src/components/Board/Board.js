import React from 'react';
import { loadLists } from '../../services/api.js';
//Components
import List from '../List/List';


//Assets
import { Container } from './styles';

const lists = loadLists()

export default function Board() {
  return (
    <Container>
      {lists.map( list => <List key={list.title} data={list} />)}
    </Container>
  );
}
