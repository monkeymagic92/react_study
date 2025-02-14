"use client"; // ✅ 클라이언트 컴포넌트로 지정
import "@/app/globals.css";

const test = () => {
    alert(1)
}

const MyButton = () => {
    return (
        <button onClick={test}>I;m a Button</button>
    )
}

export default function MyApp() {
    return (
        <div>
            <h1>Welcome to my app</h1>
            <MyButton />
        </div>
    )
}