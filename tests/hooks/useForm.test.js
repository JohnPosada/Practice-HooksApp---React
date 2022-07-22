import { act, renderHook } from "@testing-library/react"
import {useForm} from '../../src/hooks/useForm';

describe('pruebas al hook useForm', () => { 

    const form={
        name: 'arpol',
        email: 'arpol@gmail.com'
    }
    
    test('Debe devolver los valores por defecto ', () => { 
        const {result} = renderHook( () => useForm(form));
        expect(result.current).toEqual(
            {
                name: form.name,
                email: form.email,
                onInputChange: expect.any(Function),
                onResetForm: expect.any(Function)
              }
        
        ) 
     })
     
     
     test('Debe devolver los valores por defecto ', () => { 
         const {result} = renderHook( () => useForm(form));
         
        const {onInputChange} = result.current
        
        act(() => {
            const tar = {target:{
                name: 'name', 
                value: 'John'
            }}
            onInputChange(tar)
        })
        
        expect(result.current.name).toBe('John')
        
        
    })
    
    test('Debe resetear a los valores por defecto del formulario', () => { 
        const {result} = renderHook( () => useForm(form));
        const {onInputChange, onResetForm} = result.current
        
        act(() => {
            const tar = {target:{
                name: 'name', 
                value: 'John'
            }}
            onInputChange(tar)
            onResetForm();
        })

        expect(result.current.name).toBe(form.name) 
        expect(result.current.email).toBe(form.email) 
     })
})