import React from 'react'

const Resturants = ({res}) => {
 
  return (
    <div className="card">
    <img width="254" height="160px" src={res.image} />
    <div className="restaurant-details">
        <div className="restaurant-title">{res.name}</div>
        <div className="restaurant-subtitle">{res.category.join(' ' , ' ')} </div>
    </div>
    <div className="restaurant-info">
        <div className="restaurant-ratings">
            <i className="material-icons star-icon">star</i> {res.rating}
        </div>
         .<div className="restaurant-delivery-timings"> {res.deliveryTimings} MINS</div> .
        <div className="restaurant-cost-for-two">₹{res.costFortwo} FOR TWO</div>
    </div>
    <div className="offer-banner">
        <span className="material-icons"> local_offer </span>
        <span className="offer-text">{res.offers.join( '  |  ' )}</span>
    </div>
</div>
  )
}

export default Resturants