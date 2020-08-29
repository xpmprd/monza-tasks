import { useSelector, useDispatch } from 'react-redux';
import { create, remove, update, taskClean } from 'services/todo/actions';

export const useTask = () => {

  const {  
    items,
    loading,
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  return {
    create: (item) => dispatch(create(item)),
    remove: (item) => dispatch(remove(item)),
    taskClean: () => dispatch(taskClean()),
    update: (item) => dispatch(update(item)),
    loading,
    items,
  };
};

