import { addTodo } from "../../redux/todoapp/actions";

export const handleSubmit = (e, todoValue, setTodoValue, dispatch) => {
  e.preventDefault();
  let date = new Date();
  let time = date.getTime();
  let todoObj = {
    id: time,
    todo: todoValue,
    completed: false,
  };
  setTodoValue("");
  dispatch(addTodo(todoObj));
};
