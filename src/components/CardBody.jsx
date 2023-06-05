import {useContext} from "react";
import {StatesContext} from "@/contexts/StatesContext.jsx";
import TodoItem from "@/components/TodoItem.jsx";

const CardBody = ({editTodoHandler}) => {
    const {todos, setTodos} = useContext(StatesContext);

    return (
        <div className="card-body">
            <ul className="list-unstyled d-flex flex-column gap-2">
                {todos.length
                    ?
                    todos.map((todo) => (
                        <li key={todo.id}>
                            <TodoItem todo={todo} editTodoHandler={editTodoHandler}/>
                        </li>
                    ))
                    : <em>nothing to do, add something <i className="bi-emoji-wink"></i></em>
                }
            </ul>
        </div>
    )
}
export default CardBody
