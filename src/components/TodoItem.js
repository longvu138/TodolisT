import React from 'react'
import PropTypes from 'prop-types'

const TodoItem = props => {
    const Todo = props.todoProps;
    const markComplete = props.markCompleteFunc;
    const deletetodo= props.deleteTodoFunc;
    // style
    const todoItemStyle={
        background: "#f4f4f4",
        padding:'10px',
        borderBottom:'1px #ccc dotted',
        textDecoration: Todo.completed ? 'line-through' : 'none'
    }

    const DeleteButtonstyle={
        background:'black',
        color:'#fff',
        border:'none',
        padding:'5px 9px',
        borderRadius:'50%',
        cursor:'pointer',
        float:'right'
    }
    // /style
    return (
       <p style={todoItemStyle}>
        <input style={{marginRight:'25px'}} type="checkbox"
         onChange={markComplete.bind(this,Todo.id)}
          checked={Todo.completed}/>
        {Todo.title}
        <button style={DeleteButtonstyle} onClick={deletetodo.bind(this,Todo.id)}>Delete</button>
        </p>
    )
}

 //proptypes
 TodoItem.propTypes={
     todoProps: PropTypes.object.isRequired,
     markCompleteFunc: PropTypes.object.isRequired,
     deleteTodoFunc: PropTypes.object.isRequired
 }
export default TodoItem
