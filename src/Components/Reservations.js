import React from 'react';

const Reservations = () => {
  const reservations = [
    { id: 1, customer: 'Charlie', date: '2024-09-12', time: '7:00 PM', people: 4 },
    { id: 2, customer: 'David', date: '2024-09-13', time: '6:00 PM', people: 2 },
  ];

  return (
    <div className="reservations">
      <h2>Reservations</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Time</th>
            <th>People</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation) => (
            <tr key={reservation.id}>
              <td>{reservation.id}</td>
              <td>{reservation.customer}</td>
              <td>{reservation.date}</td>
              <td>{reservation.time}</td>
              <td>{reservation.people}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reservations;