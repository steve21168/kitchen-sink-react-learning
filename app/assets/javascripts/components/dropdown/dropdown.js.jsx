const LINKS = { links:
  [
    {key: "google", value: "www.google.com"},
    {key: "apple", value: "www.apple.com"},
    {key: "microsoft", value: "www.microsoft.com"}
  ]
}
const LINK = { links: [{key: "google", value: "www.google.com"}] }

class Dropdown extends React.Component {
  constructor() {
    super()
    this.state = LINK
  }
  render() {
    return(<DropdownList links={this.state.links} allLinks={this.allLinks.bind(this)}
    firstLink={this.firstLink.bind(this)}/>)
  }
  allLinks() {
    this.setState(LINKS)
  }
  firstLink() {
    this.setState(LINK)
  }
}
