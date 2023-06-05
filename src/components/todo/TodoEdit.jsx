import Input from "@/components/form/Input.jsx";
import {useContext, useEffect, useState} from "react";
import {CardContext} from "@/contexts/CardContext.jsx";

const TodoEdit = ({todo, exitEditMode}) => {
    const {editTodoText} = useContext(CardContext);
    
    const [editedText, setEditedText] = useState(todo.text);
    const [validations, setValidations] = useState({
        inputError: false,
        submitError: false,
    });

    useEffect(() => {
        setValidations(prev => {
            return {...prev, inputError: editedText.length <= 2}
        })
    }, [editedText]);

    const saveChanges = (e) => {
        e.preventDefault();

        if (validations.inputError) {
            setValidations(prev => {
                return {...prev, submitError: editedText.length <= 2}
            })
            return;
        }

        editTodoText(todo.id, editedText)
        exitEditMode();
    };
    
    return (
        <form onSubmit={(e) => saveChanges(e)}
              className="position-relative z-2">

            <div className="row">
                <div className="col">
                    <Input inputText={editedText}
                           setInputText={setEditedText}
                           validations={validations}
                           autoFocus/>
                </div>

                <div className="col-auto">
                    <div className="btn-group">
                        <button
                            className="btn btn-success"
                            type="submit">
                            <i className="bi-check"></i>
                        </button>

                        <button className="btn btn-light"
                                onClick={exitEditMode}
                                title="exit from editor mode" type="button">
                            <i className="bi-arrow-clockwise"></i>
                        </button>
                    </div>
                </div>
            </div>
        </form>);
}

export default TodoEdit
