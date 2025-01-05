import SpecialTitle from "../SpecialTitle";
import Hero from "../Hero/Hero";
import Card from "../Card/Card";
import cake7 from "../../images/cake-7.jpg"
import cake2 from "../../images/cake-2.jpg"
const Home = () => {
  return (
    <div className="mt-0">


      <Hero/>
       

      { <SpecialTitle title={<h1>Trending Now</h1>} className={"text-center"}/> }
      <Card img={cake7} title="cake"/>
      <Card img={cake7} title={"kokies"}/>




    </div>
  )
}

export default Home;
