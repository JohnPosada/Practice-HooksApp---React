import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { MultipleCustomHook } from "../../src/Example/MultipleCustomHook"
import { useCounter } from "../../src/hooks/useCounter";
import {useFetch} from '../../src/hooks/useFetch';
useCounter

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas al componente MultipleCustomHook', () => { 
    
    mockIncrement= jest.fn();
    mockDecrement= jest.fn();

    useCounter.mockReturnValue({
        counter:100,
        increment: mockIncrement,
        decrement: mockDecrement
    });

    test('Debe mostrar el componente por defecto', () => {
        
        useFetch.mockReturnValue({data:null,
            isLoading:true,
            hasError:null})
        
        render(<MultipleCustomHook />)

        const nextButton = screen.getByRole('button',{name:'Next quote'})
        const previousButton = screen.getByRole('button',{name:'Previous quote'})
        
        expect(nextButton.disabled ).toBeTruthy()
        expect(previousButton.disabled ).toBeTruthy()
     })

    test('Debe mostrar un Quote', async() => { 
        
        useFetch.mockReturnValue({data:[{quote:'hello', author:'john'}],
            isLoading:false,
            hasError:null})

        render(<MultipleCustomHook />);

        
        expect( screen.getByText('hello') ).toBeTruthy()
        expect( screen.getByText('john') ).toBeTruthy()
    })

    test('Debe llamar a la funcion incrementar y decrementar',() => { 
        
        useFetch.mockReturnValue({data:[{quote:'hello', author:'john'}],
            isLoading:false,
            hasError:null
        });
        
        
        render(<MultipleCustomHook />);
        
        const nextButton = screen.getByRole('button',{name:'Next quote'})
        const previousButton = screen.getByRole('button',{name:'Previous quote'})
        fireEvent.click(nextButton);
        fireEvent.click(previousButton);
        expect(mockIncrement).toHaveBeenCalled()
        expect(mockDecrement).toHaveBeenCalled()
        
    })
})