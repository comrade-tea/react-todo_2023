import {useContext} from "react";
import {StatesContext} from "@/contexts/StatesContext.jsx";
import TodoItem from "@/components/TodoItem.jsx";

const CardBody = () => {
    const {todos, setTodos} = useContext(StatesContext);

    return (
        <div className="card-body">
            <ul className="list-unstyled">
                {todos.length
                    ?
                    todos.map((todo) => (
                        <li key={todo.id}>
                            <TodoItem todo={todo}/>
                        </li>
                    ))
                    : <em>nothing to do, add something <i className="bi-emoji-wink"></i></em>
                }
            </ul>
        </div>
    )
}
export default CardBody
