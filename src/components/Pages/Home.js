import SpecialTitle from "../specialtitle/SpecialTitle";
import Hero from "../Hero/Hero";
import Card from "../Card/Card";
import Card2 from "../Card2/Card2"
import img6 from "../assest/images/cake-7.jpg";

const Home = () => {
  return (
    <div className="mt-0">
      <Hero/>
      <div className="container">
        <div className="row center-content">
        { <SpecialTitle title={<h1>Trending Now</h1>} className={"text-center"}/> }
          <div className="col-4">
            <Card img={img6} title="Exterior decoration" description="Simple exterior decoration with simple table for a small number of people and you can request any other details upon request." price="150$" />
          </div>
          <div className="col-4">
            <Card img={img6} title="Exterior decoration" description="Simple exterior decoration with simple table for a small number of people and you can request any other details upon request." price="150$" />
          </div>
          <div className="col-4">
            <Card img={img6} title="Exterior decoration" description="Simple exterior decoration with simple table for a small number of people and you can request any other details upon request." price="150$" />
            </div>
            <div className="col-4">
            <Card2 img={img6} title="Exterior decoration" description="Simple exterior decoration with simple table for a small number of people and you can request any other details upon request." price="150$" />
            </div>

           <div className="col-4">
            <Card2 img={img6} title="Exterior decoration" description="Simple exterior decoration with simple table for a small number of people and you can request any other details upon request." price="150$" />
            </div>
        </div>
        </div>

    </div>
  )
}

export default Home;
