import React, {useContext, useEffect, useState} from 'react'
import {StatesContext} from "@/contexts/StatesContext.jsx";

import {v4 as uuidv4} from 'uuid';
import Input from "@/form/Input.jsx";

const CardFooter = () => {
    const {todos, setTodos} = useContext(StatesContext);
    const [inputValue, setInputValue] = useState("");
    const [inputIsValid, setInputIsValid] = useState(false);
    const [submitError, setSubmitError] = useState(false);

    useEffect(() => {
        setInputIsValid(inputValue.length > 3)
    }, [inputValue]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!inputIsValid) {
            console.log("----", "invalid>.")
            setSubmitError(true);
            return
        }

        setTodos([...todos, {
            id: uuidv4(),
            text: inputValue,
            completed: false,
            selected: false
        }])

        setInputIsValid(false);
        setSubmitError(false);
        setInputValue("")
    };

    return (
        <div className="card-footer">
            <form className="form" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col">
                        <Input
                            inputValue={inputValue}
                            setInputValue={setInputValue}
                            inputIsValid={inputIsValid}
                            submitError={submitError}
                            invalidFeedback="Your 'todo' should have more than 3 letters?.."
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
