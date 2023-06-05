import {useEffect, useContext, useState} from "react";
import {CardContext} from "@/contexts/CardContext.jsx";
import TodoView from "@/components/todo/TodoView.jsx";
import TodoEdit from "@/components/todo/TodoEdit.jsx";

const CardItem = ({todo}) => {
    const {
        overlayIsVisible,
        setOverlayIsVisible,
        editTodoText
    } = useContext(CardContext);

    const [editedText, setEditedText] = useState(todo.text);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        if (!overlayIsVisible)
            setEditMode(false)
    }, [overlayIsVisible]);


    const saveChanges = (e) => {
        e.preventDefault();

        editTodoText(todo.id, editedText)
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
            {!editMode ?
                <TodoView
                    todo={todo}
                    enterEditMode={enterEditMode}/>
                :
                <TodoEdit submitHandler={(e) => saveChanges(e)}
                          value={editedText}
                          updateValue={setEditedText} 
                          exitEditMode={exitEditMode}/>
            }
            
        </>
    );
};

export default CardItem
