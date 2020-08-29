import React, { useState } from 'react';

import { Form } from 'components/FullForm/Form/Form';
import { Input } from 'components/FullForm/Input/Input';
import { Button } from 'components/Button/Button';
import styles from './styles.module.scss';

export const InsertTask = ({ onSubmit }) => {

  const [state, setState] = useState({
    task: '',
  });

  const handleSubmit = event => {
    event.preventDefault();
    const { task } = state;
    onSubmit({ task });
    setState({ task: '' });
  };
  
  const onChangetodo = e => {
    setState({ task: e.target.value });
  };

  return (
  
    <>
      <Form onSubmit={handleSubmit}>
        <div className={styles.Container}>
          <Input
            noMargin
            value={state.task}
            onChange={onChangetodo}
            placeholder="Save humanity..."
            required
          />
          <Button type="submit">Add</Button>
        </div>
      </Form>
    </>

  );
};

