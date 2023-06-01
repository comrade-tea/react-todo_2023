import {useState, useContext, useRef, useEffect} from "react";
import {StatesContext} from "@/contexts/StatesContext.jsx";

const TodoItem = ({id, text, selected, completed }) => {
    const {todos, setTodos} = useContext(StatesContext);
    
    const toggleCompleted = () => {
        setTodos(todos.map(el => id !== el.id ? el : {...el, completed: !completed}))
    };
    const toggleSelected = () => {
        setTodos(todos.map(el => id !== el.id ? el : {...el, selected: !selected}))
    };
    
    return (
        <div className="row align-items-center">
            <div className="d-flex col">
                <input className="form-check-input"
                       type="checkbox"
                       checked={selected}
                       onChange={toggleSelected}/>
                <div className={`ms-2 ${completed ? "text-decoration-line-through" : ""}`}>{text}</div>
            </div>
            <div className="col-auto">
                <button className="btn btn-sm text-success" onClick={toggleCompleted}>
                    <i className="bi-check-circle h5"></i>
                </button>
            </div>
        </div>
    );
};

const CardBody = () => {
    // const [todoList, setTodoList] = useState([{text: "do something."}]);
    const {todos, setTodos} = useContext(StatesContext);

    return (
        <div className="card-body">
            <ul className="list-unstyled">
                {todos.length ? (todos.map((el, index) => (
                    <li key={el.id}>
                        <TodoItem 
                            index={index}
                            id={el.id}
                            text={el.text}
                            selected={el.selected}
                            completed={el.completed}/>
                    </li>
                ))) : (
                    <em>nothing to do, add something <i className="bi-emoji-wink"></i></em>
                )}

            </ul>
        </div>
    )
}
export default CardBody
