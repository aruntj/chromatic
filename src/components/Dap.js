import React from 'react';


import Actions from './Actions/Actions';
import "./Dap.css";

const textAreaStyle = {
    height: '160px'
}

const Dap = ({radioItems}) => {
    return (
        <div className="dap">
            <div className="left-right">
                <div className="left">
                    <div className="field">
                        <label>Name</label>
                        <input type='text'/>
                    </div>
                    <div className="field">
                        <label>Policy Description</label>
                        <textarea style={textAreaStyle}/>
                    </div>
                </div>
                <div className="right">
                    <Actions radioItems={radioItems}/>
                </div>
            </div>
        </div>
    )
}

export default Dap;