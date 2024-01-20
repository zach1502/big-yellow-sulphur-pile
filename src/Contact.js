import { useNavigate} from 'react-router-dom';
import React, { useRef } from "react";
import Logo from './components/Logo';
import emailjs from '@emailjs/browser'

export default function Contact() {
    const navigate = useNavigate();

    const navigateHome = () => {
      // navigate to /
      navigate('/');
    };
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILSERVICE,
        process.env.REACT_APP_EMAILTEMPLATE,
        form.current,
        process.env.REACT_APP_EMAILUSER
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
        
      );
    }
    return (
      <div className="Page">
        <Logo text={"Contact Us"}></Logo>
        <p style={{'fontSize':'xxl', 'width':'50%'}}>One of the most iconic landmarks of the North Shore waterfront is the lurid-yellow piles of sulphur. This 1979 photograph shows a high-angle view of the Vancouver Wharves, with several piles of sulphur visible in the open or under partially-covered areas. The sulphur is a by-product of natural gas processing.</p>
        <button onClick={navigateHome}>Return home</button>
        <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <input name="message" />
      <input type="submit" value="Send" />
    </form>
      </div>
    );
}