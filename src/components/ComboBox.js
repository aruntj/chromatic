import React from 'react';

const ComboBox = ({values}) => {
    return (
        <select>
            {values.map((option, _) => {
                return <option 
                value={option.value}
                key={option.value}>{option.name}</option> 
            })}
        </select>
    );
}

export default ComboBox;
