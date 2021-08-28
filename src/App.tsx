import { FunctionComponent, useState } from "react";
import NewTodo from "./components/NewTodo/NewTodo";
import TodoList from "./components/TodoList/TodoLits";

const App: FunctionComponent = () => {

  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos(prevTodos => [...prevTodos, {id: Math.random().toString(), text}])
  };

  const todoDeleteHandler = (id: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => !(todo.id === id));
    })
  }

  return (
    <div className="App">
      <NewTodo todoAddHandler={todoAddHandler}/>
      <TodoList todos={todos} todoDeleteHandler={todoDeleteHandler}/>
    </div>
  );
}

export default App;
