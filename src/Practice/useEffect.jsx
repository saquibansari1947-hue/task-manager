import { useState, useEffect } from "react";

const useEffectPractice = () => {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    useEffect(() => {
        setCalculation(() => count * 2);
    }, [count]);
    // useEffect(() => {
    //     let timer = setTimeout(() => {
    //         setCount((count) => count + 1);
    //     }, 1000);
    // });
    return(
        <div>
            <h1>Use Effect Practice</h1>
            <h2>Count: {count}</h2>
            <h2>Calculation: {calculation}</h2>
            <button onClick={() => setCount((c) => c + 1)}>+</button>
        </div>
    );
}

export default useEffectPractice;