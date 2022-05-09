import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import "../Home/Banner.css";





// console.log(data);

class Banner extends Component {

    state={data:[
        "https://rukminim1.flixcart.com/flap/1680/280/image/1defb861e409319b.jpg?q=50",
        " https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50",
        "https://rukminim1.flixcart.com/flap/1680/280/image/8d4150cc4f3f967d.jpg?q=50",
        "https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50"
    ]}  
  
    
    render(){
       
       
       
       
       return(<>

            <Carousel
                
               >
                 
                 { this.state.data.map((imag, i) => {
                  
                       return (<div  key={i}>
                       <img src={imag} alt="img" key={i} className="banner_img" />
                       </div>)}
                  
                  )}
                 
                

            </Carousel>
        </>

       )}
 
}

export default Banner;