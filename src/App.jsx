import { useState } from "react";
import { Form } from "./components/Form";
import { Todos } from "./components/Todos";
import { useDispatch, useSelector } from "react-redux";
import { deleteAll } from "../redux/todoapp/actions";
import Button from "./components/Button";
import CancleButton from "./components/CancleButton";
import { handleEditClick } from "./components/HandleEditClick";
import { cancelUpdate } from "./components/CancleUpdate";
function App() {
  // dispatch function to dispatch an action
  const dispatch = useDispatch();

  // getting todos state for conditional rendering
  const todos = useSelector((state) => state.operationsReducer) || [];

  // update form visibility state
  const [editFormVisibility, setEditFormVisibility] = useState(false);

  // editTodo state
  const [editTodo, setEditTodo] = useState("");

  return (
    <div className="wrapper">
      <br></br>
      <h3 className="text-center text-4xl font-medium">
        TODO-APP USING REACT-REDUX
      </h3>

      <Form
        editFormVisibility={editFormVisibility}
        editTodo={editTodo}
        // cancelUpdate={cancelUpdate}
        cancelUpdate={() => cancelUpdate(setEditFormVisibility)}
      />

      <Todos
        handleEditClick={(todo) =>
          handleEditClick(todo, setEditFormVisibility, setEditTodo)
        }
        editFormVisibility={editFormVisibility}
      />
      {todos.length > 1 && (
        <Button
          className="btn btn-danger btn-md delete-all mb-2"
          onClick={() => dispatch(deleteAll())}
          label="DELETE ALL"
        ></Button>
      )}
      {/* Liskov's Principle */}
      <CancleButton label="CANCEL BUTTON" />
    </div>
  );
}

export default App;
