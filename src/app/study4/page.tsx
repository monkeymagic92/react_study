"use client"; // ✅ 클라이언트 컴포넌트로 지정

import '@/app/study.css';

function MyButton() {
  function handleClick() {
    alert("You clicked me!");
  }

  return (
    <>
      <button onClick={handleClick}>
        Click me
      </button>
    </>
  );
}

// 컴포넌트 기반으로 바로 함수 자체를 export 할때
export default MyButton;