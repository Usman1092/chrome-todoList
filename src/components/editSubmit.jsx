

import { handleEditSubmit } from '../../redux/todoapp/actions';
export const editSubmit = (e, editValue, dispatch, editTodo) => {
  e.preventDefault();
  const editedObj = {
    id: editTodo.id,
    todo: editValue,
    completed: editTodo.completed,
  };
  dispatch(handleEditSubmit(editedObj));
};
