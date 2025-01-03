import './PhotoNav.css';



const PhotoNav = (props) => {

   return ( 
      <ul class="nav justify-content-center">
      <li class="nav-item">
        <a class="nav-link active"  href="#decoreation">
          <img class="navPhoto"  alt={img1} src={props.img1}/>
          
          
        </a>
        <span>Decorate</span>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#Distributions">
          <img alt={img2} className="navPhoto" src={props.img2}/>
          
          
        </a>
        <span>Distribution</span>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#Accessories">
          <img alt={img3}className="navPhoto" src={props.img3}/>
          
         
        </a>
        <span>Accessories</span>
      </li>
    </ul>
    );
    };
export default PhotoNav;
