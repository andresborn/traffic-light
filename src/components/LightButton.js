import React from 'react'


const LightButton = props => {
    return (
        <div>
            <button className={props.className} style={props.style} onClick={props.onClick} ></button>
        </div>
    )
}



export default LightButton
