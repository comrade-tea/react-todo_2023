import CardItem from "@/components/CardItem.jsx";

const CardBody = ({todos, editTodoHandler}) => {

    return (
        <div className="card-body">
            <ul className="list-unstyled d-flex flex-column gap-2">
                {todos.length
                    ?
                    todos.map((todo) => (
                        <li key={todo.id}>
                            <CardItem todo={todo}/>
                        </li>
                    ))
                    :
                    <em>nothing to do, add something <i className="bi-emoji-wink"></i></em>
                }
            </ul>
        </div>
    )
}
export default CardBody
