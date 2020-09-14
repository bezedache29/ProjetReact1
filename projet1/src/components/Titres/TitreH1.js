import React from 'react'

const titreH1 = (props) => {
    return (
        <>
            <h1 className = "border border-dark p2 mt-2 text-white text-center bg-primary rounded">{props.children}</h1>
        </>
    )
}

export default titreH1