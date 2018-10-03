import React, {Component} from 'react';


class Footer extends Component  {
    nonEditable = {
        backgroundColor: "#f2f2f2",
        height: "18px",
        borderTop: "1px solid lightgray"
    }

    editableStyle = {
        backgroundColor: "#f2f2f2",
        height: "30px",
        borderTop: "1px solid lightgray"
    }

    buttonPanelStyle = {
        float: "right",
        marginRight: "10px",
        marginTop: "5px"
    }

    saveButtonStyle = {
        color: "#049fd9", 
        fontSize: "13px",
        marginRight: "10px",
        cursor: "pointer"
    }

    discardButtonStyle = {
        fontSize: "13px",
        cursor: "pointer",
        color: "#6d6e70"
    }


    render() {
        let buttons =  null;
        let style = this.nonEditable;
        if( this.props.editable ) {
            style = this.editableStyle;
            buttons = <div style={this.buttonPanelStyle}>
                        <span style={this.saveButtonStyle} onClick={this.props.onSave}>Save</span>
                        <span style={this.discardButtonStyle} onClick={this.props.onDiscard}>Discard</span>
                      </div>
        }
        return (
               <div style={style}>
                    {buttons}
               </div>
        );
    }
};

export default Footer;