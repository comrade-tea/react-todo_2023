import {useEffect, useRef, useState} from "react";

const CardHeader = ({todos, setTodos}) => {
    const checkboxSelectAll = useRef(null)


    useEffect(() => {
        const selectedArr = todos.map(el => el.selected);
        // мешанина из true/false ↓
        const isIndeterminate = [...new Set(selectedArr)].length === 2;

        checkboxSelectAll.current.indeterminate = isIndeterminate;

        if (!isIndeterminate)
            checkboxSelectAll.current.checked = todos[0]?.selected;

    }, [todos]);

    const toggleSelectAll = (e) => {
        const checked = e.target.checked;

        setTodos(prev => {
            return prev.map(item => {
                return {...item, selected: checked}
            });
        })
    }

    const deleteSelected = () => {
        setTodos(prev => prev.filter(todo => !todo.selected))
    };
    const removeCompleted = () => {
        setTodos(prev => prev.filter(todo => !todo.completed))
    };

    return (
        <div className="card-header">
            <div className="row align-items-center">
                <div className="col-auto">
                    <label className="d-flex align-items-center">
                        <input
                            className="form-check"
                            type="checkbox"
                            ref={checkboxSelectAll}
                            defaultChecked={false}
                            onChange={toggleSelectAll}/>
                        <span className="ms-2">select all</span>
                    </label>
                </div>

                <div className="col-auto ms-auto">
                    <div className="btn-group btn-group-sm">

                        <button className="btn btn-outline-success" onClick={removeCompleted}>
                            <i className="bi-shield-fill-check me-1"></i>
                            remove completed
                        </button>
                        <button className="btn btn-danger" onClick={deleteSelected}>
                            <i className="bi-trash me-1"></i>
                            delete selected
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardHeader
