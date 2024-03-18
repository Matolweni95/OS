import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


const App = () => {
  const detectOS = () => {
    const platform = navigator.platform.toLowerCase();
    if (platform.includes('win')) {
      return 'Windows';
    } else if (platform.includes('mac')) {
      return 'MacOS';
    } else if (platform.includes('linux')) {
      return 'Linux';
    } else {
      return 'Unknown';
    }
  };

  return (
    <div>
      <h2>Your operating system is: {detectOS()}</h2>
    </div>
  );
};

export default App
