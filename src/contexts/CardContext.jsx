import {createContext} from "react";

export const CardContext = createContext({
    overlayIsVisible: false,
    setOverlayIsVisible: () => {},
    editTodoText: () => {},
    toggleProp: () => {},
});
