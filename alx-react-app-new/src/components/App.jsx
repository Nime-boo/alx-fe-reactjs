import { useState } from 'react'; 
import UserProfile from './components/UserProfile';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import WelcomeMessage from './components/WelcomeMessage';
import reactLogo from './assets/react.svg';
import viteLogo from "./assets/vite.svg";
import './App.css';
import Counter from './components/Counter';  // Import Counter component

function App() {
  return (
    <div className="app-container">
      {/* Header and Main Content */}
      <Header />
      <MainContent />
      <WelcomeMessage />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <Footer />

      {/* Logos */}
      <div className="logos">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
      {/* Counter Section */}
      <h1>Vite + React</h1>
      <div className="card">
        <Counter /> {/* Replaced previous count button with the Counter component */}
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
