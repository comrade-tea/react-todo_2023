import {useEffect, useContext, useState} from "react";
import {StatesContext} from "@/contexts/StatesContext.jsx";

const TodoItem = ({todo, editTodoHandler}) => {
    const {overlayIsVisible, setOverlayIsVisible, toggleProp} = useContext(StatesContext); // ?

    const [editedText, setEditedText] = useState(todo.text);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        if (!overlayIsVisible)
            setOverlayIsVisible(false)
    }, [overlayIsVisible]);


    const saveChanges = (e) => {
        e.preventDefault();

        editTodoHandler(todo.id, editedText)
        exitEditMode();
    };
    
    const enterEditMode = () => {
        setEditMode(true)
        setOverlayIsVisible(true)
    }
    const exitEditMode = () => {
        setEditMode(false)
        setOverlayIsVisible(false)
    }
    
    return (
        <>
            {!editMode ? (
                    <div className="row align-items-baseline">
                        <div
                            className={`d-flex align-items-baseline col ${todo.completed ? "text-success text-decoration-line-through" : ""}`}>
                            <button className="d-flex"
                                    style={{all: "unset", cursor: "pointer"}}
                                    onClick={() => toggleProp(todo.id, "completed")}>
                                <i className="bi-check-circle h5"></i>
                                <div className={`ms-2`}>
                                    {todo.text}
                                </div>
                            </button>

                            <button className="btn ms-auto ps-1" onClick={enterEditMode}>
                                <i className="bi-pencil-square"></i>
                            </button>
                        </div>

                        <div className="col-auto">
                            <input className="form-check-input"
                                   checked={todo.selected}
                                   onChange={() => toggleProp(todo.id, "selected")}
                                   type="checkbox"
                            />
                        </div>
                    </div>
                )
                : (
                    <form
                        onSubmit={(e) => saveChanges(e)}
                        className="position-relative z-2">
                        <div className="row">
                            <div className="col">
                                <input className="form-control"
                                       autoFocus
                                       onChange={(e) => setEditedText(e.target.value)}
                                       value={editedText}
                                       type="text"/>
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
                    </form>
                )
            }

        </>
    );
};

export default TodoItem
