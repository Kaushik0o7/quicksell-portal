import React from 'react';
import Column from './Column';

const Board = ({ tickets, groupBy, sortBy, userMap }) => {
  const groupedTickets = tickets.reduce((acc, ticket) => {
    const key = groupBy === 'user' ? userMap[ticket.userId] : ticket[groupBy];
    if (!acc[key]) acc[key] = [];
    acc[key].push(ticket);
    return acc;
  }, {});

  const sortedTickets = Object.entries(groupedTickets).map(([key, ticketList]) => ({
    key,
    tickets: ticketList.sort((a, b) => 
      sortBy === 'priority' ? b.priority - a.priority : a.title.localeCompare(b.title)
    ),
  }));

  return (
    <div className="board">
      {sortedTickets.map(({ key, tickets }) => (
        <Column key={key} title={key} tickets={tickets} userMap={userMap} />
      ))}
    </div>
  );
};

export default Board;
