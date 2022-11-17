import React from "react"

const Summary = () => {

    const data = {
        firstName: "aaa",
        email: "cccccc",
        adress: "ssss",
        total: 10000,
    }
    return (
        <div>
            <p>{data.firstName}</p>
            <p>{data.email}</p>
            <p>{data.adress}</p>
            <button type="button">accept</button>
        </div>
    )
}

export default Summary