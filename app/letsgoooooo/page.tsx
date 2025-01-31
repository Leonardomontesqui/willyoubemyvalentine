import React from "react";

export default function page() {
  return (
    <div className="flex items-center justify-center h-screen bg-pink-100">
      <div className="text-center p-8 bg-pink-300 rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold text-pink-800 mb-4">
          Dinner and Boba at my place?
        </h1>
        <img src="/happyHorses.jpg" className="h-[300px] mx-auto" />
      </div>
    </div>
  );
}
