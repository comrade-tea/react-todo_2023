const Input = ({inputValue, setInputValue, inputIsValid, invalidFeedback, submitError }) => {

    return (
        <>
            <input className={`form-control`}
                   name="TodoText"
                   value={inputValue}
                   onChange={e => setInputValue(e.target.value)}
                   type="text"/>
            
            <div className={`invalid-feedback ${submitError && !inputIsValid ? "d-block" : ""}`}>
                {invalidFeedback}
            </div>
        </>
    )
}
export default Input
