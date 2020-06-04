import React, {Component} from "react"
import TopNavLeft from "./TopNavLeft"
import TopNavRight from "./TopNavRight"


class Topnav extends Component {
 
      render() {
        return (
            <div className="container-fluid navbar navbar-collapse">
              <TopNavLeft />
              <TopNavRight />
            </div>
        );
      }
}

  

export default Topnav;