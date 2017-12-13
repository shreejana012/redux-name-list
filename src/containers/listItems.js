import React from 'react';

class ListItems extends React.Component {

  // let items = this.props.list.map((item) =>
  // <li>{item}</li>
  // )
  render() {
    if(!this.props.list) {
      return(
        <div>Listing...</div>
    )}

    let text = this.props.list;
    let items = text.map((item) => {
      <li>{item}</li>
    })
    return(
      <ul>
        {items}
      </ul>
    )
  }
}
export default ListItems;
