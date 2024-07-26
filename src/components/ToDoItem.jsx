import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { handleCheckbox, removeTodo } from "../../redux/todoapp/actions";
import { useDispatch } from "react-redux";
import { Icon } from "react-icons-kit";
import { trash } from "react-icons-kit/feather/trash";
import { edit2 } from "react-icons-kit/feather/edit2";

const ToDoItem = ({ todo, index, handleEditClick, editFormVisibility }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Draggable key={todo.id} draggableId={todo.id?.toString()} index={index}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className="todo-box outline-container  "
          >
            <div className="content">
              {editFormVisibility === false && (
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => dispatch(handleCheckbox(todo.id))}
                />
              )}
              <p
                style={
                  todo.completed
                    ? { textDecoration: "line-through" }
                    : { textDecoration: "none" }
                }
              >
                {todo.todo}
              </p>
            </div>
            <div className="actions-box">
              {editFormVisibility === false && (
                <div>
                  <span onClick={() => handleEditClick(todo)}>
                    <Icon icon={edit2} />
                  </span>
                  <span onClick={() => dispatch(removeTodo(todo.id))}>
                    <Icon icon={trash} />
                  </span>
                </div>
              )}
            </div>
          </div>
        )}
      </Draggable>
    </div>
  );
};

export default ToDoItem;
