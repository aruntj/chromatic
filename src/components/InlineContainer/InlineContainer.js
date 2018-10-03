import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';


class InlineContainer extends Component  {
    state = {
        editable: false
    }

    outerRect = {
        border: '1px solid lightgray',
        borderRadius: "5px"
    }

    editHandler = () => {
        this.setState({editable : !this.state.editable});
    }

    onDiscardHandler = () => {
        this.setState({editable : false});
    }
    
    render() {
        return (
            <div style={this.outerRect}>
                <Header clickHandler={this.editHandler}/>
                {this.props.children}
                <Footer editable={this.state.editable} onDiscard={this.onDiscardHandler}/>
            </div>
        );
    }
};

export default InlineContainer;