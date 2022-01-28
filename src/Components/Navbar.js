import { Component } from "react";
import  "./Navbar.css";

class Navbar extends Component  {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="Navbar_component">
                    <div className="image_logo"></div>
                    <div className="navbar_locator"></div>                 
                       <div className="navbar_location"> Pondicherry</div>
                    <div className="navbar_dropbox">
                        <select>
                            <option value="All">All</option>
                            <option value="Alexa">Alexa</option>
                            <option value="Amazon Devices">Amazon Devices</option>
                            <option value="Amazon fashion">Amazon fashion</option>
                            <option value="Amazon Fresh">Amazon Fresh</option>
                            <option value="Appliances">Appliances</option>
                            <option value="Apps & Games">Apps & Games</option>
                            <option value="Beauty">Beauty</option>
                            <option value="Books">Books</option>
                            <option value="Car & Motorbike">Car & Motorbike</option>
                            <option value="Clothing & Accessories">Clothing & Accessories</option>
                            <option value="Deals">Deals</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Furnitures">Furnitures</option>
                            <option value="Gift Cards">Gift Cards</option>

                        </select>
                    </div>
                    <div>
                        <input type="text" className="navbar_searchbox" />
                    </div>
                    <div className="navbar_searchicon"></div>



<div className=" navbar_right sign" > <a href="https://www.amazon.in/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2F%3F%26ext_vrnc%3Dhi%26tag%3Dgooghydrabk1-21%26ref%3Dnav_ya_signin%26adgrpid%3D58355126069%26hvpone%3D%26hvptwo%3D%26hvadid%3D486386870127%26hvpos%3D%26hvnetw%3Dg%26hvrand%3D13973745397086763176%26hvqmt%3De%26hvdev%3Dc%26hvdvcmdl%3D%26hvlocint%3D%26hvlocphy%3D1007804%26hvtargid%3Dkwd-10573980%26hydadcr%3D14453_2154373%26gclid%3DCjwKCAiA24SPBhB0EiwAjBgkhhULkfcZRL669tvGafwCQGf87eCVVpNd_pz-LXRwmqTWAF0hKjbJohoChKAQAvD_BwE&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&" target="_blank">           <div style= {{ fontSize:"14px"}}>Hello, Sign in</div> <div style={{ fontWeight:"bold"}}> Account & Lists</div> </a> </div>
<div className=" navbar_right return" >       <div style= {{ fontSize:"14px"}}> Returns </div> <div style={{ fontWeight:"bold"}}> & Orders</div> </div>
 <div className="cart_icon"></div> <div className="carttie" > Cart </div>


</div>
          );
    }
}
 
export default Navbar ; 