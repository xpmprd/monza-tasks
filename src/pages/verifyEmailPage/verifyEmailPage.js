import React from 'react';

import { Navbar } from 'components/Navbar/Navbar';
import { useVerifyEmail } from 'services/auth/verifyEmail/hook';
import { useLogin } from '../../services/auth/login/hook';
import styles from './styles.module.scss';
import Heading from 'components/Heading/Heading';
import { Button } from 'components/Button/Button';
import { ErrorMsg } from 'components/ErrorMsg/ErrorMsg';
import { ExtraText } from 'components/Button/ExtraText/ExtraText';

export const VerifyEmailPage = () => {
  
const { verifyEmail, error, verifyEmailSuccess } = useVerifyEmail();
const { loading } = useLogin();

return (
  
  <>
      
  <Navbar/>
  <div className={styles.Wrapper}>
    <div className={styles.Container}>
    <Heading
          size="h4"
          bold="true"
        >Verify your email
        </Heading>
        <Heading
        size="h3"
      >  Thank you for registering, please check your email and verify your address.
      </Heading>
      <div className={styles.ButtonContainer}>
      <Button 
      disabled={loading}
      loading={loading ? 'Sending verification email...' : null}
      onClick={() => verifyEmail()}
      >Re-send verification email.
      </Button>
      <ExtraText>
          Already verified your email?<a
            href="/task"
          ><p>Click here to continue!</p>
          </a>
      </ExtraText>
      <div className={styles.ErrorContainerFail}>
        {error && <ErrorMsg error="true" show={error}>{error.message}</ErrorMsg>}
      </div>
      <div className={styles.ErrorContainerSuccess}>
        {verifyEmailSuccess && !error && <ErrorMsg success="true">Verification email sent successfully.</ErrorMsg>}
      </div>
      </div>
    </div>
    </div>
</>
  );
};
  
