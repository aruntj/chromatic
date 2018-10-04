import React, { Component } from 'react';

const style = {
    display: "flex",
    justifyContent: "space-evenly", 
    borderBottom: "1px solid #eaeaea",
    padding: "10px",
    color: "gray"
}

const nameStyle = {
    marginLeft: "25px",
    flexBasis: "20%"
}

const operatorStyle = {
    flexBasis: "20%"
}

const valueStyle = {
    flexBasis: "60%"
}

const Summary = (props) => {
    let summary = null;
    if (props.values) {
        summary = props.values.map((option, _) => {
            return <div style={style}>
                <div style={nameStyle}>{option.name}</div>
                <div style={operatorStyle}>=</div>
                <div style={valueStyle}>{option.value}</div>
                {/* {option.name}  =  {option.value} */}
                </div>
            })
    }

    return (
            <div>
                { summary }
            </div>
        );
}

export default Summary;