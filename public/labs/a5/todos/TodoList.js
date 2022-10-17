import TodoItem from "./TodoItem.js";
import todos from "./todos.js";

const TodoList = () => {
  return(`
       <ul>
        ${todo.title}
        (${todo.status})
       </ul>
   `);
}
export default TodoList;