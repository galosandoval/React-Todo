import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const list = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      list,
      taskText: ''
    }
  }

  toggleTask = id => {
    this.setState({
      list: this.state.list.map(task => {
        if(task.id === id) {
          return {
            ...task,
            completed: !task.completed
          }
        } else {
          return task
        }
      })
    })
  }

  addTask = taskName => {
    const newTask = {
      task: taskName,
      id: new Date(),
      completed: false
    };

    this.setState({
      list: [...this.state.list, newTask]
    });
  };

  handleChanges = e => {
    this.setState({
      taskText: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.addTask(this.state.taskText);
    this.setState({
      taskText: ''
    });
  }

  clearButton = () => {
    this.setState({
      list: this.state.list.filter(task => !task.completed)
    })
  }

  handleClear = e => {
    this.clearButton(this.state.taskText)
  }

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <p onClick={() => this.setState({})}>List</p>
        <TodoForm 
          // taskText={this.taskText}
          addTask={this.addTask}
          handleChanges={this.handleChanges}
          handleSubmit={this.handleSubmit}
          handleClear={this.handleClear}
        />
        <TodoList 
          toggleTask={this.toggleTask}
          list={this.state.list}
        />
      </div>
    );
  }
}

export default App;
