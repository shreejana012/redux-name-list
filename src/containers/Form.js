import React, { Component } from 'react';
import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import {updateName} from '../actions';
import {store} from '../stores/store';
import ListItems from './listItems';

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: []
        }
      }
    handleChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleSubmit = (event) => {
      // event.preventDefault();
    //   let a = this.props.name;
    //   a.push(this.state.value);
    //   this.setState({
    //       name: a,
    //   })
      store.dispatch(updateName(this.state.name))
    }

    render(){
      return(
          <div>
              <input type="text" value={this.state.value} onChange={this.handleChange} />
              <button onClick= {() => this.handleSubmit()}>Submit</button>
              <ListItems name={this.props.name}/>
          </div>
      );
    }
}
function mapStateToProps(state) {
    return{
        name: state.name
    }
}
// function matchDispatchToProps(dispatch){
//     return bindActionCreators({handleSubmit}, dispatch);
// }


export default connect(mapStateToProps)(Form);
