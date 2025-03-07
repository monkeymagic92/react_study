"use client";
import '@/app/study.css';
import {useState} from 'react';

function MyButton() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);;
    }

    return (
        <button onClick={handleClick}>
            Click {count} times
        </button>
    )
}

export default function MyApp() {
    return (
        <>
            <h1>Counters that update separately</h1>
            <MyButton />
            <MyButton />
        </>
    )
}