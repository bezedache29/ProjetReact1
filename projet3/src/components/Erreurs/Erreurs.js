import React from 'react'

const erreurs = (props) => {
    return (
        <>
            <div class="alert alert-danger" role="alert">
                {props.children}
            </div>
        </>
    )
}

export default erreurs