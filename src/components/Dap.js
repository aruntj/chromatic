import React from 'react';


import Actions from './Actions/Actions';
import RuleList from './Rule/RuleList';
import {rules} from './Rule/Rule.stories';
import InlineContainer from './InlineContainer/InlineContainer';
// import "./Dap.css";

const textAreaStyle = {
    height: '160px'
}

const nameInputStyle = {
    height: '24px'
}

const margin20 = {
    marginTop: "20px",
}

const Dap = ({radioItems}) => {
    return (
        <div className="dap">
            <style>{
                "\
                .dap {\
                    padding: 20px;\
                }\
                .field {\
                    width: 100%;\
                    display: flex;\
                    flex-direction: column;\
                }\
                .field > label {\
                    margin-bottom: 10px;\
                }\
                .field > input {\
                    margin-bottom: 20px\
                }\
                .field > div {\
                    margin-bottom: 20px;\
                }\
                .left-right {\
                    display: grid;\
                    grid-template-areas: \
                    'left right';\
                    grid-gap: 20px;\
                }\
                .left {\
                    grid-area: left;\
                }\
                .right {\
                    grid-area: right;\
                }\
                "
            }
                
            </style>
            <div className="left-right">
                <div className="left">
                    <div className="field">
                        <label>Name</label>
                        <input type='text' style={nameInputStyle}/>
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
            <div style={{marginTop: '30px', marginRight: '10px'}}>
                <div className="field" >
                    <label>AAA Criteria</label>
                    <InlineContainer>
                        <RuleList rules={rules}/>
                    </InlineContainer>
                </div>
            </div>
        </div>
    )
}

export default Dap;