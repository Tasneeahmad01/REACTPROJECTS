import React, { useEffect, useState } from 'react';

const Timer = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCount((prevCount) => prevCount + 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, [count]); 

    return <h1>I have rendered {count} times</h1>;
};

const Num = () => {
    const [num, setNum] = useState(0);

    useEffect(() => {
        document.title = `You clicked me ${num} times`;
    }, [num]); 
    return (
        <div>
            <button onClick={() => setNum(num + 1)}>Click me {num}</button>
            <Timer />
        </div>
    );
};

export default Num;
