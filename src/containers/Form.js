import React, { Component } from 'react';
import {connect} from 'react-redux';
import bindActionCreators from 'react-redux';

class Form extends Component {
    render(){
        return(
            <div>
                <input type="text" value={this.props.name} />
                <button onClick= {this.props.onSubmit()}>Submit</button>
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
    return bindActionCreators({onSubmit}, dispatch);
}


export default connect(mapStateToProps, mapStateToProps)(Form);