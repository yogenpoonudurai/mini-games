"use client";

import React from 'react';

interface ResultScreenProps {
  goldCoins: number;
  happinessPoints: number;
  hasTravelInsurance: boolean;
  onReplay: () => void;
  onViewSummary: () => void; // Added new prop
}

const ResultScreen: React.FC<ResultScreenProps> = ({ goldCoins, happinessPoints, hasTravelInsurance, onReplay, onViewSummary }) => {
  let message = "";

  if (hasTravelInsurance) {
    message = `Your Azure Coast adventure was saved by the Global Trekker Shield! You handled every challenge like a true guardian.`;
  } else {
    if (happinessPoints >= 80 && goldCoins >= 400) { // A threshold for a "lucky" outcome
      message = `Wow, you got incredibly lucky! No major mishaps on this trip. But remember, not every journey is this smooth!`;
    } else {
      message = `Your Azure Coast trip had its ups and downs. Without a Shield, those unexpected events cost you dearly!`;
    }
  }

  return (
    <div
      className="relative flex flex-col items-center justify-center h-screen w-screen p-4 text-center bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/beach-background.jpg)' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for readability */}
      <div className="relative z-10 flex flex-col items-center justify-center p-4 text-center bg-gray-800 rounded-lg shadow-lg max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">Journey Complete!</h2>
        <p className="text-lg text-gray-300 mb-2">Final Gold Coins: {goldCoins}</p>
        <p className="text-lg text-gray-300 mb-8">Final Happiness Points: {happinessPoints}</p>
        <p className="text-md text-gray-400 mb-8">{message}</p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={onReplay}
          >
            Play Again
          </button>
          <button
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            onClick={onViewSummary}
          >
            View Summary
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultScreen;
