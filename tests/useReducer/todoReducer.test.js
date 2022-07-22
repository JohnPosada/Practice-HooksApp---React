import { todoReducer } from "../../src/useReducer/todoReducer"

describe('Puebas al todoReducer', () => { 

    const initialState= [{
        id: 1,
        description: 'Test todo',
        done:false
    }]

    test('Debe de guardar el estado inicial', () => { 
        
        const newState= todoReducer(initialState,{})
        expect(newState).toEqual(initialState)
     })

    test('Debe de añadir un todo', () => { 

        const action = {
            type: 'add Todo',
            payload: {
                id: 2,
                description: 'Add todo',
                done:false
            }
        }
        
        const newState= todoReducer(initialState,action)
        expect(newState.length).toBe(2)
        expect(newState).toContain(action.payload)
    })
    
    test('Debe de eliminar un todo', () => { 
 
         const action = {
             type: 'remove Todo',
             payload: 1
            }
            
        const newState= todoReducer(initialState,action)
        expect(newState.length).toBe(0)
        expect(newState).toEqual([])
      })


    test('Debe de eliminar un todo', () => { 
 
         const action = {
             type: 'toggle Todo',
             payload: 1
            }
            
        const newState= todoReducer(initialState,action)
        expect(newState[0].done).toBe(!initialState[0].done);
      })


    
 })