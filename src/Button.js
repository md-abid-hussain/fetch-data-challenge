import React from 'react'

const Button = ({ buttonText, currentData, setCurrentData }) => {
    return (
        <button
            type='button'
            className={buttonText === currentData ? 'selected' : null}
            onClick={() => setCurrentData(buttonText)}
        >{buttonText.toUpperCase()}</button>
    )
}

export default Button