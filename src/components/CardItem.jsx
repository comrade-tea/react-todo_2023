import {useEffect, useContext, useState} from "react";
import {CardContext} from "@/contexts/CardContext.jsx";
import TodoView from "@/components/todo/TodoView.jsx";
import TodoEdit from "@/components/todo/TodoEdit.jsx";

const CardItem = ({todo}) => {
    const {overlayIsVisible, setOverlayIsVisible,} = useContext(CardContext);

    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        if (!overlayIsVisible)
            setEditMode(false)
    }, [overlayIsVisible]);

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
                <TodoEdit
                    todo={todo}        
                    exitEditMode={exitEditMode}/>
            }

        </>
    );
};

export default CardItem
