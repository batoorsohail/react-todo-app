import TodoItem from "./TodoItem"
import TodosLogic from "./TodosLogic"

const TodosList = ({todosProps, handleChange, delTodo}) => {
  return (
    <ul>
      {todosProps.map((todo) => (
        <TodoItem 
          key={todo.id} 
          itemProp={todo}
          handleChange={handleChange}
          // delTodo={TodosLogic.delTodo}
          delTodo={delTodo}
        />
      ))}
    </ul>
  )
}

export default TodosList