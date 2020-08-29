export const todoActions = {
  CREATE: 'CREATE',
  CREATED: 'CREATED',
  UPDATE: 'UPDATE',
  UPDATED: 'UPDATED',
  REMOVE: 'REMOVE',
  REMOVED: 'REMOVED',
  ERROR: 'ERROR',
  TASK_CLEAN: 'TASK_CLEAN',
};

export const create = item => ({
  type: todoActions.CREATE,
  payload: { item },
});
  
export const created = item => ({
  type: todoActions.CREATED,
  payload: { item },
});

export function actionFail(error) {
  return {
    payload: error,
    type: todoActions.ERROR,
  };
}
  
export const update = item => ({
  type: todoActions.UPDATE,
  payload: { item },
});
  
export const updated = item => ({
  type: todoActions.UPDATED,
  payload: { item },
});
  
export const remove = item => ({
  type: todoActions.REMOVE,
  payload: { item },
});
  
export const removed = item => ({
  type: todoActions.REMOVED,
  payload: { item },
});

export const taskClean = () => ({
  type: todoActions.TASK_CLEAN,
});