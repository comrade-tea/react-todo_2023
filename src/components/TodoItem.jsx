import {useContext} from "react";
import {StatesContext} from "@/contexts/StatesContext.jsx";

const TodoItem = ({todo}) => {
    const {todos, setTodos} = useContext(StatesContext);

    const toggleCompleted = () => {
        setTodos(todos.map(el => todo.id !== el.id ? el : {...el, completed: !todo.completed}))
    };
    const toggleSelected = () => {
        setTodos(todos.map(el => todo.id !== el.id ? el : {...el, selected: !todo.selected}))
    };

    return (
        <div className="row align-items-center">
            <div className="d-flex col">
                <input className="form-check-input"
                       type="checkbox"
                       checked={todo.selected}
                       onChange={toggleSelected}/>
                <div className={`ms-2 ${todo.completed ? "text-decoration-line-through" : ""}`}>{todo.text}</div>
            </div>

            <div className="col-auto">
                <button className="btn btn-sm text-success" onClick={toggleCompleted}>
                    <i className="bi-check-circle h5"></i>
                </button>
            </div>
        </div>
    );
};

export default TodoItem
