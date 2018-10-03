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
                    <span style={{marginLeft: "5px"}}> Apply nework ACL on traffic  </span>
                </div>
                <div style={{margin: "10px"}}>
                    <textarea style={{width: "100%", height: "100px"}}/>
                </div>

            </div>
            

        );
    }
}

export default AclFilter;