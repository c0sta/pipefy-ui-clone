import React from 'react';
import { useDrag } from 'react-dnd';

import { Container, Label } from './styles';

export default function Card({data}) {
  
  const [ { isDragging }, dragRef] = useDrag({
    item: { type: 'CARD' },
  
    collect: monitor => (
      {
        isDragging: monitor.isDragging(),
      }
    ),
  })
  
  return (
  // ref -> Para indicar a API de DnD que esse componente 
  // pode ser arrastado
  <Container isDragging={isDragging} ref={dragRef} style={{backgroundColor: 'white'}}>
      <header>
        {data.labels.map(label => <Label key={label} color={label} />) }

      </header>
      <p>
        {data.content}
      </p>
      {data.user && <img  src={data.user} alt="icon"/>}
    </Container>
  );
}
