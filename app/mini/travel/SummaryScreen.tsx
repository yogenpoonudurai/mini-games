"use client";

import React from 'react';
import Image from 'next/image';
import { events } from './GameContainer';

interface Event {
  scenario: string;
  image: string;
  outcomeInsured: {
    message: string;
    happinessChange: number;
    goldChange: number;
    avatar: string;
  };
  outcomeUninsured: {
    message: string;
    happinessChange: number;
    goldChange: number;
    avatar: string;
  };
}

interface SummaryScreenProps {
  hasTravelInsurance: boolean;
  onReplay: () => void;
}

const SummaryScreen: React.FC<SummaryScreenProps> = ({ onReplay }) => {
  return (
    <div
      className="relative flex flex-col items-center justify-center h-screen w-screen p-4 text-center bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/beach-background.jpg)' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for readability */}
      <div className="relative z-10 flex flex-col items-center justify-start p-4 text-center bg-gray-800 rounded-lg shadow-lg max-w-2xl mx-auto h-full overflow-y-auto">
        <h2 className="text-3xl font-bold text-gray-100 mb-6">Journey Summary</h2>

        {events.map((event: Event, index: number) => (
          <div key={index} className="mb-8 p-4 border border-gray-700 rounded-lg w-full">
            <h3 className="text-xl font-semibold text-gray-100 mb-2">Event {index + 1}: {event.scenario}</h3>
            <Image src={event.image} alt="Event illustration" width={200} height={150} className="mx-auto mb-4" />

            <div className="mb-4">
              <h4 className="text-lg font-medium text-gray-200 mb-2">With Insurance:</h4>
              <p className="text-md text-gray-300">{event.outcomeInsured.message}</p>
              <p className="text-sm text-gray-400">
                Happiness: {event.outcomeInsured.happinessChange > 0 ? '+' : ''}{event.outcomeInsured.happinessChange},
                Gold: {event.outcomeInsured.goldChange > 0 ? '+' : ''}{event.outcomeInsured.goldChange}
              </p>
              <Image src={event.outcomeInsured.avatar} alt="Happy avatar" width={50} height={50} className="mx-auto mt-2" />
            </div>

            <div>
              <h4 className="text-lg font-medium text-gray-200 mb-2">Without Insurance:</h4>
              <p className="text-md text-gray-300">{event.outcomeUninsured.message}</p>
              <p className="text-sm text-gray-400">
                Happiness: {event.outcomeUninsured.happinessChange > 0 ? '+' : ''}{event.outcomeUninsured.happinessChange},
                Gold: {event.outcomeUninsured.goldChange > 0 ? '+' : ''}{event.outcomeUninsured.goldChange}
              </p>
              <Image src={event.outcomeUninsured.avatar} alt="Sad avatar" width={50} height={50} className="mx-auto mt-2" />
            </div>
          </div>
        ))}

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8"
          onClick={onReplay}
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default SummaryScreen;
