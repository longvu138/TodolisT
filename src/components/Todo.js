import React from 'react'
import { Fragment, useState } from "react"
import AddTodo from './AddTodo'
import TodoItem from './TodoItem'
import { v4 as uuidv4 } from 'uuid';


const Todo = () =>  {
    const[todoState,setTodoState]= useState([
    {
        id:uuidv4(),
        title:'Việc 1',
        completed: false
    },    
    {
        id:uuidv4(),
        title:'Việc 2',
        completed: false
    },    
    {
        id:uuidv4(),
        title:'Việc 3',
        completed: false
    },       
    ])
 
    const markComplete = id =>{
        const newTodo = todoState.map(todo =>{
            if(todo.id === id) todo.completed = !todo.completed
            return todo
        })
            setTodoState(newTodo)
        
    }


    const deleteTodo = id =>{
        const newtodos= todoState.filter(todo => {
            return todo.id !== id
        })
        setTodoState(newtodos)
    }

    const addTodo = title => {
// bằng const newtodos= [{viejc 1....}]
        const newTodos = [...todoState,{
            id:uuidv4(),
            title,
            completed:false
        }] 
    setTodoState(newTodos)
    }
    return (
        <Fragment>
            <AddTodo addtodoFunc={addTodo}/>
        {todoState.map(todo => {
            return <TodoItem key={Todo.id} 
            todoProps={todo}
             markCompleteFunc={markComplete}
             deleteTodoFunc={deleteTodo}
             />
        })}
        </Fragment>
     
    )   
}

export default Todo
