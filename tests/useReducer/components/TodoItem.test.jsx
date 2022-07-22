import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../../src/useReducer/components/TodoItem";


describe('Pruebas en <TodoItem />', () => {
    
    const todo = {
        id: 1,
        description: 'Piedra del tiempo',
        done: false
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach( () => jest.clearAllMocks() );


    test('Debe de mostrar el Todo pendiente', () => {
        
        render( 
            <TodoItem 
                todo={ todo } 
                onToggleTodo={ onToggleTodoMock } 
                onDeleteTodo={ onDeleteTodoMock } 
            /> 
        );

        const liElement = screen.getByRole('listitem');
        expect( liElement.className ).toBe('list-group-item d-flex justify-content-between')

        const spanElement = screen.getByLabelText('span');
        expect( spanElement.className ).toBe('align-self-center ');
        expect( spanElement.innerHTML ).toContain(todo.description);

    });

    test('Debe de mostrar el Todo completado', () => {
        
        todo.done = true;

        render( 
            <TodoItem 
                todo={ todo } 
                onToggleTodo={ onToggleTodoMock } 
                onDeleteTodo={ onDeleteTodoMock } 
            /> 
        );

        const spanElement = screen.getByLabelText('span');
        expect( spanElement.className ).toBe('align-self-center text-decoration-line-through');

    });

    test('El span debe de llamar el ToggleTodo', () => {

        render( 
            <TodoItem 
                todo={ todo } 
                onToggleTodo={ onToggleTodoMock } 
                onDeleteTodo={ onDeleteTodoMock } 
            /> 
        );

        const spanElement = screen.getByLabelText('span');

        fireEvent.click(spanElement);


        expect( onToggleTodoMock ).toHaveBeenCalledWith(todo.id);

    });


    test('El button borrar debe de llamar el onDeleteTodo', () => {

        render( 
            <TodoItem 
                todo={ todo } 
                onToggleTodo={ onToggleTodoMock } 
                onDeleteTodo={ onDeleteTodoMock } 
            /> 
        );

        const buttonElement = screen.getByRole('button');

        fireEvent.click(buttonElement);


        expect( onDeleteTodoMock ).toHaveBeenCalledWith(todo.id);

    });


})