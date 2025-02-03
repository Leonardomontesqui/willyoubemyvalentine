"use client";
import React from "react";
import { useState } from "react";

export default function page() {
  const [funnierPhoto, setFunnierPhoto] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-100 gap-2">
      <div className="felx flex-col text-center p-8 bg-pink-300 rounded-lg shadow-xl gap-2">
        <h1 className="text-3xl font-bold text-pink-800 mb-4">NOOOOOOO</h1>
        <button
          onClick={() => setFunnierPhoto(true)}
          className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
        >
          Click me
        </button>
        {funnierPhoto ? (
          <img src="/astridFunny.png" className="h-[300px] mx-auto" />
        ) : (
          <img src="/damn2.jpg" className="h-[300px] mx-auto" />
        )}
      </div>
    </div>
  );
}
