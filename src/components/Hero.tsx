import Button from 'react-bootstrap/esm/Button';
// import Spline from '@splinetool/react-spline';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__tittle">control <br/>your home</div>
      <div className="hero__desc">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, quis
        cum sed, consequatur natus quam facilis velit consectetur exercitationem.
      </div>
      <Button className='hero__button'>Download App</Button>
    </section>
  );
}
