import React, {useRef, useContext} from 'react';
import { useDrag, useDrop } from 'react-dnd';
import BoardContext from '../Board/context'

// ASSETS
import { Container, Label } from './styles';

export default function Card({ data, index, listIndex }) {
  
  const ref = useRef();
  const { move } = useContext(BoardContext)
  
  let memTime = 0;


  const [ { isDragging }, dragRef] = useDrag({
    item: { 
      type: 'CARD',
      index,
      listIndex

   },
  
    collect: monitor => (
      {
        isDragging: monitor.isDragging(),
      }
    ),
  })

  const [, dropRef] = useDrop({
    // quais tipos de elemento sendo arrastado
    // ele pode aceitar, definido em item: { type: '...' } 
    accept: 'CARD',
    hover(item, monitor) {
      
      var date = new Date();
      var now = date.getTime();
      if(memTime === 0) memTime = now;
      
      //console.log(item.index, index)
      const draggedIndex = item.index;
      const targetIndex = index;

      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;

      if(draggedIndex === targetIndex && draggedListIndex === targetListIndex) return;
      
      const targetSize = ref.current.getBoundingClientRect();
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;
      
      const draggedOffset = monitor.getClientOffset();
      const draggedTop = draggedOffset.y - targetSize.top;

      if (draggedIndex < targetIndex && draggedTop < targetCenter) {
        return;
      }

      if (draggedIndex > targetIndex && draggedTop > targetCenter) {
        return;
      }

      if((now - memTime) >= 300 || draggedListIndex === targetListIndex){
        
        move(draggedListIndex, targetListIndex, draggedIndex, targetIndex,'card');
        item.index = targetIndex;
        item.listIndex = targetListIndex;
        memTime = 0;
      }

    }
  })
  dragRef(dropRef(ref))

  return (
  // ref -> Para indicar a API de DnD que esse componente 
  // pode ser arrastado
  <Container isDragging={isDragging} ref={ref} style={{backgroundColor: 'white'}}>
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
