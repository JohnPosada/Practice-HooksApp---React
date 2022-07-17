
export const todoReducer = (initialState, action) => {
    switch (action.type) {
        case 'add Todo':
            return [...initialState, action.payload]
        case 'remove Todo':
            return initialState.filter(todo => todo.id!=action.payload)
        case 'toggle Todo':
            return initialState.map( todo => {

                if ( todo.id === action.payload ) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                } 

                return todo;
            });
    
        default:
            return initialState
            
    }
}
