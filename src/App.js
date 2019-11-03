import React from 'react';
import GlobalStyle from './styles/global';
import Header from './components/Header/Header';
import Board from './components/Board/Board'
import {DndProvider} from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

export default function App() {
  return (
//
    <DndProvider backend={HTML5Backend}>
      <Header />
      <Board />


      <GlobalStyle />
    </DndProvider>
  );
}


