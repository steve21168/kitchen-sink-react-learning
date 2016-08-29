var list = React.createClass({
  getInitialState() {
    return { items: this.props.items }
  },
  render: function() {
    var rows = this.state.items.map((item) => {
      return(
        <tr>
          <td> {item} <button onClick={this.removeItem}>-</button></td>
        </tr>
      )
    })
    return(
      <div>
        <table className="table table-striped">
          <thead className="thead-inverse">
            <tr>
              <th>To-Do</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
        <input ref='item' placeholder='Add item' />
         <button className="btn btn-default" onClick={this.addItem}>+</button>
      </div>
    )
  },
  addItem() {
    newState = this.state.items.concat(this.refs.item.value)
    this.refs.item.value = ""
    this.setState({ items: newState})
  },
  removeItem() {
    newState = this.state.items.slice(0,-1)
    this.setState({ items: newState})
  }
})
