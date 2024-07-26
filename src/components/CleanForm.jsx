import React,{useState} from 'react'
import { handleSubmit } from './handleSubmit'
import Input from './Input';
import Button from './Button';
import { useDispatch } from 'react-redux';



const CleanForm = ({rightData}) => {
    const dispatch=useDispatch();
    const [todoValue, setTodoValue]=useState('');
   
  return (
    <>
    <div>
       <form className='form-group custom-form' onSubmit={(e) => handleSubmit(e, todoValue, setTodoValue, dispatch)}>
         <div className='text-center ' ><label >Add your todo-items</label></div>
          <div className='input-and-btn'>
      
             <Input type="text" className='form-control mt-[-2]'   required="required" value={todoValue} onChange={(e)=>setTodoValue(e.target.value)} /> 
             {rightData && <div>{rightData}</div>}
               <Button type="submit" className=' btn btn-primary btn-md mt-3' label="ADD"></Button>
          
          </div>
        </form>
    </div>
    </>
  )
}

export default CleanForm