import React from 'react';
import "./comp.css";
import { useNavigate } from 'react-router-dom';


const CardCarousel = ({properties =[]}) => {
  const navigate = useNavigate();
  const onClick = (propertyName) => {
    navigate(propertyName);
  }
  const chunkArray = (arr, size) => {
    const repeatArray = [...arr, ...arr, ...arr];
    const result = [];
    for (let i = 0; i<repeatArray.length ; i=i+size) {
      result.push(repeatArray.slice(i, i + size));
    }
    return result;
  }
  const slides = chunkArray(properties , 2);

  return (
    <div className='container py-4'>
    <div id="carCarousel" className="carousel slide carousel-dark " data-bs-ride="carousel">
    <div className="carousel-inner">
      {slides.map((chunk, index) => (
        <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
          <div className="row justify-content-center">
            {chunk.map((item) => (
              <div className="col-md-5 mx-2" key={item.id}>
                <div className="card h-100 card-fixed-size">  {/* Applied class for fixed size */}
                  <div className="card-image-container"> {/* Image container to control dimensions */}
                    <img src={item.image_data} className="card-img-top img-fixed-size" alt={item.name} onClick={()=> onClick("/homeQuest/itemName")}/>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{item.name}
                      <p className='groupName'>{item.group_name}</p>
                    </h5>
                    <h6 className="card-text config">{item.config}</h6>
                    <p className="card-text groupName">{item.address}</p>
                    <p>{item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  </div>
      )

}

export default CardCarousel;
