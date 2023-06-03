import {useState, useContext} from "react";
import {StatesContext} from "@/contexts/StatesContext.jsx";
import CardHeader from "@/components/CardHeader.jsx";
import CardBody from "@/components/CardBody.jsx";
import CardFooter from "@/components/CardFooter.jsx";


const Card = () => {
    const [todos, setTodos] = useState([]);
    
    const addTodo = (todo) => {
        setTodos([...todos, todo])
    }
    
    return (
        <StatesContext.Provider value={{todos, setTodos}}>
            <div className="card" style={{maxWidth: "600px"}}>
                <CardHeader todos={todos} setTodos={setTodos}/>
                <CardBody/>
                <CardFooter addTodo={addTodo}/>
            </div>
        </StatesContext.Provider>
    )
}
export default Card
