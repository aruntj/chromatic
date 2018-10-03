import React from "react";


import RadioGroup from '../RadioGroup/RadioGroup';
// import '../Dap.css';
import AclFilter from '../AclFilter/AclFilter';

const style = {
    display: "flex",
    flexDirection: "column",
}

const AclFilterStyle = {
    height: "200px",
}

const FieldStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
}

const userMessagePlaceholder = "This message will be displayed to VPN user upon a successfull critera match"

const Actions = ({radioItems}) => {
    return (
        <div>
            <div className="field">
                <style>{
                    "\
                    .field {\
                        width: 100%;\
                        display: flex;\
                        flex-direction: column;\
                        margin-left: 10px;\
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
                    "
                }
                </style>
                <label >Action</label>
                <RadioGroup radioItems={radioItems}/>
            </div>
            <div style={style}>
                <AclFilter 
                    text="Display User Message on Criteria Match"
                    placeholder={userMessagePlaceholder}
                    style={AclFilterStyle}/>
                <AclFilter 
                    text="Apply nework ACL on traffic"
                    style={AclFilterStyle}/>    
            </div>
        </div>
    )
}

export default Actions;