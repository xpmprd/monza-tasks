import React, {useState } from 'react';

import { PopUp } from 'components/PopUp/PopUp';
import { useTask } from 'services/todo/hook';
import { Button } from 'components/Button/Button';
import { Form } from 'components/FullForm/Form/Form';
import { Input } from 'components/FullForm/Input/Input';
import Heading from 'components/Heading/Heading';
import styles from './styles.module.scss';

export const UpdateTask = ({ show, close, item, onSubmit }) => {


const [tasks, setTasks] = useState({
  task: item.task,
  id: item.id
});

const { loading } = useTask();


const handleSubmit = event => {
  event.preventDefault();
  const { task, id } = tasks; 
  onSubmit({ task, id });
  setTasks({ task: tasks.task, id: item.id });
};

const onChangetodo = e => {
  setTasks({ task: e.target.value, id: item.id });
};
 

return (
  
<> 

  <PopUp
      close={close}
      opened={show ? 1 : 0}>
    <Heading
        bold="true"
        size="h4"
        >Edit your task and click Edit Task.
      </Heading>
    <div className={styles.FormContainer}>
    <Form onSubmit={handleSubmit}>
      <div className={styles.InputContainer}>
      <Input
        value={tasks.task}
        onChange={onChangetodo}
        placeholder="Edit your task."
        required
      />
      </div>
      <div className={styles.ButtonContainer}>
        <div className={styles.ButtonEdit}>
          <Button type="submit" 
            onClick={close} 
            loading={loading ? 'Editing...' : null}
            disabled={loading}
            >Edit Task
          </Button>
        </div>
        <div className={styles.ButtonCancel}>
          <Button  
            onClick={close}
            >Cancel
          </Button>
        </div>
      </div>
    </Form>
    </div>
  </PopUp>
</>

  );
};