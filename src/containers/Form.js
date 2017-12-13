import React, { Component } from 'react';
import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import {store} from '../stores/store';
import {updateName} from '../actions';

class Form extends Component {
    render(){
        return(
            <div>
                <input type="text" onChange={this.handleChange} />
                <button onClick= {() => this.handleSubmit()}>Submit</button>
                <p>{ this.props.name }</p>
            </div>
        )
    }
    handleChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleSubmit = (event) => {
        store.dispatch(updateName(this.state.name))
    }
}
function mapStateToProps(state) {
    return{
        name: state.name,
    }
}
// function matchDispatchToProps(dispatch){
//     return bindActionCreators({handleSubmit}, dispatch);
// }


export default connect(mapStateToProps)(Form);