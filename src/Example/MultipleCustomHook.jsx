import { useCounter } from "../hooks/useCounter"
import { useFetch } from "../hooks/useFetch"
import { LoadingQuote } from "./LoadingQuote"
import { Quote } from "./Quote"


export const MultipleCustomHook = () => {

    const {counter, increment, decrement} = useCounter()

    const {data, isLoading, hasError} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
    
    const {quote, author} = !!data && data[0]

    
    
    return (
        <>
        <h1>Breaking Bad Quotes</h1>
        {
            isLoading 
                ?<LoadingQuote />
                : <Quote quote={quote} author={author} />
            
        }
        <button className="btn btn-primary" 
            onClick={decrement}
            disabled = {isLoading || counter===1}
            >Previous quote
        </button>
        <button className="btn btn-primary" 
            onClick={increment}
            disabled = {isLoading}
            >Next quote
        </button>
    </>
  )
}
