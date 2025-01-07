import React from 'react';
import Navbar from '../homeComp/Navbar';
import Body from '../homeComp/Body';
import FeaturedCollections from '../FeaturedCollections';
import Map from '../Map';
import GoogleMaps from '../homeComp/GoogleMaps';
import Footer from '../Footer';
const Rent = () => {
  const cardData = [{
    imgSrc: "https://i.pinimg.com/enabled/564x/a6/ea/3e/a6ea3efbd0d0d53e07f31af80edbdc05.jpg",
    Text: "Township",
  }, 
{
  imgSrc : "https://i.pinimg.com/enabled/564x/7c/79/84/7c7984ef598ac10cb37d981392404669.jpg",
  Text: "Apartments",
}, {
  imgSrc: "https://i.pinimg.com/enabled/564x/85/0c/66/850c66547e1d435d722dde2437516d1d.jpg",
  Text: "Ready to Move-in"
}];
  return (
    <div className='container'>
      <Navbar/>
      <Body props1 = "Featured Collections" props2 = "handpicked projects for you."/>
      <FeaturedCollections card={cardData}/>
      <Body props1= "Top Localities" props2= "explore the best localities in surat"/>
      <GoogleMaps/>
      <div className="pt-4">
      <Footer/>
      </div>

    </div>
  )
}

export default Rent;
