import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TestBackendConnectivity = () => {
  const [connectionStatus, setConnectionStatus] = useState('');

  useEffect(() => {
    const testBackend = async () => {
      try {
        const response = await axios.get('/api/test'); // Replace '/api/test' with the actual endpoint in your backend
        console.log('Backend response:', response.data);
        setConnectionStatus('Connection to backend successful!');
      } catch (error) {
        console.error('Error connecting to backend:', error.message);
        setConnectionStatus('Error connecting to backend. Please check console for details.');
      }
    };

    testBackend();
  }, []);

  return (
    <div>
      <h2>Testing Backend Connectivity</h2>
      <p>{connectionStatus}</p>
    </div>
  );
};

export default TestBackendConnectivity;
