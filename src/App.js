import React from 'react';
import Login from './Login';
import Register from './Register';
import TestBackendConnectivity from './TestBackendConnectivity'; // Import the TestBackendConnectivity component

const App = () => {
  return (
    <div>
      <Login />
      <Register />
      <TestBackendConnectivity /> {/* Render the TestBackendConnectivity component */}
    </div>
  );
};

export default App;
