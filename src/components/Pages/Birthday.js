import React from 'react'
import Banner from "../Banner/Banner";
import "../Banner/Banner.css";
import PhotoNav from"../PhotoNav/PhotoNav"
import "../PhotoNav/PhotoNav.css";
import SpecialTitle from"../specialtitle/SpecialTitle";
import "../specialtitle/specialtitle.css";
import Card2 from "../Card2/Card2";
import "../Card2/Card2.css";
import banner from '../assest/images/img00/hh3.jpg';
import decoration from '../assest/images/img00/decoration.jpg';
import giveaway from '../assest/images/img00/giveaway.jpg';
import clownpic from '../assest/images/img00/clownpic.jpg';
import card11 from '../assest/images/img00/card11.jpg';
import card12 from '../assest/images/img00/card12.jpg';
import card13 from '../assest/images/img00/card13.jpg';
import card21 from '../assest/images/img00/card21.jpg';
import card22 from '../assest/images/img00/card22.jpg';
import card23 from '../assest/images/img00/card23.jpg';
import card31 from '../assest/images/img00/card31.jpg';
import card32 from '../assest/images/img00/card32.jpg';
import card33 from '../assest/images/img00/card33.jpg'

const Birthday = () => {
  return (
<div>
 <Banner image ={banner} />
<PhotoNav img1={decoration} img2={giveaway} img3={clownpic} />
      <div className="container">
      <div id="decoration" className="row center-content">
          <SpecialTitle title="Decoration" />
          <div className="col-4">
          <Card2 img={card11}title="Sea Theme" description="This theme contains a stand of cartoon characters for children in pastel colors." price="150" />
          </div>
          <div className="col-4">
          <Card2 img={card12}title="Simple design" description="This is a simple design that includes white flowers and an arch of turquoise balloons with lights." price="100" />
          </div>
          <div className="col-4">
            <Card2 img={card13}title="Forest Theme" description="This decoration gives the feeling of a fairy forest with a green and pink balloon stand." price="215" />
          </div>
      </div>
        
      <div className="container">
       <div id="Distributions" className="row center-content">
          <SpecialTitle title="Distributions" />
          <div className="col-4">
          <Card2 img={card21}title="Coordinator box" description="A medium-sized box containing a commemorative medallion in addition to chocolate balls in unique packaging. The price below is for one box." price="10" />
          </div>
          <div className="col-4">
          <Card2 img={card22}title="Chocolate box" description="One box contains 7 filled chocolate balls and 6 chocolate squares...with different flavors and pink packaging.the price below is for a one box." price="15" />
          </div>
          <div className="col-4">
          <Card2 img={card23}title="Scrunchies" description="Gifts for girls: elegantly wrapped hair ties in rosegold and white colors. The price below is for one of them." price="3" />
          </div>
        </div>
      </div>

      <div className="container">
        <div id="Accessories" className="row center-content">
          <SpecialTitle title="Clowns" />
          <div className="col-4">
          <Card2 img={card31}title="Tyler" description="She creates a fun atmosphere by designing entertaining group games and drawing on children’s faces. The price below is for an hour of work." price="15" />
          </div>
          <div className="col-4">
          <Card2 img={card32}title="Courtney" description="She plays with the children and gives funny presentations. The price below is for an hour of work." price="20" />
          </div>
          <div className="col-4">
          <Card2 img={card33}title="Christina" description="She creates joy and distributes symbolic gifts to the children. The price below is for an hour of work." price="10" />
          </div>
        </div>
      </div>
</div>
 </div>
 );
};

export default Birthday;