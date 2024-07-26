import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { handleOnDragEnd } from "./HandleOnDrag";
import ToDoItem from "./ToDoItem";

export const Todos = ({ handleEditClick, editFormVisibility }) => {
  const todos = useSelector((state) => state.operationsReducer);
  const dispatch = useDispatch();

  return (
    <DragDropContext
      onDragEnd={(result) => handleOnDragEnd(result, dispatch, todos)}
    >
      <Droppable droppableId={"droppable"}>
        {(provided) => (
          <div
            className="todo"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {todos.map((todo, index) => (
              <ToDoItem
                key={todo.id}
                todo={todo}
                index={index}
                handleEditClick={handleEditClick}
                editFormVisibility={editFormVisibility}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
