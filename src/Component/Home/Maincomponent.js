
import React from 'react'
import Banner from './Banner'
import Slide from "./slide"

import "./Home.css"
function Maincomponent() {
  return (
    <div className='home_section'>
      <div className='Banner_part'>
         
          <Banner/>
        
      </div>
      <div className="slide_part">
      
           <div className='left_slide'>
             <Slide title="BEST SELLER"/>
           </div>
           <div className='right_slide'>

                        <h4>Festive latest launches</h4>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Jupiter/Launches/T3/DesktopGateway_CategoryCard2x_758X608_T3._SY608_CB639883570_.jpg" alt="rightimg" />
                        <a href="">see more</a>
                    
           </div>
      
     </div>
      
      <Slide title="BEST SELLER"/>
      
      <Slide  title="DEAL SELLER"/>
      
      <Slide title="SELLER"/>
 
      
    </div>
  )
}

export default Maincomponent;
