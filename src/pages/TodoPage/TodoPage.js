import React from 'react';
import { Navbar } from 'components/Navbar/Navbar';
import Heading from 'components/Heading/Heading';
import { useTask } from '../../services/todo/hook';
import { InsertTask } from './components/InsertTask/InsertTask';
import { TaskList } from './components/TaskList/TaskLists';
import styles from './styles.module.scss';

export const Todo = () => {
  
  const { create, remove, loading, items } = useTask();

  return (
  
    <>
      <Navbar />
      
      <div className={styles.Cnt}>
        <Heading
          size="h3"
          bold="true"
        >Add a new task
        </Heading>
        <InsertTask
          onSubmit={create}
          loading={loading}
        />
        
        <Heading
          size="h3"
          bold="true"
        >Your tasks
        </Heading>
        <TaskList
          items={items}
          onRemove={remove}
          loading={loading}
        />
      </div>
    </>

  );
};

