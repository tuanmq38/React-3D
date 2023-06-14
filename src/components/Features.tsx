import { useState } from 'react';
import './Features.css';
import Spline from '@splinetool/react-spline';
import gify from '../assets/giphy.gif';
import { Image } from 'react-bootstrap';

const features: string[] = [
  'Automation',
  'Security',
  'Alarm System',
  'Energy Controls',
];

export const Features = () => {
  const [list, setList] = useState('Automation');
  return (
    <div className="features__section">
      <div className="features__container">
        <h1>top features</h1>
        <div className="features__left">
          <ul>
            {features.map((item) => (
              <li
                className="features__list"
                key={item}
                onClick={() => setList(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="features__right">
          {list === 'Automation' ? (
            <Spline scene="https://prod.spline.design/ebBwvguYeqhW-Nr5/scene.splinecode" /> 
          ) : list === 'Security' ? (
            <Image src={gify}></Image>
          ) : list === 'Alarm System' ? (
            <Image src={gify}></Image>
          ) : list === 'Energy Controls' ? (
            <Image src={gify}></Image>
          ) : (
            <Spline scene="https://prod.spline.design/ebBwvguYeqhW-Nr5/scene.splinecode" />
          )}
        </div>
      </div>
    </div>
  );
};
