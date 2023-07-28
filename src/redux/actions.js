import { nanoid } from 'nanoid';

export const addTask = text => {
  return {
    type: 'tasks/addTask',
    payload: {
      id: nanoid(),
      complited: false,
      text,
    },
  };
};

export const deleteTask = taskId =>  {
    return {
        type: 'tasks/deleteTask',
        payload: taskId
    }
};
