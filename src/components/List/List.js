import React from 'react';

import Card from '../Card/Card'
import { DropTarget } from 'react-dnd';


import { Container } from './styles';
import {MdAdd} from 'react-icons/md'

function List({data, index: listIndex, connectDropTarget}) 
  {
  
  return connectDropTarget(
    <div style={{flexGrow:0, flexShrink:0, flexBasis:320}}>

      <Container done={data.done}>
        <header>
          <h2>{data.title}</h2>
          {data.creatable && (
            <button type="button">
              <MdAdd size={24} color="#FFF"/>
            </button>
          )}
        </header>

        <ul>
          { 
            data.cards.map( 
              (card, index) =>
              <Card 
              index={index}
              listIndex={listIndex} 
              key={card.id} 
              data={card}>

              </Card>
              
            )
          }
        </ul>
      </Container>
    </div>
  );
}

export default DropTarget (
  props => props.accepts,
  {
    drop(props, monitor) {
      props.onDrop(monitor.getItem())
    },
  },
  (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
  }),
)(List)
