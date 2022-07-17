
const initialState= [{
    id: 1,
    todo: 'recolectar piedra del alma',
    done: false
}];

const todoReduce = (state= initialState, action={}) =>{

    if (action.type === 'add Todo') {
        state=[...state, action.payload];
    }

    return state;
}

const addTodo ={
    type: 'add Todo',
    payload: {
        id: 2,
        todo: 'recolectar piedra del tiempo',
        done: false
    }
}



let todo = todoReduce()
console.log(todo);

todo= todoReduce(todo, addTodo);
console.log(todo);