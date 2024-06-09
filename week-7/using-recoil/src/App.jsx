import { useState } from "react";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { filterAtom, filterSelector, todoAtom } from "./store/store";

const App = () => {
  return (
    <>
      <RecoilRoot>
        <Input />
        <Filter />
        <TodoRender />
      </RecoilRoot>
    </>
  );
};

export default App;

const Filter = () => {
  const setFilterText = useSetRecoilState(filterAtom);
  const handleFilter = (e) => {
    setFilterText(e.target.value);
  };

  console.log('re-renderer');
  return (
    <div>
      <input type="text" placeholder="enter the text you wanna filter on" onChange={handleFilter} />
    </div>
  );
};

const Input = () => {
  const setTodo = useSetRecoilState(todoAtom);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleDesc = (e) => {
    setDesc(e.target.value);
  };

  const handleTodo = () => {
    setTodo((todo) => [
      ...todo,
      {
        title: title,
        description: desc,
      },
    ]);

    // Clear the input fields
    setTitle('');
    setDesc('');
  };

  console.log('input re-rendering');
  return (
    <>
      <input type="text" placeholder="enter title" value={title} onChange={handleTitle} />
      <input type="text" placeholder="enter description" value={desc} onChange={handleDesc} />
      <button onClick={handleTodo}>Submit the todo</button>
    </>
  );
};

const TodoRender = () => {
  const todos = useRecoilValue(filterSelector);

  console.log(todos);
  console.log('render?');

  return (
    <>
      {todos.length === 0 ? (
        <p>No todos available</p>
      ) : (
        todos.map((t, index) => (
          <div key={index}>
            <p>Title: {t.title}</p>
            <p>Description: {t.description}</p>
          </div>
        ))
      )}
    </>
  );
};
