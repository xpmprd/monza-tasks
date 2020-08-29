import { useState, useEffect } from 'react';

import { useLogin } from 'services/auth/login/hook';
import { useRegister } from 'services/auth/register/hook';
import { useRecover } from 'services/auth/recoverPass/hook';

export const useForm = (callback, validate) => {

const { recover } = useRecover();
const { register } = useRegister();
const { login } = useLogin();
const [values, setValues] = useState({
  email: '',
  password: '',
});
const [errors, setErrors] = useState({});
const [isSubmitting, setIsSubmitting] = useState(false);

const handleSubmitLogin = (event) => {
  if (event) event.preventDefault();
  setErrors(validate(values)); 
  const { email, password } = values;
  login(email, password);
  setIsSubmitting(true);
};


const handleSubmitRecover = (event) => {
  if (event) event.preventDefault();
  setErrors(validate(values)); 
  const { email } = values;
  recover(email);
  setIsSubmitting(true);
};

const handleSubmitRegister = (event) => {
  if (event) event.preventDefault();
  setErrors(validate(values)); 
  const { email, password } = values;
  register(email, password);
  setIsSubmitting(true);
};

const handleChange = (event) => {
  event.persist();
  setValues(values => ({ ...values, [event.target.name]: event.target.value }));
};

useEffect(() => {
  if (Object.keys(errors).length === 0 && isSubmitting) {
    callback();
  }
}, [errors]);


return {
  handleChange,
  handleSubmitLogin,
  handleSubmitRegister,
  handleSubmitRecover,
  values,
  errors,
  }
};
