import React from 'react'
import './Conditions.css'
import Carousel from '../assets/Context/Carousel/Carousel';


function Conditions() {

  const items = [
    <div className="item">
      <h1 className='wc-h'>01</h1>
      <div>
      After discussion in DM's we go on a private call I'll provide you with ideas and a structure of a website (If you don't have your own design) and let you know how our mutual work will look like
      </div>
    </div>,

    <div className="item">
      <h1 className='wc-h'>02</h1>
      <div>
      I am available from 10:00 to 21:00 Polish time, So, please contact me during this time
      </div>
    </div>,

    <div className="item">
      <h1 className='wc-h'>03</h1>
      <div>
        I have a right of using your website in my portfolio as my work or mark my authorship on your website
      </div>
    </div>,

    <div className="item">
      <h1 className='wc-h'>04</h1>
      <div>
        While I'm starting to complete my work you must pay 40% of all price,
         remaining part must be payed after the work is done,
          in case you will cancel our partnership , I'll keep 40% 
      </div>
    </div>,

    <div className="item">
      <h1 className='wc-h'>05</h1>
      <div>
        If you want me to make you a website that will be good not only for a computer ,
         but for both mobile and PC, I take 20% of the price
         (Percentage also depends on the price of a website)
      </div>
    </div>,

    <div className="item">
      <h1 className='wc-h'>06</h1>
      <div>
        If you aren't satisfied with my structure of a website and you want to add something,
         additional block of a landing page costs 10$, additional page for multiple-page website costs 15$
      </div>
    </div>,
];

  return (
    <div className="conditions">
      <h1 className='main-wc-h'>Working conditions</h1>
      <Carousel items={items} />
    </div>
  )
}

export default Conditions