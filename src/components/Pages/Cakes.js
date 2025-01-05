import Banner from "../Banner/Banner";
import SpecialTitle from "../SpecialTitle";
import cakeB from '../assest/images/imageW/cake.jpg';

const Cakes = () => {
  
  return (
    <div className="mt-40">
      <Banner image={cakeB}/>
      <SpecialTitle title="Cake & Gâteau"/>
      
    </div>
    
  );
};

export default Cakes;
