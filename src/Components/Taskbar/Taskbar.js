import React from 'react';
import "./Taskbar.css"

function Taskbar(props) {
    return (
 <div className="footer"> 
 <div className="foot"> 
 <a href="https://www.amazon.in/gp/bestsellers/?ref_=nav_cs_bestsellers" target="_blank" > Best Sellers</a>
 </div>
 <div className="foot"> 
 <a href="https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles" target="_blank"> Mobiles</a>
 </div>
 <div className="foot"> 
 <a href="https://www.amazon.in/gp/goldbox?ref_=nav_cs_gb" target="_blank">Today's Deals</a>
 </div>
 <div className="foot">
  <a href="https://www.amazon.in/gp/help/customer/display.html?nodeId=200507590&ref_=nav_cs_help" target="_blank"> Customer Service</a>
  </div>
 <div className="foot">
    <a href="https://www.amazon.in/electronics/b/?ie=UTF8&node=976419031&ref_=nav_cs_electronics" target="_blank"> Electronics </a>

  </div>
  <div className="foot"> 
 <a href="https://www.amazon.in/gp/browse.html?node=6648217031&ref_=nav_cs_fashion" target="_blank"> Fashion</a>
 </div>

 <div className="foot"> 
 <a href="https://www.amazon.in/gp/new-releases/?ref_=nav_cs_newreleases" target="_blank"> New Release</a>
 </div>

 <div className="foot"> 
 <a href="https://www.amazon.in/Home-Kitchen/b/?ie=UTF8&node=976442031&ref_=nav_cs_home" target="_blank"> Home & Kitchen</a>
 </div>






 </div>
    )
}

export default Taskbar
