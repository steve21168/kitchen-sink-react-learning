class Layout extends React.Component {
  constructor() {
    super()
    this.state = {
      title: "Change Me"
    }
  }
  changeTitle(title) {
    this.setState({title: title})
  }
  render() {
    return(
      <Title title={this.state.title} changeTitle={this.changeTitle.bind(this)} />
    )
  }
}
