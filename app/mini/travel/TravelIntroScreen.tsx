"use client";

import React from 'react';
import Image from "next/image"

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
      <div className="relative z-10 flex flex-col items-center justify-center bg-white p-2 rounded-md text-black max-w-md  overflow-auto">
        <h2 className="text-md lg:text-xl font-bold mb-4 text-blue-500">You&apos;re off to the beautiful Azure Coast!</h2>
        <p className="text-md mb-8 bg-amber-700 text-white p-4">Before you pack your bags, a local travel expert offers you <strong>The Global Trekker Shield (Travel Insurance)</strong> </p>
        <Image  alt="shield" src="/images/shield.png" width={200} height={80} />
        <div className="flex flex-col gap-4">
          <button
            className="bg-amber-400 text-amber-800 hover:bg-green-700 font-bold py-2 px-4 rounded w-full"
            onClick={() => onStartGame(true)}
          >
            YES! Equip the Global Trekker Shield for 100 Gold Coins.
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full"
            onClick={() => onStartGame(false)}
          >
            NO THANKS! I&apos;m a lucky traveler, I&apos;ll save my Gold Coins.
          </button>
        </div>
      </div>
    </div>
  );
};

export default TravelIntroScreen;
