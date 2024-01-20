import { React } from 'react'
import './Logo.css'

function Logo({text}) {
    return (
        <div className='Logo'>
            <h1 className='LogoText'>{text}</h1>
        </div>  
    )
}

export default Logo;