import React , {Component} from "react"
import TopNavLeftList from "./TopNavLeftList"
import TopNavLeftData from "./data/TopNavLeftData"

class TopNavLeft extends Component {
 
      render() {
        return (
            <div>
              <TopNavLeftList TopNavLeftData={TopNavLeftData}/>
            </div>
        );
      }
}

export default TopNavLeft;