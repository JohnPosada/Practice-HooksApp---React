
import { useCounter } from "../hooks/useCounter"


export const CounterAppWithHooks = () => {

    const {counter, increment, reset ,decrement } = useCounter();


  return (
    <>
        <h2>Counter:{counter}</h2>

        <button
        className="btn btn-primary"
        onClick={increment}>
            +1
        </button>
        <button
        className="btn btn-primary"
        onClick={reset}>
            Reset
        </button>
        <button
        className="btn btn-primary"
        onClick={decrement}>
            -1
        </button>
    </>
  )
}
