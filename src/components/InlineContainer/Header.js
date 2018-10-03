import React, {Component} from 'react';


class Header extends Component  {
     top = {
        backgroundColor: "#f2f2f2",
        height: "18px",
        borderBottom: "1px solid lightgray"
    }

    buttonStyle = {
        cursor: "pointer", 
        color: "gray", 
        float:"right", 
        marginRight: "10px", 
        marginTop: "0px",
        // transform: "rotate(90deg)",
        // fontSize: "12px", 
    }
 
    render() {
        return (
               <div style={this.top}>
                {/* <span style={this.buttonStyle}>&#10148;</span> */}
                <span style={this.buttonStyle} onClick={this.props.clickHandler}>&#9998; &#10008;</span> 
                
               </div>
        );
    }
};

export default Header;