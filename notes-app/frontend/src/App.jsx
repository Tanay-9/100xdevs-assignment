import { useEffect, useState } from 'react';
import './App.css';
import CreateTodo from './components/CreateTodo';
import Todos from './components/Todos';

function App() {
  const [todo, setTodos] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:3000/todos");
      if (!res.ok) {
        throw new Error('Failed to fetch todos');
      }
      const data = await res.json();
      setTodos(data.getTodos);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <CreateTodo fetchData={fetchData} />
      <Todos todo={todo} />
    </div>
  );
}

export default App;
