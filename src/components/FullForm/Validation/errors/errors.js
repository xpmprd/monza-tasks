export function validateLogin(values) {
    let errors = {};
    if (!values.email) {
      errors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Invalid Email.';
    }
    if (!values.password) {
      errors.password = 'Password is required.';
    }
    return errors;
  };
  
  export function validateRegister(values) {
    let errors = {};
    if (!values.email) {
      errors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Invalid Email.';
    }
    if (!values.password) {
      errors.password = 'Password is required.';
    } else if (values.password.length < 6) {
      errors.password = 'Password must be 6 or more characters.';
    }
    return errors;
  };