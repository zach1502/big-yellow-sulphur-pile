import { React } from 'react'
import './Testimonial.css'

function Testimonial(props) {
    const makeStars = () => {
      const stars = Math.round(Number(props.stars));
      const clamped = Math.max(0, Math.min(5, stars));
      return (
        new Array(clamped + 1).join("★") +
        new Array(5 - clamped + 1).join("☆")
      );
    };

    return (
        <div className='Testimonial'>
            <div className='Review'>{props.review}</div>
            <div className='Reviewer'>- {props.reviewer}</div>
            <div className='Star'>{makeStars()}</div>
        </div>  
    );
}

export default Testimonial;
