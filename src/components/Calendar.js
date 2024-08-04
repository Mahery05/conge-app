import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calendar = ({ conges }) => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="bg-white p-4 rounded shadow-md mb-4">
      <h2 className="text-xl font-bold mb-2">Calendrier des Congés</h2>
      <Calendar
        onChange={setDate}
        value={date}
        tileClassName={({ date, view }) => {
          if (view === 'month') {
            const dateString = date.toISOString().split('T')[0];
            const isHoliday = conges.some(conge => conge.date === dateString);
            return isHoliday ? 'bg-green-500 text-white' : null;
          }
        }}
      />
    </div>
  );
};

export default Calendar;
