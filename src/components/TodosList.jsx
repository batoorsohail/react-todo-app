import TodoItem from "./TodoItem"
import TodosLogic from "./TodosLogic"

const TodosList = ({todosProps, handleChange, delTodo, setUpdate}) => {
  return (
    <ul>
      {todosProps.map((todo) => (
        <TodoItem 
          key={todo.id} 
          itemProp={todo}
          handleChange={handleChange}
          // delTodo={TodosLogic.delTodo}
          delTodo={delTodo}
          setUpdate={setUpdate}
        />
      ))}
    </ul>
  )
}

export default TodosList