import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {updateName} from '../actions';
import {store} from '../stores/store';
import ListItems from './listItems';

class Form extends Component {
    handleChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleSubmit = (event) => {
      // event.preventDefault();
      store.dispatch(updateName(this.state.name))
    }

    render(){
      return(
          <div>
              <input type="text" value={this.props.value} onChange={this.handleChange} />
              <button onClick= {() => this.handleSubmit()}>Submit</button>
              <ListItems list={this.props.name} />
          </div>
      );
    }
}
function mapStateToProps(state) {
    return{
        name: state.name,
        items: []
    }
}
// function matchDispatchToProps(dispatch){
//     return bindActionCreators({handleSubmit}, dispatch);
// }


export default connect(mapStateToProps)(Form);
