"use client";

import React, { useState, useEffect } from 'react';
import TravelIntroScreen from './TravelIntroScreen';
import EventCard from './EventCard';
import ResultScreen from './ResultScreen';

import Image from "next/image"

const events = [
  {
    scenario: "Oh no! Your flight to Azure Coast is delayed by 8 hours, and your luggage was sent to the wrong island!",
    image: "/images/lost-luggage.png",
    outcomeInsured: {
      message: "Phew! Your Global Trekker Shield covers the delayed flight expenses and helps track your luggage immediately. You even get a small allowance for essentials! +5 Happiness Points.",
      happinessChange: 5,
      goldChange: 0,
      avatar: "/images/happy-avatar.png",
    },
    outcomeUninsured: {
      message: "Ugh! You're stuck at the airport, hungry and without your swim trunks. You have to buy new clothes and pay for expensive airport food. -20 Happiness Points, -50 Gold Coins.",
      happinessChange: -20,
      goldChange: -50,
      avatar: "/images/sad-avatar.png",
    },
  },
  {
    scenario: "While snorkeling, you accidentally step on a sea urchin! Or, you slipped by the pool and twisted your ankle!",
    image: "/images/sea-urchin.png",
    outcomeInsured: {
      message: "Relief! Your Global Trekker Shield directs you to the best local clinic, covers all medical bills, and even arranges transport. +10 Happiness Points.",
      happinessChange: 10,
      goldChange: 0,
      avatar: "/images/happy-avatar.png",
    },
    outcomeUninsured: {
      message: "Ouch! Local medical care is expensive, and you have to pay out of pocket. Your vacation budget takes a huge hit! -30 Happiness Points, -100 Gold Coins.",
      happinessChange: -30,
      goldChange: -100,
      avatar: "/images/sad-avatar.png",
    },
  },
  {
    scenario: "Just as your vacation is hitting its peak, you receive urgent news from home requiring you to cut your trip short and return immediately!",
    image: "/images/trip-cancellation.png",
    outcomeInsured: {
      message: "Thankfully, your Global Trekker Shield covers the cost of your unused hotel nights and your emergency flight back home. You can focus on what matters. +8 Happiness Points.",
      happinessChange: 8,
      goldChange: 0,
      avatar: "/images/happy-avatar.png",
    },
    outcomeUninsured: {
      message: "This is tough. You lose out on all the money spent on the rest of your trip, and finding a last-minute flight is incredibly expensive! -40 Happiness Points, -150 Gold Coins.",
      happinessChange: -40,
      goldChange: -150,
      avatar: "/images/sad-avatar.png",
    },
  },
];

const GameContainer = () => {
  const [hasTravelInsurance, setHasTravelInsurance] = useState(false);
  const [goldCoins, setGoldCoins] = useState(500); // Starting with some gold coins
  const [happinessPoints, setHappinessPoints] = useState(100); // Starting with some happiness points
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [gamePhase, setGamePhase] = useState('intro'); // 'intro', 'journey', 'result'

  const handleStartGame = (hasInsurance: boolean) => {
    setHasTravelInsurance(hasInsurance);
    if (hasInsurance) {
      setGoldCoins(prev => prev - 100); // Deduct cost of insurance
    }
    setGamePhase('journey'); // Transition to journey phase
  };

  const handleNextEvent = (happinessChange: number, goldChange: number) => {
    setHappinessPoints(prev => prev + happinessChange);
    setGoldCoins(prev => prev + goldChange);

    if (currentEventIndex < events.length - 1) {
      setCurrentEventIndex(prev => prev + 1);
    } else {
      setGamePhase('result'); // All events played, go to result screen
    }
  };

  const handleReplay = () => {
    setHasTravelInsurance(false);
    setGoldCoins(500);
    setHappinessPoints(100);
    setCurrentEventIndex(0);
    setGamePhase('intro');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-gray-100">
      <div className="absolute top-4 left-4 text-sm text-gray-400 z-10">
        <div className='grid grid-cols-4 gap-4 items-center text-white font-bold text-xl'>
        <div>Phase: {gamePhase}</div>
        <div className='flex flex-row items-center space-x-2'><Image src="/images/coin.png" alt='coin' width={40} height={40}></Image> <div>{goldCoins}</div></div>
        <div className='flex flex-row items-center space-x-2'><Image src="/images/happy.png" alt='happy' width={40} height={40}></Image> <div>{happinessPoints}</div></div>
        <div className='flex flex-row items-center space-x-2'><Image src="/images/insurance.png" alt='coin' width={40} height={40} className={hasTravelInsurance ? "opacity-100": "opacity-0"}></Image> <div>{hasTravelInsurance}</div></div>
        </div>

      </div>

      {gamePhase === 'intro' && (
        <TravelIntroScreen onStartGame={handleStartGame} />
      )}
      {gamePhase === 'journey' && (
        <EventCard
          event={events[currentEventIndex]}
          hasTravelInsurance={hasTravelInsurance}
          onNextEvent={handleNextEvent}
        />
      )}
      {gamePhase === 'result' && (
        <ResultScreen
          goldCoins={goldCoins}
          happinessPoints={happinessPoints}
          hasTravelInsurance={hasTravelInsurance}
          onReplay={handleReplay}
        />
      )}
    </div>
  );
};

export default GameContainer;
