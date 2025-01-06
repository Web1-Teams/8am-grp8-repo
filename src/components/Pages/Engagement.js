import Banner from "../Banner/Banner";
import PhotoNav from "../PhotoNav/PhotoNav";
import SpecialTitle from "../specialtitle/SpecialTitle";
//images
import imgtop from '../assest/images/engagement.jpg';
import img1 from '../assest/images/destbutionnav.jpg';
import D1 from '../assest/images/decore1.jpg';
import img11 from '../assest/images/accessoresnav.jpg';
import img12 from '../assest/images/DECORENAV.png';
import A2 from "../assest/images/Acessores2.jpg";
import A1 from "../assest/images/Acessores1.jpg";
import A3 from "../assest/images/Acessores3.jpg";
import D2 from "../assest/images/decore2.jpg";
import D3 from "../assest/images/decore3.jpg";
import DE1 from "../assest/images/destbution1.jpg";
import DE2 from "../assest/images/Acessores4.jpg";
import DE3 from "../assest/images/D1.jpg";
import Card2 from "../Card2/Card2";

const Engagement = () => {
  return (
    <div className="mt-40">
      <Banner image={imgtop} />
      <PhotoNav img1={img12} img2={img1} img3={img11} />
      <div className="container">
        <div id="decoration" className="row center-content">
          <SpecialTitle title="Decoration" />
          <div className="col-4">
            <Card2 img={D1} title="Exterior decoration" description="A simple exterior decoration with a small table for a few people. It includes elegant centerpieces and floral arrangements to create a cozy and inviting atmosphere. Ambient lighting is provided through fairy lights and small lanterns." price="150" />
          </div>
          <div className="col-4">
            <Card2 img={D2} title="Interior decoration" description="A soft and warm interior decoration suitable for quiet people. It features a lot of details and a distinctive character, with options to modify the design as desired. Perfect for those seeking a serene environment." price="200" />
          </div>
          <div className="col-4">
            <Card2 img={D3} title="Interior decoration" description="Interior decoration with colorful details. It can be customized to add additional elements on request, making it perfect for various occasions. Create a vibrant and dynamic space with this decoration." price="250" />
          </div>
        </div>

        <div className="container">
          <div id="Distributions" className="row center-content">
            <SpecialTitle title="Distributions" />
            <div className="col-4">
              <Card2 img={DE1} title="Rose decorated boxes" description="Boxes decorated with roses that can hold chocolates or souvenirs. Each box is crafted with precision and elegance. The package includes 100 beautifully adorned boxes." price="70" />
            </div>
            <div className="col-4">
              <Card2 img={DE2} title="Chocolate with special decoration" description="Chocolate wrapped with special decoration that you can customize. Choose the design, type of chocolate, and phrases. Perfect for gifts or special events, includes 100 pieces." price="100" />
            </div>
            <div className="col-4">
              <Card2 img={DE3} title="Box engraved with letters" description="A box engraved with letters and divided into 4 compartments. It contains various types of chocolates and sweets. Ideal for personalized gifts and celebrations." price="150" />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div id="Accessories" className="row center-content">
          <SpecialTitle title="Accessories" />
          <div className="col-4">
            <Card2 img={A1} title="Fingerprint card" description="A fingerprint card made of resin that you can customize. It allows for unique designs and personalized touches. Ideal for commemorative keepsakes." price="70" />
          </div>
          <div className="col-4">
            <Card2 img={A2} title="Ring plate" description="A ring plate with a special design and colors of your choice. It can be customized to match the theme of your event. Perfect for displaying rings beautifully." price="100" />
          </div>
          <div className="col-4">
            <Card2 img={A3} title="Bride's dowry box" description="A bride's dowry box with a distinctive design. Names and details can be added as requested. A unique and personalized gift for the bride on her special day." price="200" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Engagement;
