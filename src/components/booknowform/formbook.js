import { useState } from 'react';
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import './StyleFormBooknow.css';

const FormBook = () => {
    const { register, handleSubmit, formState: { errors }, reset, setValue, clearErrors } = useForm();
    const [phoneError, setPhoneError] = useState('');

    const onSubmit = () => {
        toast.success("Form submitted successfully!");
        reset();
    };

    const handlePhoneChange = (e) => {
        const value = e.target.value;
        const pattern = /^[0-9]*$/;
        if (!pattern.test(value)) {
            setPhoneError("Phone number must contain only digits");
        } else {
            setPhoneError('');
            setValue('phone', value);
            clearErrors('phone');
        }
    };

    return (
        <>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
               Book Now
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Your Details:</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <div className="container">
             <form id="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="input">
                 <label htmlFor="phone">Phone number</label>
                  <br />
                 <input name="phone" id="phone" type="text" placeholder="05..." {...register("phone", {required: "Phone number is required",minLength: { value: 10, message: "Phone number must be exactly 10 digits"},
                 maxLength: { value: 10,message: "Phone number must be exactly 10 digits" }})}onChange={handlePhoneChange}/>
                 {phoneError && <p className="text-red-500">{phoneError}</p>}
                 {errors.phone && !phoneError && <p className="text-red-500">{errors.phone.message}</p>}
                </div>
                <div className="input">
                 <label htmlFor="address">Your address</label>
                 <br />
                <input name="address" id="address" type="text" placeholder="Address of this product to receive"{...register("address", { required: "Address is required",pattern: {value: /^[a-zA-Z0-9\u0621-\u064A\s,.-]*$/, message: "Address cannot contain symbols"}})}/>
                {errors.address && <p className="text-red-500">{errors.address.message}</p>}
                </div>
                <div className="input">
                 <label htmlFor="details">Your details</label>
                  <br />
                   <textarea name="details"id="details"placeholder="Details you want to change, date you want to receive your address" {...register("details", {required: "Details are required",pattern: { value: /^[a-zA-Z0-9\u0621-\u064A\s,.-]*$/,message: "Details cannot contain symbols"}})} ></textarea>
                 {errors.details && <p className="text-red-500">{errors.details.message}</p>}
                </div>
               <div className="modal-footer">
                 <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    { <button type="submit" className="btn btn-primary">Add to Cart</button> }
                    {/* {<AddToCart   item={props.item}  */}
                            
                          
                    {/* /> } */}


                 </div>
            </form>
            </div>
            </div>
            </div>
            </div>
            </div>
        </>
    );
};

export default FormBook;
