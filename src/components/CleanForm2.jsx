import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { editSubmit } from "./editSubmit";
import Input from "./Input";
import Button from "./Button";

const CleanForm2 = ({ editFormVisibility, editTodo, cancelUpdate }) => {
  const dispatch = useDispatch();
  const [editValue, setEditValue] = useState("");

  useEffect(() => {
    if (editTodo) {
      setEditValue(editTodo.todo);
    }
  }, [editTodo]);

  if (editFormVisibility === false) {
    return null;
  }
  return (
    <form
      className="form-group custom-form"
      onSubmit={(e) => editSubmit(e, editValue, dispatch, editTodo)}
    >
      <label>Update your todo-items</label>
      <div className="input-and-btn">
        <Input
          type="text"
          className="form-control mt-[-1]"
          required="required"
          value={editValue || ""}
          onChange={(e) => setEditValue(e.target.value)}
        />

        <Button
          type="submit"
          label="UPDATE"
          className="btn bg-black  text-white btn-md mt-3"
        ></Button>
      </div>

      <Button
        onClick={cancelUpdate}
        label="BACK"
        className="btn btn-primary btn-md back-btn"
      ></Button>
    </form>
  );
};

export default CleanForm2;
