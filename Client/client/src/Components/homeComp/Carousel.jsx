import React , {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {
        const {imgSrc} = this.props;
        return (
            <div className='carousel-container'>
            <Carousel className='main-slide'>
                <div className='carousel-image-container'>
                    <img src= {imgSrc} className= "carousel-image"/>
                </div>
                <div>
                    <img src="assets/2.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
            </div>
        );
    }
};

export default DemoCarousel;
