// Engagment.js
import './engagment.css';
import Banner from "../Banner/Banner";
import PhotoNav from "../PhotoNav/PhotoNav";

import imgtop from '../assest/images/engagement.jpg';
import img1 from '../assest/images/destbutionnav.jpg';
import img6 from '../assest/images/decore1.jpg';
import img11 from '../assest/images/accessoresnav.jpg';
import img12 from '../assest/images/DECORENAV.png';
import SpecialTitle from "../specialtitle/SpecialTitle";
import Card from "../Card/Card";
import Footer from '../Footer/Footer';

const Engagment = () => {
  return (
    <>
      <Banner image={imgtop} />
      <PhotoNav img1={img12} img2={img1} img3={img11} />
      <div className="container">
        <div id="decoration" className="row center-content">
          <SpecialTitle title="Decoration" />
          <div className="col-4">
            <Card img={img6} title="Exterior decoration" description="Simple exterior decoration with simple table for a small number of people and you can request any other details upon request." price="150$" />
          </div>
          <div className="col-4">
            <Card img={img6} title="Exterior decoration" description="Simple exterior decoration with simple table for a small number of people and you can request any other details upon request." price="150$" />
          </div>
          <div className="col-4">
            <Card img={img6} title="Exterior decoration" description="Simple exterior decoration with simple table for a small number of people and you can request any other details upon request." price="150$" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Engagment;
