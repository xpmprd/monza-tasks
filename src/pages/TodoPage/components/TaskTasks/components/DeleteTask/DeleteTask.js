import React from 'react';

import Heading from 'components/Heading/Heading';
import { PopUp } from 'components/PopUp/PopUp';
import { useTask } from 'services/todo/hook';
import { Button } from 'components/Button/Button';
import styles from './styles.module.scss';

export const DeleteTask = ({ show, close, item }) => {

  const { remove } = useTask();

  return (

    <PopUp
      opened={show ? 1 : 0}
      close={close}
    >
      <Heading
        bold="true"
        size="h4"
      >
        Are you sure you want to delete this task?
      </Heading>
      <div className={styles.Tasks}><p id={styles.P}>{item.task}</p></div>
      <div className={styles.All}>
        <div className={styles.Delete}>
          <Button
            title="Delete task"
            onClick={() => remove(item)}
          > Delete
          </Button>
        </div>
        <div className={styles.Cancel}>
          <Button  
            onClick={close}
          > Cancel
          </Button>
        </div>
      </div>
    </PopUp>

  );
};
