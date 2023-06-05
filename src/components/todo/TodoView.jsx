import {useContext} from "react";
import {CardContext} from "@/contexts/CardContext.jsx";

const TodoView = ({todo, enterEditMode}) => {
    const {toggleProp} = useContext(CardContext);
    
    return (
        <div className="row align-items-baseline">
            <div
                className={`d-flex align-items-baseline col ${todo.completed ? "text-success text-decoration-line-through" : ""}`}>
                <button className="d-flex"
                        style={{all: "unset", cursor: "pointer"}}
                        onClick={() => toggleProp(todo.id, "completed")}>
                    <i className="bi-check-circle h5"></i>
                    <div className={`ms-2`}>
                        {todo.text}
                    </div>
                </button>

                <button className="btn ms-auto ps-1" onClick={enterEditMode}>
                    <i className="bi-pencil-square"></i>
                </button>
            </div>

            <div className="col-auto">
                <input className="form-check-input"
                       checked={todo.selected}
                       onChange={() => toggleProp(todo.id, "selected")}
                       type="checkbox"
                />
            </div>
        </div>
    );
}
export default TodoView 
