import React from 'react';
import useInputState from './hooks/useInputState';
import TextField from '@material-ui/core/TextField';

function EditTodoForm({editTodo, id, task, toggleIsEditing}) {
    const [value, handleChange, reset] = useInputState(task)
    return(
        <form onSubmit={(evt) => {
            evt.preventDefault()
            editTodo(id, value)
            reset()
            toggleIsEditing()
        }}
        style={{marginLeft: "1rem", width:"50%"}}
        >
            <TextField 
            margin='normal'
            value={value}
            onChange={handleChange}
            fullWidth
            autoFocus
            />
        </form>
    )
}

export default EditTodoForm;