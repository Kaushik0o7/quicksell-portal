import React from 'react';
import TicketCard from './TicketCard';

const Column = ({ title, tickets, userMap }) => (
  <div className="column">
    <h3>{title}</h3>
    {tickets.map(ticket => (
      <TicketCard key={ticket.id} ticket={ticket} userMap={userMap} />
    ))}
  </div>
);

export default Column;
