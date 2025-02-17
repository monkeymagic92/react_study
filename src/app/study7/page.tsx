"use client";
import '@/app/study.css';
import Gallery, { Profile } from './Gallery.js';  // default + named export 동시 import

export default function App() {
  return (
    <>
      <Profile />
      <Gallery />
    </>
  );
}
