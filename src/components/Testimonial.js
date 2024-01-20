import { React } from 'react'
import './Testimonial.css'

function Testimonial(props) {

    const makeStars = () => {
        return new Array(Number(props.stars) + 1).join("★") + new Array(5 - Number(props.stars) + 1).join("☆");
    }

    return (
        <div className='Testimonial'>
            <div className='Review'>{props.review}</div>
            <div className='Reviewer'>- {props.reviewer}</div>
            <div className='Star'>{makeStars()}</div>
        </div>  
    );
}

export default Testimonial;