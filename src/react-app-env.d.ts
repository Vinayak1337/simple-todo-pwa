/// <reference types="react-scripts" />

interface Todo {
    id: string;
    text: string;
}

  
interface TodoListProps {
    todos: Todo[];
    todoDeleteHandler: (id: string) => void;
}

interface Todo {
    id: string;
    text: string;
}

interface NewTodoProps {
    todoAddHandler: (text: string) => void;
}