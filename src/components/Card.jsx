import {useState} from "react";
import {StatesContext} from "@/contexts/StatesContext.jsx";
import CardHeader from "@/components/CardHeader.jsx";
import CardBody from "@/components/CardBody.jsx";
import CardFooter from "@/components/CardFooter.jsx";
import {v4 as uuidv4} from "uuid";


const Card = () => {
    const [todos, setTodos] = useState([]);
    const [overlayIsVisible, setOverlayIsVisible] = useState(false);

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
    const toggleProp = (id, propName) => {
        setTodos(todos.map(item => item.id !== id ? item : {...item, [propName]: !item[propName]}))
    };
    const deleteByProp = (prop) => {
        setTodos(todos.filter(item => {
            return item[prop] !== true;
        }));
    }
    const selectAllHandler = (checkedBool) => {
        setTodos((prev) => {
            return prev.map(item => {
                return {...item, selected: checkedBool}
            });
        })
    }
    
    const overlayHandler = () => {
        setOverlayIsVisible(false);
    } 
    
    return (
        <StatesContext.Provider value={{overlayIsVisible, setOverlayIsVisible, toggleProp}}>
            <div className={`card ${overlayIsVisible ? "mode-edit" : ""}`} style={{maxWidth: "600px"}}>
                <CardHeader todos={todos} selectAllHandler={selectAllHandler} deleteByProp={deleteByProp}/>
                <CardBody todos={todos} editTodoHandler={editTodoHandler}/>
                <CardFooter addTodo={addTodo}/>
                
                <div onClick={overlayHandler} className="card__overlay"></div>
            </div>
        </StatesContext.Provider>
    )
}
export default Card
