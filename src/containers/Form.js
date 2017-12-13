import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class Form extends Component {
    handleChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    render(){
        return(
            <div>
                <input type="text" value={this.state.name} onChange={this.handleChange} />
                <button onclick= {this.props.handleSubmit}>Submit</button>
                <p>{ this.props.name }</p>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return{
        name: state.name,
    }
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({handleSubmit}, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(Form);