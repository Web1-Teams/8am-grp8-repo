import Banner from "../Banner/Banner";
import SpecialTitle from "../specialtitle/SpecialTitle";
import foodB from '../assest/images/imageW/Food1.jpg';
import Food1 from '../assest/images/imageW/burger-with-french-fries-ketchup_140725-6061.avif';
import Food2 from '../assest/images/imageW/chi.jpg';
import Food3 from '../assest/images/imageW/salad.jpg';
import Food4 from '../assest/images/imageW/bbq.avif';
import Food5 from '../assest/images/imageW/spa.jpg';
import Food6 from '../assest/images/imageW/ri.jpg';
import Food7 from '../assest/images/imageW/sandw.avif';
import Food8 from '../assest/images/imageW/brost.avif';
import Food9 from '../assest/images/imageW/pizza.avif';
import Food10 from '../assest/images/imageW/orange.jpg';
import Food11 from '../assest/images/imageW/cola k.jpg';
import Food12 from '../assest/images/imageW/fresh-drink.jpg';
import Card from "../Card/Card";
const Food = () => {
  return (
    <div className="mt-40">
      <Banner image={foodB} />
      <div className="container">
        <div className="row">
          <SpecialTitle title={"Food & Drink"} className={"text-center"} />
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4" style={{ marginBottom: "30px", marginTop: "20px", padding: "15px" }}>
            <Card
              img={Food1}
              title="BURGER"
              description="Burger with tomato, lettuce, melted chees and french fries, ketcup."
              price="10"
            />
          </div>
          <div className="col-md-4" style={{ marginBottom: "30px", marginTop: "20px", padding: "15px" }}>
            <Card
              img={Food2}
              title="CHICKEN"
              description="Chicken chicken with potatoes spices sauces garlic lemon tomatoes oil."
              price="15"
            />
          </div>
          <div className="col-md-4" style={{ marginBottom: "30px", marginTop: "20px", padding: "15px" }}>
            <Card
              img={Food3}
              title="VEGETABLE"
              description="Vegetable salad cherry tomatoes, baked pepper, salad mix and onion with grilled haloumi cheese."
              price="7"
            />
          </div>
          <div className="col-md-4" style={{ marginBottom: "30px", marginTop: "20px", padding: "15px" }}>
            <Card
              img={Food4}
              title="BBQ"
              description="Grilled beef shish kebab with vegetables and spices, served with barbecue sauce and ketchup."
              price="12"
            />
          </div>
          <div className="col-md-4" style={{ marginBottom: "30px", marginTop: "20px", padding: "15px" }}>
            <Card
              img={Food5}
              title="CAPRESE SALAD"
              description="Caprese salad with tomato, mozzarella, and basil. A light and flavorful dish perfect for any occasion."
              price="10"
            />
          </div>
          <div className="col-md-4" style={{ marginBottom: "30px", marginTop: "20px", padding: "15px" }}>
            <Card
              img={Food6}
              title="RICE"
              description="Risotto with mussels and spinach. Healthy food. Vegetarian food."
              price="12"
            />
          </div>
          <div className="col-md-4" style={{ marginBottom: "30px", marginTop: "20px", padding: "15px" }}>
            <Card
              img={Food7}
              title="SANDWICH"
              description="Sandwich with chopped meat and side fries. Served with a choice of creamy mayonnaise and tangy ketchup for a flavorful experience."
              price="8"
            />
          </div>
          <div className="col-md-4" style={{ marginBottom: "30px", marginTop: "20px", padding: "15px" }}>
            <Card
              img={Food8}
              title="BROST"
              description="Fried chicken wings served with crispy fries and fresh tomato slices. Includes 4 seasoned wings with dipping sauces for a tasty meal."
              price="9.5"
            />
          </div>
          <div className="col-md-4" style={{ marginBottom: "30px", marginTop: "20px", padding: "15px" }}>
            <Card
              img={Food9}
              title="PIZZA"
              description="Pizza with vegetables and tomatoes, topped with fresh ingredients and a savory sauce. It's perfect for two people to share."
              price="8.5"
            />
          </div>
          <div className="col-md-4" style={{ marginBottom: "30px", marginTop: "20px", padding: "15px" }}>
            <Card
              img={Food10}
              title="ORANGE JUICE"
              description="A refreshing orange juice cocktail with fresh orange slices and mint leaves, served chilled with ice. Perfect for summer moments and celebrations."
              price="5"
            />
          </div>
          <div className="col-md-4" style={{ marginBottom: "30px", marginTop: "20px", padding: "15px" }}>
            <Card
              img={Food11}
              title="COLA"
              description="A refreshing can of cola with a crisp, bubbly taste and a hint of caramel sweetness. Conveniently packaged, it's the perfect companion for any meal or moment of refreshment."
              price="1"
            />
          </div>
          <div className="col-md-4" style={{ marginBottom: "30px", marginTop: "20px", padding: "15px" }}>
            <Card
              img={Food12}
              title="MOJITO"
              description="A refreshing mojito with lemon and mint, served over ice for a cool, invigorating taste. The perfect balance of citrus and mint to refresh."
              price="3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

  
  
  export default Food;
  
