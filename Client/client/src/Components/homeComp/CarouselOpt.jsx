import React, { useContext, useEffect , Component} from 'react';
import './gradient.css';
import { HouseContext } from '../../Context/apiContext';
import apiIndex from '../../apis/apiIndex';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import DemoCarousel from './Carousel';
import CardCarousel from '../CardCarousel';
import { useNavigate } from 'react-router-dom';


const CarouselOpt = () => {
  const navigate = useNavigate();
  const onClick = (propertyName)=> {
    navigate(propertyName);
  }
   const {property, setProperty}= useContext(HouseContext);
   useEffect(()=> {
    const fetchData = async ()=> {
        try{
            const response = await apiIndex.get(`/`);
            setProperty(response.data.propertyData);
            console.log(property[0].name);
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
