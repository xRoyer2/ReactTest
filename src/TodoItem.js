import './TodoItem.css'

function TodoItem({task, completed}){
    return(
 
      <li className="liStyle">
        <span>v</span>
        <p>{task}</p> 
        <span>X</span>
      </li>
 
    );
  }

  export{TodoItem};