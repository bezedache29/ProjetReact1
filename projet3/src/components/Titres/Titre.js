import React from 'react'

const Titre = (props) => {
    let monCss = `text-white text-center bg-primary p-2 mt-2 border border-dark rounded`
    return (
        <>
            <h1 className={monCss}>{props.children}</h1>
        </>
    )
}

export default Titre