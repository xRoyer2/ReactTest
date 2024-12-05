import './TodoList.css'

function TodoList(props){
    return(
        <ul className="ulStyle">
            {props.children}
        </ul>    
    );
}

export {TodoList};