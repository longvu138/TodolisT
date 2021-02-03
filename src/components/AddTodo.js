import React, { useState } from 'react'
// import PropsTypes from 'props-types'

const AddTodo = props => {
    // const addTodo = props.addtodoFunc

    const [title,setTitle] = useState('')

   const changeTitle = event =>{
       setTitle(event.target.value);
   }
   const addSingleTodo = event => {
       event.preventDefault()
       if(title !== ""){
         props.addtodoFunc(title)
         setTitle('')
       }
   }
    return (
            <form style={{display:'flex',margin:'10px 0'}} 
            onSubmit={addSingleTodo}> 
            <input  value={title}
            style={{flex:'10',padding:'10px',margin:'0 10px'}}
             type="text" name="title" placeholder="thêm công việc"
             onChange={changeTitle}
             />
           <input className="btn" style={{margin:'0 10px',color:"white"}} type="submit" value="Thêm"/>
            
            
             </form>
        )
}


export default AddTodo
