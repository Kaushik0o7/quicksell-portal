import React from 'react';
import iconUser from '../assets/Display.svg';
import iconPriority from '../assets/Img - High Priority.svg';

const priorityLabels = ['No priority', 'Low', 'Medium', 'High', 'Urgent'];

const TicketCard = ({ ticket, userMap }) => (
  <div className="ticket-card">
    <h4>{ticket.title}</h4>
    <p>
      <img src={iconUser} alt="User" /> Assigned to: {userMap[ticket.userId]}
    </p>
    <p>
      <img src={iconPriority} alt="Priority" /> Priority: {priorityLabels[ticket.priority]}
    </p>
    <p>Status: {ticket.status}</p>
  </div>
);

export default TicketCard;
