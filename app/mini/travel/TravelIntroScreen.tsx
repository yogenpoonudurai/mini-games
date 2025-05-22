"use client";

import React from 'react';

interface TravelIntroScreenProps {
  onStartGame: (hasInsurance: boolean) => void;
}

const TravelIntroScreen: React.FC<TravelIntroScreenProps> = ({ onStartGame }) => {
  return (
    <div
      className="relative flex flex-col items-center justify-center h-screen w-screen p-4 text-center bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/beach-background.jpg)' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for readability */}
      <div className="relative z-10 flex flex-col items-center justify-center bg-white p-10 rounded-md text-black max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-blue-500">You're off to the beautiful Azure Coast!</h2>
        <p className="text-lg mb-8">Before you pack your bags, a local travel expert offers you 'The Global Trekker Shield' (Travel Insurance). What do you do?</p>
        <div className="flex flex-col gap-4">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full"
            onClick={() => onStartGame(true)}
          >
            YES! Equip the Global Trekker Shield for 100 Gold Coins.
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full"
            onClick={() => onStartGame(false)}
          >
            NO THANKS! I'm a lucky traveler, I'll save my Gold Coins.
          </button>
        </div>
      </div>
    </div>
  );
};

export default TravelIntroScreen;
