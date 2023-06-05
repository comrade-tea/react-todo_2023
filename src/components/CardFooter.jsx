import {useEffect, useState} from 'react'
import Input from "@/components/form/Input.jsx";
 
const CardFooter = ({addTodo}) => {
    const [todoInput, setTodoInput] = useState("");
    const [validations, setValidations] = useState({
        inputError: false,
        submitError: false,
    });

    useEffect(() => {
        setValidations(prev => {
            return {...prev, inputError: todoInput.length <= 2}
        })
    }, [todoInput]);
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (validations.inputError) {
            setValidations(prev => {
                return {...prev, submitError: true}
            })
            return
        }

        addTodo(todoInput)

        setTodoInput("")
        setValidations({inputError: false, submitError: false});
    };
    const handleInput = (text) => {
        setTodoInput(text);
    }
    
    return (
        <div className="card-footer">
            <form className="form" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col">
                        <Input
                            inputText={todoInput}
                            setInputText={handleInput}
                            validations={validations}
                            invalidErrorText="Your 'todo' should have more than 2 letters?.."
                        />
                    </div>

                    <div className="col-auto">
                        <button className="btn btn-primary" type="submit">add</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default CardFooter
