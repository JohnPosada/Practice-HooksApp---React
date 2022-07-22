import { useContext } from "react"
import { UserContext } from "./context/UserContext"


export const LoginPage = () => {

    const {user, setUser} = useContext(UserContext)
    const usuario ={
      id:123,
      name:'John',
      email:'John@gmail.com'
    }
  return (
    <>
        <h1>LoginPage</h1>
        <hr/>
        <p aria-label="par">{ JSON.stringify(user,null,3)}</p>
        <button className="btn btn-primary"
          onClick={() => setUser(usuario)}>
          Asignar Usuario
        </button>
    </>
  )
}
