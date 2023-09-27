import React from 'react'
import {useFormik} from 'formik';
import validationSchema from './validations';
import './style.css';

function Contact() {
  const {handleSubmit,
    handleChange,
    handleBlur,
    values,
    isSubmitting,
    errors,
    touched}=useFormik({
    initialValues:{/*başlangıç değerleri */ 
    firstName: '',
    lastName: '',
    email: '',
    message:'',
  },
  onSubmit: async (values,bag) => { /*submitten sonra verileri consola yazdırır */
  await new Promise((r)=>setTimeout(r,1000)); 
  /*console.log(values);
  console.log(bag);*/
if(values.email ==="test@gmail.com"){
  return bag.setErrors({email:"bu mail adresi zaten kullanılıyor",
message:"lütfen geçersiz karakterler kullanmayınız"
});
}
  bag.resetForm();/*işlem bittikten sonra formu resetler */
  },
  validationSchema,
  })
  return (
    <div>
        <h2>İletişim</h2>
       
        <form onSubmit={handleSubmit} className="form">
        
        <div>
        <label htmlFor="firstName">First Name</label>
        <input id="firstName" 
        name="firstName" 
        placeholder="Jane"
        value={values.firstName}
        disabled={isSubmitting}
        onChange={handleChange('firstName')}
        onBlur={handleBlur("firstName")} />

        {
          errors.firstName && touched.firstName &&  (<div className='error'>{errors.firstName}</div>)}
        </div>

        <div>
        <label htmlFor="lastName">Last Name</label>
        <input id="lastName"
         name="lastName"
          placeholder="Doe" 
          value={values.lastName}
          disabled={isSubmitting}
          onChange={handleChange('lastName')} 
          onBlur={handleBlur("lastName")} />
          {
          errors.lastName && touched.lastName && ( <div className='error'>{errors.lastName}</div>)}
        </div>

       <div> 
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email" 
          value={values.email}
          disabled={isSubmitting}
          onChange={handleChange('email')}
          onBlur={handleBlur("email")} />
         
          {
          errors.email && touched.email &&  (<div className='error'>{errors.email}</div>)}
        </div>

       <div>
       <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your message"
          type="message" 
          value={values.message}
          disabled={isSubmitting}
          onChange={handleChange('message')}
          onBlur={handleBlur("message")} />
         
          {
            errors.message && touched.message && (<div className='error'>{errors.message}</div>
         ) }
        
       </div>
        <button className='button' disabled={isSubmitting} type="submit">Submit</button>
      </form>
    
    </div>
  )
}

export default Contact;

/*isSubmitting submit işlemi olduktan sonra bir süre işlem yapılmamasını sağlar */