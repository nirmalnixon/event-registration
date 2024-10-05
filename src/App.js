import React, { useState } from 'react';
import AttendeeForm from './components/AttendeeForm';
import './App.css';

const App = () => {
  const [attendees, setAttendees] = useState([{ name: '', email: '', phone: '' }]);
  const [errors, setErrors] = useState({});

  const [error, setError] = useState();

  const handleAttendeeChange = (index, e) => {

    setError('');

    if (!e.target.value) {
      setError('Please enter value')
    }

    const updatedAttendees = [...attendees];
    updatedAttendees[index][e.target.name] = e.target.value;
    setAttendees(updatedAttendees);
  };

  const addAttendee = () => {
    setAttendees([...attendees, { name: '', email: '', phone: '' }]);
  };

  const emailRegex = /\S+@\S+\.\S+/;
  const phoneRegex = /^[0-9]{10}$/;

  const validateForm = () => {
    const validationErrors = {};
    attendees.forEach((attendee, index) => {
      if (!attendee.name) validationErrors[`name${index}`] = true;
      if (!emailRegex.test(attendee.email))
        validationErrors[`email${index}`] = true;
      if (!phoneRegex.test(attendee.phone))
        validationErrors[`phone${index}`] = true;
    });
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Registration successful');
      console.log('Registered attendees:', attendees);
    } else {
      alert('Please correct the errors');
    }
  };

  return (
    <div className="app">
      <h1>Event Registration</h1>
      <form onSubmit={handleSubmit}>
        {attendees.map((attendee, index) => (
          <AttendeeForm
            key={index}
            index={index}
            attendee={attendee}
            handleAttendeeChange={handleAttendeeChange}
            errors={errors}
          />
        ))}
        <button type="button" onClick={addAttendee}>
          Add Attendee
        </button>
        <button disabled={validateForm} type="submit">Submit</button>
        <span className='error-text'>  {error}</span>
        {errors.length >= 0 ? <span>Please correct the errors</span> : ""}
      </form>
    </div>
  );
};

export default App;