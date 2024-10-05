import React from 'react';

const AttendeeForm = ({ index, attendee, handleAttendeeChange, errors }) => {
  return (
    <div className="attendee-form">
      <input
        type="text"
        name="name"
        value={attendee.name}
        onChange={(e) => handleAttendeeChange(index, e)}
        placeholder="Attendee Name"
        className={errors[`name${index}`] ? 'error' : ''}
      />
      <input
        type="email"
        name="email"
        value={attendee.email}
        onChange={(e) => handleAttendeeChange(index, e)}
        placeholder="Attendee Email"
        className={errors[`email${index}`] ? 'error' : ''}
      />
      <input
        type="text"
        name="phone"
        value={attendee.phone}
        onChange={(e) => handleAttendeeChange(index, e)}
        placeholder="Attendee Phone"
        className={errors[`phone${index}`] ? 'error' : ''}
      />
    </div>
  );
};

export default AttendeeForm;
