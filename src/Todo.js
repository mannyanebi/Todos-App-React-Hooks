import React from 'react';
import EditTodoForm from './EditTodoForm';
import useToggleState from './hooks/useToggleState';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

function Todo({task, id, completed, removeTodo, toggleTodo, editTodo}){
    const [isEditing, toggleIsEditing] = useToggleState(false)
    return(
        <ListItem style={{height:"64px"}}>
            {isEditing ? <EditTodoForm editTodo={editTodo} id={id} task={task} toggleIsEditing={toggleIsEditing}/> : 
            <> 
            <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)}/>
            <ListItemText 
                style={{textDecoration: completed ? "line-through" : "none"}}
            >{task}</ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
                    <DeleteIcon></DeleteIcon>
                </IconButton>
                <IconButton aria-label="Edit" onClick={toggleIsEditing}>
                    <EditIcon></EditIcon>
                </IconButton>
            </ListItemSecondaryAction>
            </>
            }
        </ListItem>
    )
}

export default Todo;