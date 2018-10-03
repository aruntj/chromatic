import React from 'react';


import Rule from './Rule';

const style = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    borderTop: '1px solid lightgrey',
    borderLeft: '1px solid lightgrey',
    borderRight: '1px solid lightgrey',
}

const RuleList = ({rules}) => {
    return (
        <div style={style}>
            {rules.map((rule, index) => {
                return (
                    <Rule rule={rule} />
                )
            })}
        </div>
    )
}

export default RuleList;