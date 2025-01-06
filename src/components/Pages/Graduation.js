import React from 'react';
import Banner from "../Banner/Banner";
import PhotoNav from "../PhotoNav/PhotoNav";
import SpecialTitle from "../specialtitle/SpecialTitle";
import Card2 from '../Card2/Card2';
//IMAGES
import imgtop from "../assest/images/graduation/top.jpg";
import img11 from "../assest/images/graduation/accsesoressnav.jpg";
import GA1 from "../assest/images/graduation/g-acses1.jpg";
import GA2 from "../assest/images/graduation/g-acses2.jpg";
import GA3 from "../assest/images/graduation/g-acess3.JPG";
import GD1 from "../assest/images/graduation/g-decore1.jpg";
import GD2 from "../assest/images/graduation/g-decore2.jpg";
import GD3 from "../assest/images/graduation/g-decore3.jpg";
import GAE1 from "../assest/images/graduation/g-des1.jpg";
import GAE2 from "../assest/images/graduation/g-des2.jpg";
import GAE3 from "../assest/images/graduation/g-des3.jpg";
import img1 from "../assest/images/graduation/desnav.jpg";
import img12 from "../assest/images/graduation/decorenav.jpg";

const Graduation = () => {
  return (
    <div className='mt-5 pt-5'>
      <Banner image={imgtop} />
      <div className="text-center">
        <PhotoNav img1={img12} img2={img1} img3={img11} />
      </div>
      <div className="container">
        <div id="decoration" className="row center-content">
          <SpecialTitle title="Decoration" />
          <div className="col-4">
            <Card2 img={GD1} title="Graduation plate" description="Light decoration with a graduation plate. You can write the name of the graduate along with any other details. It includes elegant touches that make the celebration unique and memorable. Ideal for both indoor and outdoor settings." price="100" />
          </div>
          <div className="col-4">
            <Card2 img={GD2} title="Interior decoration" description="Interior design with colors of roses according to your choice. It offers a soft and warm ambiance perfect for celebrating special occasions. The design can be customized to match the theme of your event, ensuring a harmonious look." price="200" />
          </div>
          <div className="col-4">
            <Card2 img={GD3} title="Interior design for a large place" description="Design for a spacious place with table and place decoration. It provides a luxurious and elegant setting, making it perfect for large gatherings. Additional elements such as lighting and floral arrangements can be added upon request." price="250" />
          </div>
        </div>

        <div className="container">
          <div id="Distributions" className="row center-content">
            <SpecialTitle title="Distributions" />
            <div className="col-4">
              <Card2 img={GAE1} title="Chocolate" description="Chocolate decorated with the graduate's letter on it. It consists of 50 pieces, each of which is made with care and love. Made with the foods you want, it also adds a personal touch to your celebration." price="70" />
            </div>
            <div className="col-4">
              <Card2 img={GAE2} title="Special gift" description="A gift consisting of incense and earrings and consists of 100 pieces. Each item is beautifully packaged with care, and you can modify whatever you want on these distributions to your taste." price="100" />
            </div>
            <div className="col-4">
              <Card2 img={GAE3} title="Candle" description="A candle made in a distinctive way and added to it flowers and the name of the graduate. It consists of 50 pieces, each providing a warm and inviting glow. Perfect for creating a serene atmosphere during the celebration." price="150" />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div id="Accessories" className="row center-content">
          <SpecialTitle title="Accessories" />
          <div className="col-4">
            <Card2 img={GA1} title="Bouquet of flowers" description="A bouquet of flowers can include a phrase of your choice. Each bouquet has been carefully arranged to convey beauty and elegance. It is a perfect and simple gift to appreciate the graduate" price="50" />
          </div>
          <div className="col-4">
            <Card2 img={GA2} title="Scarf and graduation cap" description="Graduation gown with graduation cap and scarf in the color of your choice and design. These items are made of high-quality materials to ensure your elegance." price="70" />
          </div>
          <div className="col-4">
            <Card2 img={GA3} title="The graduation robe with the graduation hat and the scarf" description="Graduation gown with graduation cap and scarf in the color of your choice and design. These items are made of high quality materials." price="200" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Graduation;
