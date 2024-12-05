import logo from './platzi.webp';
import  {TodoCounter} from './TodoCounter';
import  {TodoSearch} from './TodoSearch';
import  {TodoList} from './TodoList';
import  {CreateTodoButton} from './CreateTodoButton';
import  {TodoItem} from './TodoItem';
import React from 'react';

const defaultTodos=[
  {text: 'Cambiarse', completed:true},
  {text: 'Preparar cafe y merienda', completed:false},
  {text: 'Alistar bici y accesorios', completed:false},
  {text: 'Alistar Bebidas y comidas de entreno', completed:false},
  {text: 'realizar entreno', completed:false},
]

 
function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={16} total={25}/>
      <TodoSearch/>
    
       <TodoList>
            {defaultTodos.map(todo =>(<TodoItem key={todo.text} task={todo.text}
            completed={todo.completed}
            />))}
              
        </TodoList>

      <CreateTodoButton/>
    </React.Fragment>
  );
}

 
export default App;
