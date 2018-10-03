import React from 'react';


const style={
    display: 'flex',
    flexDirection: 'row',
}

const itemStyle={
    border: 'solid 1px',
    padding: '10px',
    backgroundColor: "#85C1E9",
    ':hover': {
        backgroundColor: '#2E86C1'
    }
}




const Radio = ({options}) => {
    let radio = options && (
        <div style={style}>
            {
                options.map((option, index) => {
                    return (
                        <div style={itemStyle}>{option.name}</div>
                    );
                })
            }
        </div>
    )
    
    return radio;
}

export default Radio;