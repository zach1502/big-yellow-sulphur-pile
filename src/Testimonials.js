import {Routes, Route, useNavigate} from 'react-router-dom';

export default function Testimonials() {
    const navigate = useNavigate();

    const navigateHome = () => {
      // navigate to /
      navigate('/');
    };
    return <h2> <button onClick={navigateHome}>Return home</button></h2>;

}