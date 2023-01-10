// sample with useReducer
import React, {useState, useCallback, useMemo} from 'react'

const SampleOfUseMemo = props => {
    const [count, setCount] = useState(0);
    const [todo, setTodo] = useState([]);

    // in this senario when you click addTodo count does not change but because the page re-render due to state change. 
    // this calculation happens again and make shit in terms of performance.
    // const calculation = expensiveCalculation(count)


    // To fix this performance issue, we can use the useMemo Hook to memoize the expensiveCalculation function. This will cause the function to only run when needed.
    // We can wrap the expensive function call with useMemo.
    // The useMemoHook accepts a second parameter to declare dependencies. The expensive function will only run when its dependencies have changed.
    // In the following example, the expensive function will only run when count is changed and not when todo's are added.
    // Calc function is memoized also they way it handled is kind of tricky way
    const calculation = useMemo(() => expensiveCalculation(count), [count])  

    const increment = () => {
        setCount((c) => c + 1);
    }
    const addTodo = () => {
        setTodo((t) => [...t, "New Todo"]);
    }

    return (
        <div>
            <div>
                <h2>My Todo</h2>
                {todo.map((todo, index) => {
                return <p key={index}>{todo}</p>;
                })}
                <button onClick={addTodo}>Add Todo</button>
            </div>
            <hr />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
                <h2>Expensive Calculation</h2>
                {calculation}
            </div>
        </div>
    )
}
export default SampleOfUseMemo

const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
};

