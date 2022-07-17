
import { TodoList } from "./components/TodoList";
import { TodoForm } from "./components/TodoForm";
import { useTodo } from "../hooks";


export const TodoApp = () => {

    const {todos, countTodos, countPendings, onNewTodo, onDeleteTodo, onToggleTodo} =useTodo()
   
  return (
    <>
        <h1>Todo App: {countTodos} <small>Pendientes: {countPendings} </small></h1>
        <hr/>

        <div className="row">
            <div className="col-7">
                <TodoList 
                    todos={todos} 
                    onDeleteTodo={onDeleteTodo} 
                    onToggleTodo={onToggleTodo}
                />
            </div>
            <div className="col-5">
                <h3>Agregar TODO</h3>
                <TodoForm 
                    onNewTodo= {(todo) => onNewTodo(todo)}/>
            </div>
        </div>

    </>
  )
}
