import React from "react";

const TodoList = (props) => {
  
    return (
    <>
        <div className="todo_style">
            <li>{props.text}</li>
            <button className="delete" onClick={() => { props.onSelect(props.id);}}>Delete</button>
        </div>
    </>
    );
}
export default TodoList;