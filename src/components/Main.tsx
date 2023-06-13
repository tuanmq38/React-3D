import './Main.css';
import { Button } from 'react-bootstrap';
import Spline from '@splinetool/react-spline';

export default function Main() {
  return (
    <div className="main__section">
      <div className="main__container">
        <div className="main__left">
          <h1>Home Automation</h1>
          <h2>Control Your House</h2>
          <div className="main__desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam id
            cum exercitationem itaque perfer maxime modi adipisci.
          </div>
          <Button className="main__button">Download App</Button>
        </div>
        <div className="main__right">
          <Spline scene="https://prod.spline.design/PQJcoC6tabsDFRq1/scene.splinecode" />
        </div>
      </div>
    </div>
  );
}
