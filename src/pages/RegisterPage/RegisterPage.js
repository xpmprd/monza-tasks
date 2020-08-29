import React from 'react';
import { Link } from 'react-router-dom';

import { useRegister } from 'services/auth/register/hook';
import { Button } from 'components/Button/Button';
import { ErrorMsg } from 'components/ErrorMsg/ErrorMsg';
import { ExtraText } from 'components/Button/ExtraText/ExtraText';
import Heading from 'components/Heading/Heading';
import { Input } from '../../components/FullForm/Input/Input';
import { Label } from '../../components/FullForm/Label/Label';
import { Form } from '../../components/FullForm/Form/Form';
import styles from './styles.module.scss';
import { validateRegister } from 'components/FullForm/Validation/errors/errors';
import { useForm } from 'components/FullForm/Validation/hook/hook';



export const Register = () => {

  
  const { register, error, clean, loading, } = useRegister();
  const {
    values,
    errors,
    handleChange,
    handleSubmitRegister,
  } = useForm(register, validateRegister);

 
  return (
  
    <div className={styles.Container}>
    <div className={styles.ContainerForm}>
      <img
        src={require('../../images/logo.png')}
        className={styles.Image}
        alt="logo"
      />
      <Form
        onSubmit={handleSubmitRegister}
        noValidate
      >
        <Heading size="h4" bold="true" >Register</Heading>
  
        
        <Label>
          <Heading size="h3" bold="true" >Email</Heading>
        </Label>
        <Input 
          placeholder="Email" 
          type="email" 
          name="email" 
          onChange={handleChange} 
          value={values.email || ''} 
          required />
        
        <div className={styles.MessageEmail}>
          {errors.email && <ErrorMsg show={errors.email} error="true">{errors.email}</ErrorMsg>}
        </div>

        
        <Label>
          <Heading size="h3" bold="true" >Password</Heading>
        </Label>
        <Input
          type="password" 
          placeholder="Password" 
          name="password" 
          onChange={handleChange} 
          value={values.password || ''} 
          required />
        
        <div className={styles.MessagePassword}>
          {errors.password && <ErrorMsg show={errors.password} error="true">{errors.password}</ErrorMsg>}
        </div>

        
        <div className={styles.ButtonWrapper}>
          <Button
            name="button"
            type="submit"
            onClick={clean}
            disabled={loading}
            loading={loading ? 'Signing up...' : null}
          >Register
          </Button>
        </div>
        <ExtraText>
          Already have an account?<Link
            to="/login"
            onClick={clean}
          ><p>Login here!</p>
          </Link>
        </ExtraText>
        <div className={styles.ErrorWrapper}>
          {error && <ErrorMsg error="true" show={error}>{error.message}</ErrorMsg>}
        </div>
  
        
      </Form>
    </div>
  </div>

);
};
  

