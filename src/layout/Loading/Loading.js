import { useEffect } from 'react';
import gsap from 'gsap';

import circle from '../../assets/images/circle.svg';
import logo from '../../assets/images/logo.png';

import './Loading.scss';

const Loading = (props) => {

  useEffect(() => {
    gsap.to('.circle', {
      duration: 1.5,
      rotation: 160,
      transformOrigin:"51.5% 50%",
      onComplete: () => {
        props.setLoading(false)
      }
    });
    
  }, []);

  return (
    <div className="loading">
      <img src={circle} className="circle" alt='circle' />
      <img src={logo} className="icon" alt='icon'/>
    </div>
  );
}

export default Loading;
