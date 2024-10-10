import *as React from 'react';
import "./card.css"
 const Card = ({
    imgSrc,
    imgAlt,
    title,
    description,
    buttonText,
    link,
// the below code code is passed in as a prop.. 
// enclosing the imgSrc and imgAlt in curly braces allows me to render it how i want without it messing up the card as a whole. 
 }) => {
    return(
        <div className="card-container">
           {imgSrc && imgAlt && 
           <img src={imgSrc} alt={imgAlt} className="card-image"/>}
          <h1 className="card-title">{title}</h1>
          <p className='card-description'>{description}</p>
        <a href={link} className='card-btn'>{buttonText}</a>
        </div>
        
    )
    
}
export default Card