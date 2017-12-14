import React from 'react';

class ListItems extends React.Component {

  renderList() {
    let text = this.props.name;
    return text.map((list) => {
    return (
      <li key={list}>
          {list}
      </li>
    );
  });
}
  
  render() {
    if(!this.props.name) {
      return(
        <div>Listing...</div>
    );
  }
    return(
      <ul>
        {this.renderList()}
      </ul>
    );
  }
}

export default ListItems;