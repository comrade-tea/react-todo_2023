import {Fragment, useState} from 'react'
import './App.sass'
import CardHeader from "@/components/CardHeader.jsx";
import CardBody from "@/components/CardBody.jsx";
import CardFooter from "@/components/CardFooter.jsx";
import {StatesContext} from "@/contexts/StatesContext.jsx";


function App() {
    const [todos, setTodos] = useState([]);

    return (
        <Fragment>
            <StatesContext.Provider value={{todos, setTodos}}>
                <h1 className="h3 mb-5">Vite + React + Bootstrap = todo-list :)</h1>

                <div className="card" style={{maxWidth: "600px"}}>
                    <CardHeader todos={todos} setTodos={setTodos}/>
                    <CardBody/>
                    <CardFooter/>
                </div>
            </StatesContext.Provider>
        </Fragment>
    )
}

export default App
