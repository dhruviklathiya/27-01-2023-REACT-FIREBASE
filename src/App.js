import React, { useEffect, useState } from 'react';
import { getData } from './Firebase/functions';


function App() {
  const [todos, setTodos] = useState([1, 2, 3, 4]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData()
      setTodos(data);
      console.log(todos)
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Todos:</h1>
      <ul>
        {todos.map(todo => (
          <li>{todo.title}</li>
        ))}
        {/* {
          todos?.map((val) => {
            return (
              <>
                <li>{val}</li>
              </>
            )
          })
        } */}
      </ul>
    </div>
  );
}

export default App;