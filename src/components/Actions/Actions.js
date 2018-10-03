import React from "react";


import RadioGroup from '../RadioGroup/RadioGroup';
import '../Dap.css';

const style = {
    display: "flex",
    flexDirection: "column",
}

const textAreaStyle = {
    width: '100%',
    height: '70px',
    marginTop: '20px',
}

const userMessagePlaceholder = "This message will be displayed to VPN user upon a successfull critera match"

const Actions = ({radioItems}) => {
    return (
        <div>
            <div className="field">
                <label >Action</label>
                <RadioGroup radioItems={radioItems}/>
            </div>
            <div style={style}>
                <textarea style={textAreaStyle} placeholder={userMessagePlaceholder}/>
                <textarea style={textAreaStyle}/>
            </div>
        </div>
    )
}

export default Actions;