import React, { useEffect } from 'react';

import { Loader } from 'components/Loading/Loading';
import Heading from 'components/Heading/Heading';
import { TaskTasks } from '../TaskTasks/TaskTasks';
import { useTask } from '../../../../services/todo/hook';
import styles from './styles.module.scss';

export const TaskList = ({ onRemove }) => {

  const { items, taskClean, loading } = useTask();
  
  useEffect(() => {
    setTimeout(() => {
      taskClean();
    }, 3000);
  }, []);

  if (loading) {
  
    return ( 
      <div
        className={styles.ContainerUp}
        warning="true"
      ><Loader />
      </div>
    );
  } if (!items || !items.length) {
    return (
      <div
        className={styles.ContainerUp}
        warning="true"
      ><Heading
        size="h2"
        bold="true"
      >You haven't created any tasks!
      </Heading>
      </div>
    );
  }

  const listItems = items.map(item => (
    <TaskTasks
      key={item.id}
      item={item}
      onRemove={onRemove}
    />
  ));
  

  return (
  
    <div className={styles.ContainerDown}>
      <span className={styles.Items}>{listItems}</span>
    </div>
   
  );
};

