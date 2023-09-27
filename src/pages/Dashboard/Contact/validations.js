import { object, string } from 'yup';

const required_message="Bu alan zorunludur";

const contactSchema = object({
    firstName: string().required(required_message),
    lastName: string().required(required_message),
    email: string().email('lütfen geçerli bir mail formatı giriniz').required(required_message),
    message: string().min(5,'en az 5 karakter girişi yapınız').required(required_message),
  });
  
  export default contactSchema;