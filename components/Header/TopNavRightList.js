import React , {Component} from "react"

class TopNavRightList extends Component {

      render() {

        console.log(this.props.TopNavRightData)

        let toprightMarkup = this.props.TopNavRightData.map((link, index) => {
              return (
                  <li className="nav-item" >
                          <a className={"nav-link" + " " + link.id} href={link.link} key={link.id} role="button">     
                            {link.label}
                          </a>
                  </li>
              )
        });

        return (
                <ul className="nav top">
                  {toprightMarkup}
                </ul>
        )

      }
}


export default TopNavRightList