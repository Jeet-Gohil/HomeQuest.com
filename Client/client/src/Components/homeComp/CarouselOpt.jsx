import React, { useContext, useEffect , Component} from 'react';
import './gradient.css';
import { HouseContext } from '../../Context/apiContext';
import apiIndex from '../../apis/apiIndex';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import DemoCarousel from './Carousel';
import CardCarousel from '../CardCarousel';


const CarouselOpt = () => {
   const {property, setProperty}= useContext(HouseContext);
   useEffect(()=> {
    const fetchData = async ()=> {
        try{
            const response = await apiIndex.get(`/`);
            setProperty(response.data.propertyData);
            console.log(property);
        }
        catch(err){}
    }
    fetchData();
   }, [1]);
  return (
    <div>
      <CardCarousel properties={property}/>
    </div>
  );
}

export default CarouselOpt;
