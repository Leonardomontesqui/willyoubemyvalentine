"use client";
import React from "react";
import Image from "next/image";

export default function Page() {
  const [showFunnyPhoto, setShowFunnyPhoto] = React.useState(false);
  return (
    <div className="flex items-center justify-center h-screen bg-pink-100">
      <div className="text-center p-8 bg-pink-300 rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold text-pink-800 mb-4">
          Friday 6:00pm! Poutine then Brother Bear at my place :D
        </h1>

        <button
          onClick={() => setShowFunnyPhoto(!showFunnyPhoto)}
          className="px-4 py-2 bg-rose-400 text-white rounded-lg hover:bg-rose-500"
        >
          Click me
        </button>
        {showFunnyPhoto ? (
          <Image
            src="/astridFunny.png"
            className="h-[300px] mx-auto"
            alt={"wait"}
          />
        ) : (
          <Image
            src="/happyHorses.jpg"
            className="h-[300px] mx-auto"
            alt={"wait"}
          />
        )}
        {showFunnyPhoto ? (
          <p className="text-center text-pink-800"> Great Photo</p>
        ) : (
          <p className="hidden"> Great Photo</p>
        )}
      </div>
    </div>
  );
}
