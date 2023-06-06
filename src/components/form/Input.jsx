import {useEffect} from "react";

const Input = ({inputText, setInputText, validations, invalidErrorText, autoFocus, placeholder}) => {
    const inputClasses = ["form-control"]
    
    if (Object.values(validations).every(hasError => hasError === true))
        inputClasses.push("is-invalid")
    
    return (
        <>
            <input className={inputClasses.join(" ")}
                   value={inputText}
                   onChange={(e) => setInputText(e.target.value)}
                   autoFocus={!!autoFocus}
                   type="text"
                   placeholder={placeholder}
            />

            {invalidErrorText && <div className={"invalid-feedback"}>{invalidErrorText}</div>}
        </>
    )
}
export default Input
