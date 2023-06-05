import {useState} from "react";
import {StatesContext} from "@/contexts/StatesContext.jsx";
import CardHeader from "@/components/CardHeader.jsx";
import CardBody from "@/components/CardBody.jsx";
import CardFooter from "@/components/CardFooter.jsx";
import {v4 as uuidv4} from "uuid";


const Card = () => {
    const [todos, setTodos] = useState([]);
    const [cardModeEdit, setCardModeEdit] = useState(false);

    const addTodo = (text) => {
        setTodos([...todos, {
            id: uuidv4(),
            text,
            completed: false,
            selected: false,
        }])
    }
    const editTodoHandler = (id, newText) => {
        setTodos(state => state.map(item => item.id === id ? {...item, text: newText} : item))
    }

    const deleteByProp = (prop) => {
        setTodos(todos.filter(item => {
            return item[prop] !== true;
        }));
    }
    
    return (
        <StatesContext.Provider value={{todos, setTodos, setCardModeEdit}}>
            <div className={`card ${cardModeEdit && "mode-edit"}`} style={{maxWidth: "600px"}}>
                <CardHeader todos={todos} setTodos={setTodos} deleteByProp={deleteByProp}/>
                <CardBody editTodoHandler={editTodoHandler}/>
                <CardFooter addTodo={addTodo}/>
                
                <div className="card__overlay"></div>
            </div>
        </StatesContext.Provider>
    )
}
export default Card
