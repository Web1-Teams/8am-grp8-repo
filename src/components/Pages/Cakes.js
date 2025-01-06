import Banner from "../Banner/Banner";
import SpecialTitle from "../specialtitle/SpecialTitle";
import cakeB from '../assest/images/imageW/cake.jpg';
import cake1 from '../assest/images/imageW/cake-9.avif';
import cake2 from '../assest/images/imageW/cake11.avif';
import cake3 from '../assest/images/imageW/cake-8.jpg';
import cake4 from '../assest/images/cake-7.jpg';
import cake5 from '../assest/images/imageW/cake-5.avif';
import cake6 from '../assest/images/imageW/a102ff3a1258cacc17118397b6dd2523.jpg';
import cake7 from '../assest/images/imageW/cake-6.jpg';
import cake8 from '../assest/images/imageW/5aa97670b11bf910a7e11315262b716f.jpg';
import cake9 from '../assest/images/imageW/cupcake.avif';
import cake10 from '../assest/images/imageW/cupcake1.avif';
import cake11 from '../assest/images/imageW/cupcake2.avif';
import cake12 from '../assest/images/imageW/cupcake3.avif';
import Card from "../Card/Card";

const Cakes = () => {
  return (
    <div className="mt-40">
      <Banner image={cakeB} />
      <div className="container">
        <div className="row">
          <SpecialTitle title={"Cake & Gâteau"} className={"text-center"} />
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4" style={{ marginBottom: "30px", marginTop: "20px", padding: "15px" }}>
            <Card
              img={cake1}
              title="BERRY MERINGUE CAKE"
              description="A soft vanilla cake topped with colorful meringues, cherries, and a drizzle of berry sauce."
              price="20"
            />
          </div>
          <div className="col-md-4" style={{ marginBottom: "30px", marginTop: "20px", padding: "15px" }}>
            <Card
              img={cake2}
              title="CHOCOLATE FRUIT CAKE"
              description="A rich chocolate cake topped with fresh fruits and chocolate shavings."
              price="16"
            />
          </div>
          <div className="col-md-4" style={{ marginBottom: "30px", marginTop: "20px", padding: "15px" }}>
            <Card
              img={cake3}
              title="SOCCER THEME CAKE"
              description="A vanilla cake with green frosting, decorated with soccer balls and field elements, perfect for sports fans."
              price="24"
            />
          </div>
          <div className="col-md-4" style={{ marginBottom: "30px", marginTop: "20px", padding: "15px" }}>
            <Card
              img={cake4}
              title="STRAWBERRY CAKE"
              description="A colorful layered cake with a chocolate drizzle and fresh strawberries, bringing a burst of flavor and fun."
              price="18"
            />
          </div>
          <div className="col-md-4" style={{ marginBottom: "30px", marginTop: "20px", padding: "15px" }}>
            <Card
              img={cake5}
              title="PISTACHIO CHOCOLATE CAKE"
              description="A rich pistachio-flavored cake topped with chocolate sprinkles and a soft cream layer, ideal for celebrations."
              price="25"
            />
          </div>
          <div className="col-md-4" style={{ marginBottom: "30px", marginTop: "20px", padding: "15px" }}>
            <Card
              img={cake6}
              title="VANILLA SPRINKLE CAKE"
              description="A vanilla cake covered with cream and decorated with colorful sprinkles and a festive topper."
              price="20"
            />
          </div>
          <div className="col-md-4" style={{ marginBottom: "30px", marginTop: "20px", padding: "15px" }}>
            <Card
              img={cake7}
              title="FLORAL ELEGANCE CAKE"
              description="A beautifully designed vanilla cake adorned with edible flowers and delicate feather accents, ideal for weddings or formal gatherings."
              price="50"
            />
          </div>
          <div className="col-md-4" style={{ marginBottom: "30px", marginTop: "20px", padding: "15px" }}>
            <Card
              img={cake8}
              title="Bird Nest Cake"
              description="A stunning cake adorned with elegant bird figurines, featuring rich cocoa and cream flavors, perfect for nature lovers and special occasions."
              price="40"
            />
          </div>
          <div className="col-md-4" style={{ marginBottom: "30px", marginTop: "20px", padding: "15px" }}>
            <Card
              img={cake9}
              title="CHOCOLATE BLISS CAKE"
              description="A rich chocolate cupcake topped with creamy whipped frosting and sprinkled with chocolate shavings, an indulgent dessert for any occasion."
              price="2"
            />
          </div>
          <div className="col-md-4" style={{ marginBottom: "30px", marginTop: "20px", padding: "15px" }}>
            <Card
              img={cake10}
              title="VANILLA SWIRL CAKE"
              description="A soft and fluffy vanilla cupcake topped with a generous swirl of creamy whipped frosting, offering a delicate and sweet flavor."
              price="1"
            />
          </div>
          <div className="col-md-4" style={{ marginBottom: "30px", marginTop: "20px", padding: "15px" }}>
            <Card
              img={cake11}
              title="CHOCOLATE DELIGHT CAKE"
              description="A rich chocolate cupcake with a fluffy whipped topping, a dusting of cocoa powder, and a hint of vanilla, ideal for chocolate lovers."
              price="1.5"
            />
          </div>
          <div className="col-md-4" style={{ marginBottom: "30px", marginTop: "20px", padding: "15px" }}>
            <Card
              img={cake12}
              title="ORANGE BLISS CAKE"
              description="A moist orange-flavored cupcake crowned with a dollop of whipped cream and garnished with a fresh orange berry, combining citrusy zest and sweetness."
              price="1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cakes;