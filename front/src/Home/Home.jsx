import React, { useEffect } from 'react';
import { analytics } from '../../firebase';
import { logEvent } from 'firebase/analytics';

function Home() {
  useEffect(() => {
    // Log the redirect event in Firebase Analytics
    logEvent(analytics, 'redirect_initiated', {
      destination: 'https://boldhairco.com',
      source: window.location.href,
    });

    // Redirect after 2.5 seconds
    const timer = setTimeout(() => {
      window.location.href = 'https://boldhairco.com';
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid mb-4"></div>
      <h1 className="text-xl font-semibold text-gray-800">Redirecting you to Bold Moves...</h1>
    </div>
  );
}

export default Home;
