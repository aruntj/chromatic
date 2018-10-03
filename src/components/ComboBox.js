import React from 'react';

const style = {
    width: "500px"
}

const ComboBox = ({values}) => {2
    return (
        <select style={style}>
            {values.map((option, _) => {
                return <option 
                value={option.value}
                key={option.value}>{option.name}</option> 
            })}
        </select>
    );
}

export default ComboBox;
