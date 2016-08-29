var addP = React.createClass({
  getInitialState() {
    return { data: this.props.data}
  },
  render() {
    var data = this.state.data.map((data) => {
      return ( <div> <h3>{data}</h3> </div> )
    })

    return(
      <div>
        {data}
        <input type="text" ref="data" placeholder="Add item"/>
        <button onClick={this.add}> Add </button>
      </div>
    )
  },
  add() {
    var newState = this.state.data.concat(this.refs.data.value)
    this.setState({data: newState})
  }
})
