import SpecialTitle from "../specialtitle/SpecialTitle";
import Hero from "../Hero/Hero";
import Card from "../Card/Card";
import mainlmage from "../assest/images/janaImg/mainImage.jpeg";
import image2 from "../assest/images/janaImg/image2.jpeg";
import image3 from "../assest/images/janaImg/image3.jpeg";
import imeage6 from "../assest/images/janaImg/image6.jpeg";


const Home = () => {
  return (
    <div className="mt-0">
      <Hero/>
      <div className="container">
        <div className="row center-content">
        { <SpecialTitle title={<h1>Trending Now</h1>} className={"text-center"}/> }
          <div className="col-4">
          <Card img={image2} title="Strawberry  Cake" description="A light and refreshing cake made with vanilla sponge layers, filled with fresh strawberry pieces and whipped cream, and topped with more cream and strawberry slices." price="200" />
          </div>
          <div className="col-4">
          <Card img={mainlmage} title="Elegant Outdoor Table" description="A sophisticated table arrangement with white linens, pastel floral centerpieces, and minimalist chairs,offering an elegant yet cozy ambiance under natural light."price="120" />
          </div>
         
            <div className="col-4">
            <Card img={imeage6} title="Golden Birthday Balloon Bouquet" description="Luxury balloon bouquet combines gold and white balloons. Some balloons are filled with gold pieces, the bouquet creates a classy and festive atmosphere, perfect for celebrating birthdays" price="150" />
            </div>
          
           
        </div>
        </div>


        <div className="container">
        <div className="row center-content">
        { <SpecialTitle title={<h1>Special Offers</h1>} className={"text-center"}/> }
          <div className="col-4">
            <Card img={image2} title="Exterior decoration" description="Simple exterior decoration with simple table for a small number of people and you can request any other details upon request." price="400"new="100" />
          </div>
          <div className="col-4">
            <Card img={mainlmage} title="Exterior decoration" description="Simple exterior decoration with simple table for a small number of people and you can request any other details upon request." price="300"new="180" />
          </div>
          <div className="col-4">
            <Card img={image3} title="Exterior decoration" description="Simple exterior decoration with simple table for a small number of people and you can request any other details upon request." price="150"new="90" />
            </div>
            
          
            
           
        </div>
        </div>

    </div>
  )
}

export default Home;
