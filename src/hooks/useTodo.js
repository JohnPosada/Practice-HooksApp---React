import { useEffect, useReducer } from "react"
import {todoReducer} from '../useReducer/todoReducer';



export const useTodo = () => {

    const init= () =>{
        return JSON.parse(localStorage.getItem('todo')) || []
    }

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
      localStorage.setItem('todo',JSON.stringify(todos))
    }, [todos])

    const countPendings = todos.filter(todo => !todo.done).length
    

    const onNewTodo= (todo) => {
        const action={
            type:'add Todo',
            payload:todo
        };

        dispatch(action);
    }

    const onDeleteTodo= (id) => {
        const action={
            type:'remove Todo',
            payload:id
        };
        dispatch(action);
    }

    const onToggleTodo= (id) => {
        const action={
            type:'toggle Todo',
            payload:id
        };

        dispatch(action);
    }

    return{
        todos,
        countTodos: todos.length,
        countPendings,
        onNewTodo,
        onDeleteTodo,
        onToggleTodo
    }


}
