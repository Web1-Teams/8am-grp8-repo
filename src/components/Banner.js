import '../styles/Banner.css';

const Banner=(props)=>{
    return(
    <header> 
        <img src={props.image} className="img-fluid" alt="cake"/>
    </header>
    )
}

export default Banner;