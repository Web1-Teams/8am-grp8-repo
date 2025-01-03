import './StyleFormBooknow.css'


const FormBook = () => {
   
    return (
    <div className="container">
        <form  id='form' action="">
      
            <h1>Book Now</h1>
            <div className="input">
       < label >Phone number</label>
       <br></br>
      
      
       <input  id='phone' type="phonenumber"placeholder="05..." required/>
      <span id='phone_error'></span> 
       </div>
       <div className="input">
       <label>Your adddress</label>
       <br></br>
    
       <input id='adrress'  type="address"placeholder="address of this product to receive"  required/>
       
       </div>
       <div className="input">
       < label>Your details</label>
       <br></br>
      
       <textarea  id='text' placeholder="details do you want to change, date you want to reach your address" required></textarea>
     
       </div>
     
       <button type="submit" className='btn'>add to card</button>

       </form>
    </div>
    );
};

export default FormBook;

