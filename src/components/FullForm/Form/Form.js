import React from 'react';

export const Form = ({ children, onSubmit, noValidate }) => (
  
  <form onSubmit={onSubmit} noValidate={noValidate}>
    {children}
  </form>
            
);
