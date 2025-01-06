import SpecialTitle from "../specialtitle/SpecialTitle";
import Hero from "../Hero/Hero";
import Card from "../Card/Card";
import mainlmage from "../assest/images/janaImg/mainImage.jpeg";
import image2 from "../assest/images/janaImg/image2.jpeg";
import picture7 from "../assest/images/pic1/picture7.jpg";
import imeage6 from "../assest/images/janaImg/image6.jpeg";
import Card2 from "../Card2/Card2";
import card21 from '../assest/images/img00/card21.jpg';
import picture8 from "../assest/images/pic1/picture8.jpg";
import A2 from "../assest/images/Acessores2.jpg";
import card11 from '../assest/images/img00/card11.jpg';
import picture9 from "../assest/images/pic1/picture9.jpg";
const Home = () => {
  return (
    <div className="mt-0">
      <Hero/>
      <div className="container">
        <div className="row center-content">
        { <SpecialTitle title={<h1>Trending Now</h1>} className={"text-center"}/> }
          <div className="col-4">
          <Card img={image2} title="Strawberry " description="A light and refreshing cake made with vanilla sponge layers, filled with fresh strawberry pieces and whipped cream, and topped with more cream ." price="200" />
          </div>
          <div className="col-4">
          <Card img={mainlmage} title="Elegant Outdoor Table" description="A sophisticated table arrangement with white linens, pastel floral centerpieces, and minimalist chairs,offering an elegant yet cozy ambiance under natural light."price="120" />
          </div>
         
            <div className="col-4">
            <Card img={imeage6} title="Golden Birthday Balloon" description="Luxury balloon bouquet combines gold and white balloons. Some balloons are filled with gold pieces, the bouquet creates a classy and festive atmosphere" price="150" />
            </div>
          
           
        </div>
        </div>


        <div className="container">
        <div className="row center-content">
        { <SpecialTitle title={<h1>Special Offers</h1>} className={"text-center"}/> }
       
        <div className="col-4">
            <Card img={picture7} title="Birthday hat" description="A golden hat that says Happy Birthday adding a fun touch to celebrations." price="15" new="10"/>
            </div>
            <div className="col-4">
            <Card img={picture8} title="Memory Board" description="Decorative plaque with photos and lights, perfect for displaying memories." price="64" new="30" />
            </div>
            <div className="col-4">
            <Card img={picture9} title="Welcome Sign" description=" A floral-decorated sign that says Welcome , used to adorn the entrance ." price="40" new="25" />
          </div>
           
        </div>
        </div>

    </div>
  )
}

export default Home;
