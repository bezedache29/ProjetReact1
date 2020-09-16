import React from 'react'

const Alert = (props) => {
    let monCss = `alert ${props.colorAlert}`
    return (
        <>
            <div className={monCss} role="alert">
                {props.children}
            </div>
        </>
    )
}

export default Alert