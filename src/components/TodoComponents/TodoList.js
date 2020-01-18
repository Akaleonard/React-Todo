import React from "react";

import Todo from "./Todo";

const TodoList = props => {
    return (
        <div className="todo-list">
            {props.todo.map(item => (
                <Todo key={item.id} item={item} toggleItem={props.toggleItem}/>
            ))}
            <button onClick={props.clearCompleted}>
                Clear Done
            </button>
        </div>
    )
}

export default TodoList; 