import React, { useState } from 'react';
import Board from './components/Board';
import DisplayOptions from './components/DisplayOptions';
import data from './data/tickets.json';
import './App.css';


const App = () => {
  const [groupBy, setGroupBy] = useState('status');
  const [sortBy, setSortBy] = useState('priority');

  // Ensure data has expected structure
  const tickets = data?.tickets || [];
  const users = data?.users || [];

  // Handle empty data scenario
  if (tickets.length === 0 || users.length === 0) {
    return <p>Loading data failed or no data available.</p>;
  }

  // Map user IDs to names for easy reference
  const userMap = users.reduce((acc, user) => {
    acc[user.id] = user.name;
    return acc;
  }, {});

  return (
    <div className="app">
    
      <h1>Quicksell Portal</h1>
      <DisplayOptions groupBy={groupBy} setGroupBy={setGroupBy} sortBy={sortBy} setSortBy={setSortBy} />
      <Board tickets={tickets} groupBy={groupBy} sortBy={sortBy} userMap={userMap} />
    </div>
  );
};

export default App;
