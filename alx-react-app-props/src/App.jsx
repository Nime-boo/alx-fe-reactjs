import React, { useState } from 'react';
import { UserContext } from './components/UserContext'; // Correct import
import ProfilePage from './components/ProfilePage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import WelcomeMessage from './components/WelcomeMessage';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg'; // Ensure viteLogo is correctly referenced
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  // User data stored in context
  const userData = { 
    name: "Jane Doe", 
    email: "jane.doe@example.com",
    age: 30, 
    bio: "Software Engineer & Tech Enthusiast" 
  };

  return (
    <UserContext.Provider value={userData}>
      <div className="app-container">
        <Header />
        <MainContent />
        <Footer />

        <WelcomeMessage />
        {/* Remove props and let UserProfile consume Context */}
        <ProfilePage />

        <div className="logo-container">
          <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>

        <h1>Vite + React</h1>

        <div className="card">
          <button onClick={() => setCount((prev) => prev + 1)}>
            Count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>

        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </UserContext.Provider>
  );
}

export default App;
