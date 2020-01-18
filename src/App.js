import React from 'react';


import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

import "./components/TodoComponents/Todo.css";

const todoData = [
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    },
    {
      task: 'Clean Room',
      id: 1524345184467,
      completed: false
    },
    {
      task: 'Go to the Gym',
      id: 1528121386165,
      completed: false
    }
]
class App extends React.Component {
constructor() {
  super();
  this.state = {
    name: "Brian",
    todo: todoData
  };
}

toggleItem = id => {
  console.log(id);
  this.setState({
    todo: this.state.todo.map(item => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed
        };
      } else {
        return item;
      }
    })
  });
};

addItem = itemName => {
  const newItem = {
    task: itemName,
    id: Date.now(),
    completed: false
  };
  this.setState({
    todo: [...this.state.todo, newItem
]
  });
};

clearCompleted = (e) => {
e.preventDefault();
this.setState({
  todo: this.state.todo.filter(item => !item.completed)
})
}

render() {
  return (
    <div className="App">
      <h2>Welcome to your Todo App!</h2>
      <TodoForm addItem={this.addItem}
      />
      <TodoList
        todo={this.state.todo}
        toggleItem={this.toggleItem}
        clearCompleted={this.clearCompleted}
      />

    </div>
  )
}
}
export default App;