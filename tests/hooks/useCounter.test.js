import { act, renderHook } from "@testing-library/react"
import { useCounter } from "../../src/hooks/useCounter"

describe('Pruebas al hook useCounter', () => { 
    
    test('Debe retornar los valores por defecto', () => { 
        
        const {result} = renderHook(() => useCounter());
        const {counter, decrement, increment, reset} = result.current
        expect(counter).toBe(1)
        expect(decrement).toEqual( expect.any(Function))
        expect(increment).toEqual( expect.any(Function))
        expect(reset).toEqual( expect.any(Function))
     })
     test('Debe generar el counter con valor de 100', () => { 

        const {result} = renderHook(() => useCounter(100));
        const {counter} = result.current
        expect(counter).toBe(100)
      })


     test('Debe aumentar el contador en uno', () => { 

        const {result} = renderHook(() => useCounter(100));
        const {increment} = result.current;

        act(()=>{
            increment();
        })
        
        expect(result.current.counter).toBe(101)
        
      })

     test('Debe decrementar el contador en uno', () => { 

        const {result} = renderHook(() => useCounter(100));
        const {decrement} = result.current;

        act(()=>{
            decrement();
        })
        
        expect(result.current.counter).toBe(99)
        
      })
     test('Debe aumentar el contador en uno', () => { 

        const {result} = renderHook(() => useCounter(100));
        const {increment, reset} = result.current;

        act(()=>{
            increment();
            reset()
        })
        
        expect(result.current.counter).toBe(100)
        
      })
 })