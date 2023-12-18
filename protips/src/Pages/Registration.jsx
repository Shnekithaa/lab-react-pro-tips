import React, { useState } from 'react';
import './form.css';

const Registration = () => {
    const [field, setField] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
    })

    const [submitted, setSubmitted] = useState(false);
    const [validate, setValidate] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true)
        if(field.firstName && field.lastName && field.email && field.phoneNumber){
            
            setValidate(true)
        }
    }
  return (
    <div className='container'>
      
      <form onSubmit={handleSubmit}>
        <h1>Form</h1>
        {submitted && validate ? <div className='sucess-msg'>Registration Successful</div> : null}
        <input type="text" placeholder='first name' value={field.firstName} onChange={(event) => setField({...field, firstName: event.target.value})} onSubmit={handleSubmit} />
        {submitted && !field.firstName ? (<span>Enter your first name</span>) : null}
        <input type="text" placeholder='last name' value={field.lastName} onChange={(event) => setField({...field, lastName: event.target.value})} onSubmit={handleSubmit} />
        {submitted && !field.lastName ? (<span>Enter your last name</span>) : null}
        <input type="email" placeholder='email' value={field.email} onChange={(event) => setField({...field, email: event.target.value})} onSubmit={handleSubmit} />
        {submitted && !field.email ? (<span>Enter your email</span>) : null}
        <input type="number" placeholder='phone number' value={field.phoneNumber} onChange={(event) => setField({...field, phoneNumber: event.target.value})} onSubmit={handleSubmit} />
        {submitted && !field.phoneNumber ? (<span>Enter your phone number</span>) : null}
        <button type='submit'>Register</button>
      </form>
    </div>
  );
}

export default Registration;
