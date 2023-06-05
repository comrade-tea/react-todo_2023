const Input = ({todoInput, handleInput, invalidErrorText, validations}) => {
    const css = ["invalid-feedback"]

    if (validations.submitError && validations.inputError)
        css.push("d-block")

    return (
        <>
            <input className="form-control"
                   value={todoInput}
                   onChange={(e) => handleInput(e.target.value)}
                   type="text"/>

            <div className={css.join(" ")}>{invalidErrorText}</div>
        </>
    )
}
export default Input
