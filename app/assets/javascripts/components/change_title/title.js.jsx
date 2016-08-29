class Title extends React.Component {
  handleChange(e) {
    this.props.changeTitle(e.target.value)
  }
  render() {
    return(
      <div>
        <h1> {this.props.title} </h1>
        <input type="text" onChange={this.handleChange.bind(this)} />
      </div>
    )
  }
}
