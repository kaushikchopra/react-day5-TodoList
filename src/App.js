import './App.css';
import todoList from './todoList'
import TodoCard from './components/TodoCard';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState(todoList);
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');

  // Adding a new Todo Card
  const addTodo = () => {
    if (taskName && description) {
      const newTodo = {
        id: todos.length + 1,
        taskName,
        description,
        status: 'Not Completed',
      }

      setTodos([...todos, newTodo]);
      setTaskName(''); // Clearing the Name input
      setDescription(''); // Clearing the Description input
    }
  }

  // Filtering the Todo Card basend on Completion Status
  const filterTodos = (todo) => {
    if (filterStatus === 'All') {
      return true;
    }
    return todo.status === filterStatus;
  }

  // Updating the Status of the Todo Card
  const updateStatus = (id, newStatus) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, status: newStatus } : todo
    );
    setTodos(updatedTodos);
  }

  // Deleting the Todo Card
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  return (
    <div className="App m-4">
      <div className="container p-5 m-auto">

        <h1 className="text-center text-success mb-3">My Todo</h1>

        <div className="row align-items-end">
          <div className="col-md-5 col-12 mb-md-0 mb-3">
            <input
              type="text"
              placeholder="Todo Name"
              value={taskName}
              onChange={(event) => setTaskName(event.target.value)}
              className="form-control rounded"
            />
          </div>
          <div className="col-md-5 col-12 mb-md-0 mb-3">
            <input
              type="text"
              placeholder="Description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              className="form-control rounded"
            />
          </div>
          <div className="col-md-2 col-12">
            <button
              type="button"
              className="btn btn-success rounded w-100 align-self-start align-md-middle"
              onClick={addTodo}
            >
              Add Todo
            </button>
          </div>
        </div>

      </div>

      <div className="container">
        <div className="d-flex justify-content-between flex-wrap">

          <p><b>My Todos</b></p>

          <label><b>Status:</b>
            <select className="custom-select" value={filterStatus} onChange={(event) => setFilterStatus(event.target.value)}>
              <option value="All">All</option>
              <option value="Completed">Completed</option>
              <option value="Not Completed">Not Completed</option>
            </select>
          </label>

        </div>
        <div className="row my-3">
          {todos.filter(filterTodos).map((todo) => (
            <div className="col-12 col-md-4" key={todo.id}>
              <TodoCard
                todo={todo}
                updateStatus={updateStatus}
                deleteTodo={deleteTodo}
              />
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}

export default App;
