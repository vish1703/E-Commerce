import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
            SavyShop typically display products or services and detailed descriptions,images,prices and available varities like colors and sizes.
        </p>
        
      </div>
    </div>
  )
}

export default DescriptionBox
