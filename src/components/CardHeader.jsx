import {useEffect, useRef} from "react";

const CardHeader = ({todos, selectAllHandler, deleteByProp}) => {
    const checkboxSelectAll = useRef(null)
    
    useEffect(() => {
        const selectedArr = todos.map(el => el.selected);
        // has true and false in the array ↓
        const isIndeterminate = [...new Set(selectedArr)].length === 2;

        checkboxSelectAll.current.indeterminate = isIndeterminate;

        if (!isIndeterminate)
            checkboxSelectAll.current.checked = todos[0]?.selected;

    }, [todos]);

    return (
        <div className="card-header">
            <div className="row align-items-center justify-content-end">
                <div className="col-auto">
                    <div className="btn-group btn-group-sm">

                        <button className="btn btn-outline-success" 
                                onClick={() => deleteByProp("completed")}
                                disabled={!todos.find(todo => todo.completed)}
                        >
                            <i className="bi-shield-fill-check me-1"></i>
                            remove completed
                        </button>
                        <button className="btn btn-danger"
                                disabled={!todos.find(todo => todo.selected)}
                                onClick={() => deleteByProp("selected")}>
                            delete selected
                            <i className="bi-trash ms-2"></i>
                        </button>
                    </div>
                </div>
                <div className="col-auto">
                    <label className="d-flex">
                        <span className="me-2 user-select-none">select all</span>
                        <input
                            className="form-check-input"
                            type="checkbox"
                            ref={checkboxSelectAll}
                            defaultChecked={false}
                            onChange={(e) => selectAllHandler(e.target.checked)}
                            disabled={!todos.length}/>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default CardHeader
