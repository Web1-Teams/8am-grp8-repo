import SpecialTitle from "../specialtitle/SpecialTitle";
import Card from "../Card/Card";
import picture1 from "../assest/images/pic1/picture1.jpg";
import picture2 from "../assest/images/pic1/picture2.jpg";
import picture3 from "../assest/images/pic1/picture3.jpg";
import picture4 from "../assest/images/pic1/picture4.jpg";
import picture5 from "../assest/images/pic1/picture5.jpg";
import picture6 from "../assest/images/pic1/picture6.jpg";
import picture7 from "../assest/images/pic1/picture7.jpg";
import picture8 from "../assest/images/pic1/picture8.jpg";
import picture9 from "../assest/images/pic1/picture9.jpg";
import picture10 from "../assest/images/pic1/picture10.jpg";
import picture11 from "../assest/images/pic1/picture11.jpg";
import picture12 from "../assest/images/pic1/picture12.jpg";
import picture13 from "../assest/images/pic1/picture13.jpg";
import picture14 from "../assest/images/pic1/picture14.jpg";
import picture15 from "../assest/images/pic1/picture15.jpg";


const Products = () => {
  return (

    <div className="mt-40">
      
      <div className="container">
        
      <div className="row center-content">
      <SpecialTitle title={"Our products"} className={"text-center"} />
     
      <div className="col-3">
            <Card img={picture1} title="Golden Balloons" description="A group of gold and white balloons with a transparent balloon." price="15" />
          </div>
          <div className="col-3">
            <Card img={picture2} title="Christmas Tree" description="A little heavenly Christmas tree in beautiful pink arrangements." price="130" />
          </div>
          <div className="col-3">
            <Card img={picture3} title="Floral Basket" description="A flower basket made of wood, decorated with beautiful flowers, suitable for gifts." price="36" />
            </div>
            <div className="col-3">
            <Card img={picture4} title="Chocolate Bouquet" description="A unique bouquet of luxurious chocolate and purple flowers." price="24" />
            </div>
            <div className="col-3">
            <Card img={picture5} title="Balloon Bouquet" description="purple balloon arrangement with the flowers for gifts on special occasions." price="25" />
          </div>
          <div className="col-3">
            <Card img={picture6} title="Event distributions" description="A simple gift with the finest luxury chocolate, suitable for special occasions." price="32" />
          </div>
          <div className="col-3">
            <Card img={picture7} title="Birthday hat" description="A golden hat that says Happy Birthday adding a fun touch to celebrations." price="15" />
            </div>
            <div className="col-3">
            <Card img={picture8} title="Memory Board" description="Decorative plaque with photos and lights, perfect for displaying memories." price="64" />
            </div>
            <div className="col-3">
            <Card img={picture9} title="Welcome Sign" description="Welcome floral banner, used to decorate the entrance at events." price="40" />
          </div>
          <div className="col-3">
            <Card img={picture10} title="It's a Boy Sign" description="A colorful sign announcing the arrival of a baby boy, perfect for baby showers. " price="21" />
          </div>
          <div className="col-3">
            <Card img={picture11} title="Birthday Balloons" description="A group of colorful balloons with the words Happy Birthday written on them." price="29" />
            </div>
            <div className="col-3">
            <Card img={picture12} title="Flower Bouquet" description="Beautiful bouquet of flowers including white and pink roses." price="40" />
            </div>
            <div className="col-3">
            <Card img={picture13} title="Floral Number" description="Numbers with a distinctive design. Dial the number that suits you." price="150" />
          </div>
          <div className="col-3">
            <Card img={picture14} title="Sweets stand" description="A multi-layer stand, ideal for displaying sweets and cakes on special occasions." price="95" />
          </div>
          <div className="col-3">
            <Card img={picture15} title="Luxury Candle" description="Modern design candle, featuring a faint flame, can be used as a gift." price="18" />
            </div>
            
            </div>
            </div>

    <div className="mt-4">
     
</div>
    </div>
  );
};
export default Products;
