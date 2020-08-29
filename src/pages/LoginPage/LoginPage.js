import React from 'react';
import { Link } from 'react-router-dom';

import { useLogin } from 'services/auth/login/hook';
import { Button } from 'components/Button/Button';
import { ErrorMsg } from 'components/ErrorMsg/ErrorMsg';
import { ExtraText } from 'components/Button/ExtraText/ExtraText';
import Heading from 'components/Heading/Heading';
import { Form } from '../../components/FullForm/Form/Form';
import { Input } from '../../components/FullForm/Input/Input';
import { Label } from '../../components/FullForm/Label/Label';
import styles from './styles.module.scss';
import { validateLogin } from 'components/FullForm/Validation/errors/errors';
import { useForm } from 'components/FullForm/Validation/hook/hook';


export const Login = () => {
  
  const {  login, error, loading, clean } = useLogin();
  const {
    values,
    errors,
    handleChange,
    handleSubmitLogin,
  } = useForm(login, validateLogin);
  
  return (
  
    <div className={styles.Container}>
      <div className={styles.ContainerForm}>
        <img
          src={require('../../images/logo.png')}
          className={styles.Image}
          alt="logo"
        />
        <Form
          onSubmit={handleSubmitLogin}
          noValidate
        >
          <Heading size="h4" bold="true" >Sign in</Heading>
    
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
              loading={loading ? 'Logging in...' : null}
            >Login
            </Button>
          </div>
          <ExtraText>
            Don't have an account?<Link
              to="/register"
              onClick={clean}
            ><p>Sign up here!</p>
            </Link>
          </ExtraText>
          <div className={styles.RecoverContainer}>
            <Link to="/recover" onClick={clean}><p>Forgot your password?</p></Link>
          </div>
          <div className={styles.ErrorWrapper}>
            {error && <ErrorMsg error="true" show={error}>{error.message}</ErrorMsg>}
          </div>
    
        </Form>
      </div>
    </div>

  );
};
  
