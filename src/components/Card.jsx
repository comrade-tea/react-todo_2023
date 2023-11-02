import {useState} from "react";
import {CardContext} from "@/contexts/CardContext.jsx";
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
    const editTodoText = (id, newText) => {
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
        setTodos(todos.map(item => {
            return {...item, selected: checkedBool}
        }))
    }

    const overlayHandler = () => {
        setOverlayIsVisible(false);
    }

    const onClick = () => {
        // console.log("----", "??")
    };

    return (
        <CardContext.Provider value={{overlayIsVisible, setOverlayIsVisible, editTodoText, toggleProp}}>
            <div className={`card ${overlayIsVisible ? "mode-edit" : ""}`} onClick={onClick} style={{maxWidth: "600px"}}>
                <CardHeader todos={todos} selectAllHandler={selectAllHandler} deleteByProp={deleteByProp}/>
                <CardBody todos={todos}/>
                <CardFooter addTodo={addTodo}/>

                <div onClick={overlayHandler} className="card__overlay"></div>
            </div>
        </CardContext.Provider>
    )
}
export default Card
