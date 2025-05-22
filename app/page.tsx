"use client";

import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-gray-100">
      <h1 className="text-4xl font-bold text-gray-100 mb-6">Welcome to Insureku Mini-Games!</h1>
      <p className="text-lg text-gray-300 mb-8">Choose your adventure:</p>
      <Link href="/mini/travel" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-xl">
        The Unpredictable Journey (Travel Game)
      </Link>
    </div>
  );
}
