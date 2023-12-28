import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
// const {
//         register,
//         handleSubmit,
//         watch,
//         reset,
//         formState: { errors },
//     } = useForm()

const Form = () => {
    const {register,handleSubmit,watch,reset,formState:{errors,isSubmitSuccessful,isSubmitted}} = useForm()
    // console.log(watch("firstname"));
    // console.log({...register()})

    console.log("errors:",errors);

    const FormSubmitHandler = (data) =>{
        console.log("data:",data);
    }

    return (
    <div className='container'>

        <fieldset>
            <legend>Fill this form</legend>
            <form onSubmit={handleSubmit(FormSubmitHandler)}>
          {isSubmitSuccessful && <div className='success'>
                <p>Registration Successfull</p>

            </div>}
            <label>First Name:</label>
            <input type="text" name="firstname" {...register("firstname",{required : "Fill first name",minLength:{
                value:4,
                message:"minimum 4 characters required"
            },maxLength:{
                value:8,
                message:"maximum 8 characters required"
            }})}/>
            {/* {errors.firstName && <p className='err'>{errors.firstName.message}</p>} */}
            <p className='err'>{errors.firstname ?.message}</p>

            <label>Last Name:</label>
            <input type="text" name="lastname" {...register("lastname",{required : "Fill last name",minLength:{
                value:4,
                message:"minimum 4 characters required"
            },maxLength:{
                value:8,
                message:"maximum 8 characters required"
            }})}/>
            <p className='err'>{errors.lastname ?.message}</p>

            <label>Email:</label>
            <input type="text" name='email' {...register("email",{required : "Fill email",minLength:{
                value:4,
                message:"minimum 4 characters required"
            },pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message:"Email not valid"}})}/>
            <p className='err'>{errors.email ?.message}</p>

            <label>Password:</label>
            <input type="text" name='password' {...register("password",{required : "Fill password",minLength:{
                value:4,
                message:"minimum 4 characters required"
            },maxLength:{
                value:8,
                message:"maximum 8 characters required"
            },pattern:{value:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-_=+{};:,<.>])(?=.*[a-zA-Z]).{8,}$/,
            message:"password not valid"}})}/>
            <p className='err'>{errors.password ?.message}</p>


            <input type='submit' value={"Register"} />
            <button className="reset"  onClick={()=>{reset()}}>reset</button>
        

            </form>
        </fieldset>


    </div>
  )
}

export default Form