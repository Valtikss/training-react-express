import React, { useState, useEffect } from 'react';

// SERVICES
import { getTest } from './services/testService';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await getTest();
        setMessage(response.data.message);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchMessage();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-primary">
        {message}
      </h1>
    </div>
  )
}

export default App
