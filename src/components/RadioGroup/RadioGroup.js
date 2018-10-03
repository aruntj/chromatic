import React, {Component} from 'react';


const style={
    display: 'flex',
    flexDirection: 'row',
}

const itemStyle={
    border: 'solid 1px',
    padding: '5px',
    cursor: 'pointer',
}

const itemStyleSelected={
    ...itemStyle,
    backgroundColor: '#5DADE2',
    fontWeight: '600',
}

class RadioGroup extends Component {

    state = {
        selected: null
    }
    
    componentWillReceiveProps(nextProps){
        if(nextProps.selected!==this.state.selected){
          this.setState({ selected: nextProps.selected});
       }
     }

    selectHandler = (index) => {
        this.setState({selected: index})
    }

    render() {
        const {radioItems} = this.props;

        let radio = radioItems && (
            <div style={style}>
                {
                    radioItems.map((item, index) => {
                        return (
                            <div 
                                style={index === this.state.selected ? itemStyleSelected : itemStyle}
                                onClick={() => this.selectHandler(index)}
                                key={item.value}>{item.name}</div>
                        );
                    })
                }
            </div>
        ) || null
        
        return radio;
    }
}

export default RadioGroup;