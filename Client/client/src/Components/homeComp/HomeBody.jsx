import React, { useContext, useEffect } from 'react';
import './gradient.css';
import CarouselOpt from './CarouselOpt';
import Body from './Body';
import GoogleMaps from './GoogleMaps';
import CardCarousel from '../CardCarousel';
import apiIndex from '../../apis/apiIndex';
import { HouseContext } from '../../Context/apiContext';
import FeaturedCollections from '../FeaturedCollections';
import Footer from '../Footer';
import Carousel from './Carousel';
import DemoCarousel from './Carousel';



const HomeBody = () => {
  const {property, setProperty} = useContext(HouseContext);
  useEffect(()=> {
    const fetchData =async ()=> {
      const response = await apiIndex.get(`/`);
      setProperty(response.data.propertyData);
      console.log(property);
    }
    fetchData();
  },[])
  
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
    <div>
    <div className=" container-fluid py-4">
        <div className="col spotLight"><h3>In SpotLight</h3>
            <h5>Find your best place to live with us.</h5>
        </div>
    </div>
    
      <CarouselOpt/>
      <Body props1 = "Top Localities" props2 = "Explore the best area to live."/>
      <GoogleMaps/>
      <div className="container-fluid py-4">
        <div className="col greeting"><h3>Top Projects</h3>
            <h5>Best developers in Surat to explore.</h5>
        </div>
    </div>
      <CardCarousel properties={property}/>
      <div className="container-fluid py-4">
        <div className="col greeting"><h3>Featured Collections</h3>
            <h5>Handpicked projects for you.</h5>
        </div>
    </div>
      <FeaturedCollections card={cardData}/>
      <div className="container-fluid py-4">
        <div className="col greeting"><h3>Featured Projects</h3>
            <h5>Exclusive showcase of top projects.</h5>
        </div>
        <CardCarousel properties={property}/>
       
    </div>
    <Footer/>
    <div className="py-4">
    
    </div>
    </div>
  )
}

export default HomeBody;
