import React , {Component} from "react"
import TopNavRightList from "./TopNavRightList"
import TopNavRightData from "./data/TopNavRightData"

class TopNavRight extends Component {
 
      render() {
        return (
            <div>
              <TopNavRightList TopNavRightData={TopNavRightData}/>
            </div>
        );
      }
}

export default TopNavRight;