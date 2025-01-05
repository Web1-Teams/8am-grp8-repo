import './PhotoNav.css';

const PhotoNav = (props) => {
  return (
    <nav>
      <div className="container">
        <a className="nav-item" href="#decoration">
          
            <img className="navPhoto" src={props.img1} alt="Decoration" />
            <span className="-maxs -fs14 -elli2">Decoration</span>
          
        </a>
        
        <a className="nav-item" href="#Distributions">
          <img className="navPhoto" src={props.img2} alt="Distributions" />
          <span className="-maxs -fs14 -elli2">Distributions</span>
        </a>
        
        <a className="nav-item" href="#Accessories">
          <img className="navPhoto" src={props.img3} alt="Accessories" />
          <span className="-maxs -fs14 -elli2">Accessories</span>
        </a>
      </div>
    </nav>
  );
};

export default PhotoNav;
