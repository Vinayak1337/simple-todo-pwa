import { FunctionComponent } from "react";
import './TodoList.css';

const TodoList: FunctionComponent<TodoListProps> = ({ todos, todoDeleteHandler }) => {
    return (
        <ul>
            {
                todos.map(todo => {
                    return (
                    <li key={todo.id}>
                        <span>
                        {todo.text + ' '}
                        </span>
                        <button onClick={() => {
                            todoDeleteHandler(todo.id);
                        }}>
                            DELETE
                        </button>
                    </li>
                    )
                })
            }
        </ul>
    )
}

export default TodoList;