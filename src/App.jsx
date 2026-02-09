import React, { useState } from 'react';
import Layout from './components/Layout';
import ScreenLeadGen from './screens/ScreenLeadGen';
import ScreenStrategic from './screens/ScreenStrategic';
import ScreenClosing from './screens/ScreenClosing';

// Placeholder components until screens are implemented
const Placeholder = ({ title }) => (
  <div style={{ padding: '20px' }}>
    <h2>{title}</h2>
    <p>Work in progress...</p>
  </div>
);

import LoginScreen from './screens/LoginScreen';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentScreen, setCurrentScreen] = useState('lead-gen');

  if (!isAuthenticated) {
    return <LoginScreen onLogin={() => setIsAuthenticated(true)} />;
  }

  // Simple router for now
  const renderScreen = () => {
    switch (currentScreen) {
      case 'lead-gen':
        return <ScreenLeadGen currentStage={currentScreen} onStageChange={setCurrentScreen} />;
      case 'strategic':
        return <ScreenStrategic currentStage={currentScreen} onStageChange={setCurrentScreen} />;
      case 'closing':
        return <ScreenClosing currentStage={currentScreen} onStageChange={setCurrentScreen} />;
      default:
        return <ScreenLeadGen currentStage={currentScreen} onStageChange={setCurrentScreen} />;
    }
  };

  return (
    // For now, we render the current screen's full layout within that screen component
    // OR we pass the columns to the Layout here.
    // The design implies different 3-column content per screen.
    // So the Screen component should likely return the 3 columns or use the Layout internally.
    // Let's have the Screen component use the Layout.
    renderScreen()
  );
}

export default App;
