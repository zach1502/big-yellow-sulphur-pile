import {useNavigate} from 'react-router-dom';

export default function Testimonials() {
    const navigate = useNavigate();

    const navigateHome = () => {
      // navigate to /
      navigate('/');
    };
    return (
      <div className='Page'>
        <button onClick={navigateHome}>Return home</button>
      </div>
    );

}