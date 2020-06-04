import React , {Component} from "react"

class TopNavLeftList extends Component {

      render() {

        console.log(this.props.TopNavLeftData)

        let topleftMarkup = this.props.TopNavLeftData.map((link, index) => {
              return (
                  <li className="nav-item" >
                          <a className={"nav-link" + " " + link.id} href={link.link} key={link.id} role="button" >     
                            {link.label}
                          </a>
                  </li>
              )
        });

        return (
                <ul className="nav top mr-auto">
                  {topleftMarkup}
                </ul>
        )

      }
}


export default TopNavLeftList