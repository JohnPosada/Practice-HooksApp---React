import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm"
import { Message } from "./Message"


export const SimpleForm = () => {

    const formValues= {
        username:'',
        email:'',
        password:''
    }
    const {username, email, password, onInputChange, onResetForm} = useForm(formValues)

    /* useEffect(() => {
        console.log(formState);
    }, [formState])
     */

  return (
    <>
        <h1>Form</h1>

        <input 
            type="text"
            value={username}
            className="form-control mb-2"
            name="username"
            placeholder="username"
            onChange={onInputChange}
        />

        <input 
            type="email"
            className="form-control mt-2"
            value={email}
            name="email"
            placeholder="email"
            onChange={onInputChange}
        />
        <input 
            type="password"
            className="form-control mt-2"
            value={password}
            name="password"
            placeholder="password"
            onChange={onInputChange}
        />
        <button className="btn btn-primary mt-2" onClick={onResetForm}>Reset</button>
    </>
  )
}
