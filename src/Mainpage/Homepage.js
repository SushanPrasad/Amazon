import React ,{ Component } from "react";
import Advfour from "./Advfour/Advfour";
import Advone from "./Advone/Advone";
import Advmen from "./Advmen/Advmen";
import Advgirl from "./Advgirl/Advgirl";
import Deal from "./Deal";
import "./mainpage.css";

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className="main">

        <img src="https://ik.imagekit.io/amazonshop/primeddddddddddddd__-M_JEeikTVa.jpg?updatedAt=1642054702711" alt="" className="first_image" />
        <div  className = "all" >
            
            
            <Advone />
            <Advfour />
            <Advgirl />
            <Advmen />
            </div>

           <Deal /> 
            

        </div> );
    }
}
 
export default Homepage;