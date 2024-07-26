// HandleOnDrag.js
import { updateTodosOrder } from "../../redux/todoapp/actions";

export const handleOnDragEnd = (result, dispatch, todos) => {
  const { source, destination } = result;

  // If there's no destination (dropped outside), do nothing
  if (!destination) {
    return;
  }

  // If the item is dropped in the same position
  if (source.index === destination.index) {
    return;
  }

  // Reorder items based on the result
  const reorderedTodos = reorder(todos, source.index, destination.index);

  // action Dispatch update todos order
  dispatch(updateTodosOrder(reorderedTodos));
};

// Helper function for reordering items
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};
