import React from 'react'
import TodosLogic from './TodosLogic'
import Header from './Header'

const TodoApp = () => {
  return (
    <div className="wrapper">
      <div className="todos">
        <TodosLogic />
      </div>
    </div>
  )
}

export default TodoApp