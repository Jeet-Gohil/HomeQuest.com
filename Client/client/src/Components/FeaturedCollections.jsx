import React from 'react'

const FeaturedCollections = ({card =[]}) => {
  return (
    <div className='row'>
        {/* <div className="card col px-2 card-fixed-size ">
        <div className="card-image-container">
      <img src = {image} class="card-img-top img-fixed-size " 
      alt="..."/>
        <div className='centered'><h5>{description}</h5>
        </div>
      </div>
      </div> */}
      {card.map((item)=> (
        <div className="card col px-2 card-fixed-size ">
        <div className="card-image-container">
      <img src = {item.imgSrc} class="card-img-top img-fixed-size " 
      alt="..."/>
        <div className='centered'><h5>{item.Text}</h5>
        </div>
      </div>
      </div>
      ))}
    </div>
  )
}

export default FeaturedCollections
