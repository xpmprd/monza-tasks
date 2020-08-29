import React from 'react'; 
import { Link } from 'react-router-dom';

import { useLogin } from 'services/auth/login/hook';
import { useRecover } from 'services/auth/recoverPass/hook';
import { Form } from '../../components/FullForm/Form/Form';
import { Input } from '../../components/FullForm/Input/Input';
import { validateLogin } from 'components/FullForm/Validation/errors/errors';
import { useForm } from 'components/FullForm/Validation/hook/hook';
import styles from './styles.module.scss';
import Heading from 'components/Heading/Heading';
import { ErrorMsg } from 'components/ErrorMsg/ErrorMsg';
import { Button } from 'components/Button/Button';
import { ExtraText } from 'components/Button/ExtraText/ExtraText';


export const RecoverPassPage = () => {
 
const { clean } = useLogin();
const {  recover, error, recoverSuccess, loading } = useRecover();
const {
  values,
  errors,
  handleChange,
  handleSubmitRecover,
} = useForm(recover, validateLogin);
 
console.log(errors.email)
return (
  
  <div className={styles.Container}>
    <div className={styles.ContainerForm}>
    <img
       src={require('../../images/logo.png')}
      className={styles.Image}
      alt="logo"
    />
    <Heading size="h4" bold="true" >Recover your password</Heading>
    <Form
      onSubmit={handleSubmitRecover}
      noValidate
    >
      <div className={styles.HeadingContainer}>
        <Heading size="h3" bold="true" >Email</Heading>
      </div>
      <Input 
        placeholder="Type your email..." 
        type="email" 
        name="email" 
        onChange={handleChange} 
        value={values.email || ''} 
      />
      <div className={styles.MessageEmail}>
        {errors.email && <ErrorMsg show={errors.email} error="true">{errors.email}</ErrorMsg>}
      </div>
      <Button 
        type="submit"
        loading={loading ? 'Sending recovery email...' : null}
        disabled={loading}
        >Send recovery email</Button>
      <div className={styles.ExtraContainer}>
        <ExtraText>Recover approved?<Link to="/login" onClick= {clean}
        ><p>Sign in here!</p></Link></ExtraText></div>
      <div className={styles.ErrorWrapper}>
        {error && <ErrorMsg error="true" show="true">{error.message}</ErrorMsg>}
        </div>
        <div className={styles.ErrorWrapper}>
        {recoverSuccess && <ErrorMsg success="true" show="true">Password recovery email sent successfully.</ErrorMsg>}
      </div>
    </Form>
    </div>
  </div>
  
  );
};
  
