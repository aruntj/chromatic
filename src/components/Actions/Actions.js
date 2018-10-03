import React from "react";


import RadioGroup from '../RadioGroup/RadioGroup';
import '../Dap.css';
import AclFilter from '../AclFilter/AclFilter';

const style = {
    display: "flex",
    flexDirection: "column",
}

const AclFilterStyle = {
    height: "50px",
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