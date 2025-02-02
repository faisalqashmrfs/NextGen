import React from 'react'
import './NumbersCopmonetnt.css'
function NumbersCopmonetnt({title,number,NumbersCopmonetntStyle}) {
    return (
        <>
        <div className={NumbersCopmonetntStyle}>
            <p>{title}</p>
            <p>{number}</p>
        </div>
        </>
    )
}

export default NumbersCopmonetnt
