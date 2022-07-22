import { fireEvent, render, screen } from "@testing-library/react"
import { UserContext } from "../../src/useContext/context/UserContext"
import { LoginPage } from "../../src/useContext/LoginPage"

describe('Pruebas al componente LoginPage', () => { 
    
    test('debe de mostrar el componente sin el usuario', () => {

        render( 
            <UserContext.Provider value={{ user:null }}>
                <LoginPage /> 
            </UserContext.Provider>
        );

        const pElement = screen.getByLabelText('par');
        expect( pElement.innerHTML ).toBe( 'null' );
    })
    
    test('Debe de llamar la función setUser cuando se hace click en el boton', () => {

        const user ={
            id:123,
            name:'John',
            email:'John@gmail.com'
        }
        const setUser = jest.fn()

        render( 
            <UserContext.Provider value={{user: null , setUser}}>
                <LoginPage /> 
            </UserContext.Provider>
        );

        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect( setUser ).toHaveBeenCalledWith( user );
    })


 })