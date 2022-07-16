import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";


export const CallbackHook = () => {
    const [counter, setCounter] = useState(1);

    const increment= useCallback(
      () => {
        setCounter((value) => value+1 )
      },
      [],
    )
    

  return (
    <>
        <h2>Counter: <small>{counter}</small> </h2>

        <ShowIncrement increment={increment}/>
    </>
  )
}
