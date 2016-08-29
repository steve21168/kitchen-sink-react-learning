class DropdownList extends React.Component {
  addLinks(){
    this.props.allLinks()
  }
  removeLinks(){
    this.props.firstLink()
  }
  render() {
    var allLinks = this.props.links.map((link) => {
      return(<li key={link.value}> <a href={link.value}>{link.key}</a> </li>)
    })
    return(
      <div onMouseEnter={this.addLinks.bind(this)} onMouseLeave={this.removeLinks.bind(this)}>
        {allLinks}
      </div>
    )
  }
}
