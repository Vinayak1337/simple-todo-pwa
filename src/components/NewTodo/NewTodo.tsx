import { FunctionComponent, FormEvent, useRef } from "react";
import './NewTodo.css';

const NewTodo: FunctionComponent<NewTodoProps> = ({ todoAddHandler }) => {

    const textInputRef = useRef<HTMLInputElement>(null);

    const todoSubmitHandler = (event: FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current?.value || '';
        todoAddHandler(enteredText);        
    };

    return(
        <form action="" onSubmit={todoSubmitHandler}>
            <div className="form-control">
                <label htmlFor="todo-next">Todo Next</label>
                <input type="text" id="todo-text" ref={textInputRef}/>
            </div>
            <button type="submit">ADD TOO</button>
        </form>
    )
}

export default NewTodo;