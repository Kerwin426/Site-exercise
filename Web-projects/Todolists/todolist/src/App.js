import { useState } from 'react';
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const addTodo = (value) => {
    const newList = todoList.concat({
      text: value,
      status: "active",
    });
    setTodoList(newList);
    setInputValue("");
  }
  const handleinput = (event) => {
    const value = event.target.value.trim();
    setInputValue(value);
  }
  const deleteTodo = (index) => {
    setTodoList((current) => {
      return current.filter((_, idx) => idx !== index);
    });
  }
  const handleDone = (item, idx) => {
    if (item.status === 'active') {
      const newList = todoList.map((item, index) => ({
        ...item,
        status: idx === index ? 'done' : item.status,
      }));
      setTodoList(newList);
    }else{
      const newList = todoList.map((item, index) => ({
        ...item,
        status: idx === index ? 'active' : item.status,
      }));
      setTodoList(newList);
    }
  };
  const handleKeyPress = (event)=>{
    if(event.key==='Enter'){
      addTodo(inputValue);
    }
    };
  return (
    <div className="container">
      <h1>Todolist</h1>

      <div className="input-group">
        <input type="text" className="form-control" placeholder="Add a new todo..."
          value={inputValue}
          onChange={handleinput}
          onKeyPress={handleKeyPress} />
        <span className="input-group-btn">
          <button
            onClick={() => {
              addTodo(inputValue);
            }}
            className="btn btn-default" type="button">Go!</button>
        </span>
      </div>
      <ul className="list-group">
        {
          todoList.map((item, index) => (
            <li className="list-group-item list-item" key={index}>
              <span className={item.status}>{item.text}</span>
              <div class="btn-group" role="group" aria-label="...">
                <button
                  onClick={() => deleteTodo(index)}
                  type="button" className="btn btn-danger">Delete</button>
                <button 
                  onClick={()=>handleDone(item,index)}
                type="button" className="btn btn-primary">
                  {item.status === "active"?"Done":"Undone"}
                </button>
              </div>
            </li>
          ))
        }

      </ul>
    </div>
  );
}

export default App;
