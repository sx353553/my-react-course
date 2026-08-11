import './Todo.css'

function Todo({ title, onTodoDelete }) {

  return (
    <div className="Todo">
      <h2>{ title }</h2>
      
      <button onClick={onTodoDelete}>Delete</button>
    </div>
  );
}

export default Todo;
