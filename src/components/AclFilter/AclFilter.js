import React, {Component} from 'react';
import ToggleButton from 'react-toggle-button'

class AclFilter extends Component  {
    state = {
        applyAcl: false
    }
      
    onToggle = (value) => {
        this.setState({applyAcl: !this.state.applyAcl});
    }
    
    render() {
        return (
            <div>
                <div style={{marginLeft: "10px"}}> 
                    <ToggleButton 
                            containerStyle={{display:'inline-block'}}
                            value = { this.state.applyAcl } 
                            onToggle = {this.onToggle} />                
                    <span style={{marginLeft: "5px"}}> {this.props.text}  </span>
                </div>
                <div style={{margin: "10px"}}>
                    <textarea style={{width: "100%", height: '53px'}} placeholder={this.props.placeholder}/>
                </div>

            </div>
            

        );
    }
}

export default AclFilter;
