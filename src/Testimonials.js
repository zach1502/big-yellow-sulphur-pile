import {useNavigate} from 'react-router-dom';
import Logo from './components/Logo';
import Testimonial from './components/Testimonial';
export default function Testimonials() {
    const navigate = useNavigate();

    const navigateHome = () => {
      // navigate to /
      navigate('/');
    };
    return (
      <div className="Page">
        <Logo text={"Testimonial"}></Logo>
        <Testimonial review="The finest dried urine anywhere!" reviewer="Eric Buchanan" stars="5"/>
        <button onClick={navigateHome}>Return home</button>
      </div>
    );
}