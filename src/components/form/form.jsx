import React from "react";

export const Form = ({ setData, edit, id, close}) => {
    const [inputs, setInputs] = React.useState({ firstName: "", lastName: "" })

    const changeInput = (e) => {
        setInputs((p) => ({ ...p, [e.target.name]: e.target.value }))
    }

    const sumbit = (e) => {
        e.preventDefault()
        if (edit) {
            setData((p) => p.map((item) => item.id == id ? { ...inputs, id } : item))
            close(false)
            return
        }
        setData((p) => [...p, { ...inputs, id: Date.now() }])
        setInputs({ firstName: "", lastName: "" })
    }


    return (
        <>
            <form onSubmit={sumbit}>
                <input onChange={changeInput} value={inputs.firstName} type="text" name="firstName" />
                <br />
                <input onChange={changeInput} value={inputs.lastName} type="text" name="lastName" />
                <br />
                <button type="submit">sent</button>
            </form>
        </>
    );
}