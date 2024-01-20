import { React } from 'react'
import './Testimonial.css'

function Testimonial(props) {
    return (
        <div className='Testimonial'>
            <p>{props.review}</p>
            <p>- {props.reviewer}</p>
            {props.stars}
        </div>  
    )
}

export default Testimonial;