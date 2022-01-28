import React ,{ Component } from "react";
import Advfour from "./Advfour/Advfour";
import Advone from "./Advone/Advone";
import Advmen from "./Advmen/Advmen";
import Advgirl from "./Advgirl/Advgirl";
import "./mainpage.css";

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className="main">
        <div style = {{ paddingTop: "396px" , display : "flex"}}>
            <Advone />
            <Advfour />
            <Advgirl />
            <Advmen />
            </div>

            

        </div> );
    }
}
 
export default Homepage;