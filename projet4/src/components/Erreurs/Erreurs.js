import React from 'react'

const erreur = (props) => {
    return (
        <>
            <div className="container mt-1">
                {props.children}
            </div>
        </>
    )
}

export default erreur