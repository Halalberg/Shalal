import React, {useState} from 'react';
import Link from 'next/link';

const Hero = () => {

    const [isMobile, setIsMobile] =useState(false);    
 

return (


 
      <div className="showcase">
             
      <div className='hero-container'>

            <video autoPlay="autoPlay" loop="loop" muted>
                <source src="/framsidanriktigt.mp4" type="video/mp4" />
            </video>
         
              
          <h1>SHALLOW CRAFTS</h1>
           <p>Kreativitet för dig och ditt hem</p>

           <Link href="/product/Yo50sN">
           <button className='hero-btns'> Shop </button>
           </Link>

         

           </div>
        </div>
   



    )
}

export default Hero;