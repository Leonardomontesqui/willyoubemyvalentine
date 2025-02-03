"use client";

import { useRouter } from "next/navigation";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ValentinePage() {
  const router = useRouter();
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });

  const moveNoButton = () => {
    const maxX = 650;
    const maxY = 300;

    setNoButtonPosition({
      x: Math.random() * (Math.random() < 0.5 ? -maxX : maxX),
      y: Math.random() * (Math.random() < 0.5 ? -maxY : maxY),
    });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-pink-100">
      <div className="text-center p-8 bg-pink-300 rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold text-pink-800 mb-4">
          Will you be my valentine?
        </h1>
        <img src="/horseFlowers.jpg" className="h-[300px] mx-auto" />
        <div className="flex justify-center space-x-4 mt-6">
          <button
            onClick={() => router.push("/letsgoooooo")}
            className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
          >
            Yes
          </button>
          <motion.button
            animate={{ x: noButtonPosition.x, y: noButtonPosition.y }}
            onMouseEnter={moveNoButton}
            className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600"
            onClick={() => router.push("/damn")}
          >
            No
          </motion.button>
        </div>
      </div>
    </div>
  );
}
