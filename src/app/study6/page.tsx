"use client";
import '@/app/study.css';
import {useState} from 'react';

export default function Myapp() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Counters</h1>
            <MyButton count={count} onClick={handleClick} />
            <br />
            <MyButton count={count} onClick={handleClick} />
        </div>
    )
}

function MyButton({count, onClick})  {
    return (
        <button onClick={onClick}>
            Clicked {count} times
        </button>
    )
}