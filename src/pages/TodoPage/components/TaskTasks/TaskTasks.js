import React, { useState } from 'react';

import Heading from 'components/Heading/Heading';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles.module.scss';
import { DeleteTask } from './components/DeleteTask/DeleteTask';
import { UpdateTask } from './components/UpdateTask/UpdateTask';
import { useTask } from 'services/todo/hook';
import { DivChild, DivContainer } from './styles';

export const TaskTasks = ({ item }) => {
  
  const [isDeleting, setisDeleting] = useState(false);
  const [isUpdate, setisUpdate] = useState(false);

  const [state, setState] = useState({
    clicked: false,
  });
  const { update } = useTask();
  const handleClick = () => {
    setState({ clicked: !state.clicked });
  };

  return (

    <DivContainer clicked={state.clicked}>
      <div className={styles.Content}>
        <Heading
          size="h1"
          bold="true"
        >{item.task}
        </Heading>
      </div>
      <div className={styles.Content1}>
        <DivChild
          onClick={handleClick}
          clicked={state.clicked}
        >
          <svg
            id={styles.svg}
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="check-circle"
            className="svg-inline--fa fa-check-circle fa-w-16"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          ><path
            fill="currentColor"
            d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"
          />
          </svg>
        </DivChild>
        <DivChild>   
        <FontAwesomeIcon
          id={styles.fontEdit}
          icon={faEdit}
          title="Update Task"
          onClick={() => setisUpdate(true)}
        />
        <UpdateTask 
        item={item}
        show={isUpdate}
        close={() => setisUpdate(false)}
        onSubmit={update}
        />
        </DivChild>
        <div>
        <FontAwesomeIcon
            id={styles.font}
            icon={faTrash}
            color="red"
            title="Delete task"
            onClick={() => setisDeleting(true)}
          />
          <DeleteTask 
            item={item}
            show={isDeleting}
            close={() => setisDeleting(false)}
          />
        </div>
      </div>
    </DivContainer>

  );
};