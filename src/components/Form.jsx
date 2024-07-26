import React from 'react'
import CleanForm from './CleanForm';
import CleanForm2 from './CleanForm2';

export const Form = ({editFormVisibility,editTodo,cancelUpdate}) => {
  return (
    <div>
      {editFormVisibility===false && <CleanForm />}
      {editFormVisibility===true &&  <CleanForm2
          editTodo={editTodo}
          cancelUpdate={cancelUpdate}
          editFormVisibility={editFormVisibility}
        />}
    </div>
  )
}
