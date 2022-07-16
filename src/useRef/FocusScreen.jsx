import { useRef } from "react"

export const FocusScreen = () => {

    const inputRef = useRef();

    const onClickFocus= () =>{
        inputRef.current.select();
    }


  return (
    <>
        <h1>FocusScreen</h1>
        <hr/>
        <input 
            className="form-control"
            type="text"
            placeholder="ingrese texto"
            ref={inputRef}
        />
        <button 
            className="btn btn-primary mt-2"
            onClick={onClickFocus}
        >
            Set Focus
        </button>
    </>
  )
}
