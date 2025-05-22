"use client";

import React from 'react';
import Image from 'next/image';

interface EventCardProps {
  event: {
    scenario: string;
    image: string; // Added image property
    outcomeInsured: {
      message: string;
      happinessChange: number;
      goldChange: number;
      avatar: string; // Added avatar property
    };
    outcomeUninsured: {
      message: string;
      happinessChange: number;
      goldChange: number;
      avatar: string; // Added avatar property
    };
  };
  hasTravelInsurance: boolean;
  onNextEvent: (happinessChange: number, goldChange: number) => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, hasTravelInsurance, onNextEvent }) => {
  const currentOutcome = hasTravelInsurance ? event.outcomeInsured : event.outcomeUninsured;

  return (
    <div className="flex flex-col items-center justify-center p-4 text-md  text-center bg-gray-800 rounded-lg shadow-lg w-full  mx-auto h-auto py-10 max-w-[90%] mt-4">
      <h2 className="text-2xl font-bold text-gray-100 mb-4">Event!</h2>
      <Image src={event.image} alt="Event illustration" width={200} height={150} className="mb-4 rounded-md" />
      <p className="text-lg text-gray-300 mb-8">{event.scenario}</p>
      <Image src={currentOutcome.avatar} alt="Avatar reaction" width={150} height={250} className="mb-4 rounded-md" />
      <p className="text-md text-gray-400 mb-8">{currentOutcome.message}</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => onNextEvent(currentOutcome.happinessChange, currentOutcome.goldChange)}
      >
        Continue
      </button>
    </div>
  );
};

export default EventCard;
