// sample with useReducer
import React, {useState, useCallback} from 'react'
import Todos from './todos'

const SampleOfUseCallback = props => {
    const [count, setCount] = useState(0);
    const [todo, setTodo] = useState([]);

    const increment = () => {
        setCount((c) => c + 1);
    }

    //this is the currect version and usage of addTodo function inside inside useCallback 
    // in order to prevent re-render in child component when this component re-render and this function re-create,

    const addTodo = useCallback(() => {
        setTodo((t) => [...t, "New Todo"]);
    }, [todo])


    //this version of this function is not good. because whenever this component re-render it will re-create. 
    // this re-creation assumed update on prop in child component  'Todos' and aslo make it re-render which is shit. 
    // so put it inside of useCallback and set todos state as dependecy in array of dependencies 
    // so it memoized and prevent re-render in child component
    // const addTodo = () => {
    //     setTodos((t) => [...t, "New Todo"]);
    // }

    return (
        <>
            <Todos todo={todo} addTodo={addTodo} />
            <hr />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
            </div>
        </>
    )
}
export default SampleOfUseCallback
