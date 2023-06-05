import Input from "@/components/form/Input.jsx";
import {useState} from "react";

const TodoEdit = ({submitHandler, exitEditMode, value, updateValue}) => {
    const [validations, setValidations] = useState({
        inputError: false,
        submitError: false,
    });
    // add validation yak in footer
    return (
        <form onSubmit={(e) => submitHandler(e)}
              className="position-relative z-2">

            <div className="row">
                <div className="col">
                    <Input inputText={value}
                           setInputText={updateValue}
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
