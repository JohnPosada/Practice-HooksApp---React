import { useEffect, useState } from "react"


export const Message = () => {
    
    const [cord, setCord] = useState({x:0, y:0})

    useEffect(() => {

        const mouseCord = ({x, y}) => {
            setCord({x,y})
        }
        window.addEventListener('mousemove', mouseCord)
        
        return () => {
          window.removeEventListener('mousemove', mouseCord)
        
      }
    }, [])
    

  return (
    <>
        <h3>Usuario existente</h3>
        <p>{JSON.stringify(cord)}</p>
    </>
  )
}
