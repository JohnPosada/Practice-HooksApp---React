import { useState } from "react"
import { useForm } from "../../hooks/useForm";


export const TodoForm = ({onNewTodo}) => {
    
    const {description, onInputChange, onResetForm} = useForm({
        description:''
    })


    const onClickAdd= (event) =>{
        event.preventDefault();
        if (description.trim().length <= 1 ) return
        onNewTodo({
            id: new Date().getTime(),
            description:description.trim(),
            done:false}) 
        onResetForm()
    }

  return (
    <>
        <form onSubmit={onClickAdd}>
            <input
                type='text'
                name="description"
                placeholder="Ingresar TODO"
                className="form-control"
                onChange={onInputChange}
                value = {description}
            />
            <button 
                type="submit"
                className="btn btn-outline-primary mt-2"
                onClick={onClickAdd}>
                Agregar
            </button>
        </form>
    </>
  )
}
