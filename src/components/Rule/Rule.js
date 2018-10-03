import React from 'react';


const style =  {
    display: 'grid',
    // gridTemplateAreas: `
    //                     'lhs opr rhs'
    //                     `,
    gridTemplateColumn: '1fr 1fr 1fr',
    gridGap: '10px',
    padding: '10px',
    // borderStyle: 'solid',
    // borderWidth: '1px',
    borderBottom: '1px solid lightgrey'
}

const lhsStyle = {  
    // gridArea: 'lhs'
    gridColumn: '1',
    width: '200px',
}

const oprStyle = {
    // gridArea: 'opr',
    gridColumn: '2',
    margin: 'auto',
    width: '100px',
    textAlignLast: 'center',
}

const rhsStyle = {
    // gridArea: 'rhs'
    gridColumn: '3',
}

const opr = [
    '=',
    '!=',
    '>',
    '<',
    '>=',
    '<=',
]

const createSelector = (values, style, selected) => {
    return (
        <select style={style} selected={selected}>
            {values.map((value, _) => {
                return <option key={value} value={value}>{value}</option>
            })}
        </select>
    )
}

const Rule = ({rule}) => {
    return (
        <div style={style}>
            <label style={lhsStyle}>{rule.type}</label>
            {createSelector(opr, oprStyle, rule.opr)}
            <input type="text" 
                style={rhsStyle}
                placeholder="Type Here"
                value={rule.value}/>
        </div>
    )
}

export default Rule;