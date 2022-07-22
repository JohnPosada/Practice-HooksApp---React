import { render, screen } from "@testing-library/react"
import { UserContext } from "../../src/useContext/context/UserContext"
import { HomePage } from "../../src/useContext/HomePage"

describe('Pruebas al componente HomePage', () => { 
    
    const user = {
        id: 1,
        name: 'John',
        email:'John@gmail.com'
    }
    
    test('debe de mostrar el componente sin el usuario', () => {

        render( 
            <UserContext.Provider value={{ user: null }}>
                <HomePage /> 
            </UserContext.Provider>
        );

        const pre = screen.getByLabelText('pre');
        expect( pre.innerHTML ).toBe( 'null' );
    })


    test('debe de mostrar el componente con el usuario', () => {

        render( 
            <UserContext.Provider value={{ user }}>
                <HomePage /> 
            </UserContext.Provider>
        );

        const pre = screen.getByLabelText('pre');
        expect( pre.innerHTML ).toContain( JSON.stringify(user.name) );
        expect( pre.innerHTML ).toContain( JSON.stringify(user.email) );
    })



 })
