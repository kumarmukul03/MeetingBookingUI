import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [values, setValues] = useState({
    meetingPurpose: '',
    meetingDescription: '',
    meetingDate: '',
    meetingTime: '',
    firstName: '',
    lastName: '',
    country: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleMeetingPurposeInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      meetingPurpose: event.target.value,
    }));
  };

  const handleMeetingDescriptionInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      meetingDescription: event.target.value,
    }));
  };

  const handleMeetingDateInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      meetingDate: event.target.value,
    }));
  };

  const handleMeetingTimeInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      meetingTime: event.target.value,
    }));
  };

  const handleFirstNameInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      firstName: event.target.value,
    }));
  };

  const handleLastNameInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      LastName: event.target.value,
    }));
  };

  const handleCountryInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      country: event.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(values.meetingPurpose && values.meetingDescription && values.meetingDate && values.meetingTime && values.firstName && values.lastName && values.country) {
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
        {submitted && valid ? <div class='success-message'>Success! Thank you for registering</div> : null}
        <input
          id="meeting-purpose"
          class="form-field"
          type="text"
          placeholder="Meeting Purpose"
          name="meetingPurpose"
          value={values.meetingPurpose}
          onChange={handleMeetingPurposeInputChange}
        />
        {submitted && !values.meetingPurpose ? <span id="meeting-purpose-error">Please enter meeting purpose</span> : null}
        <input
          id="meeting-description"
          class="form-field"
          type="text"
          placeholder="Meeting Description"
          name="meetingDescription"
          value={values.meetingDescription}
          onChange={handleMeetingDescriptionInputChange}
        />
        {submitted && !values.meetingDescription ? <span id="meeting-description-error">Please enter meeting description</span> : null}
        <input
          id="meeting-date"
          class="form-field"
          type="date"
          placeholder="Meeting Date"
          name="meetingDate"
          value={values.meetingDate}
          onChange={handleMeetingDateInputChange}
        />
        {submitted && !values.meetingDate ? <span id="meeting-date-error">Please enter meeting date</span> : null}
        <input
          id="meeting-time"
          class="form-field"
          type="time"
          placeholder="Meeting Time"
          name="meetingTime"
          value={values.meetingTime}
          onChange={handleMeetingTimeInputChange}
        />
        {/* Uncomment the next line to show the error message */}
        {submitted && !values.meetingTime ? <span id="meeting-time-error">Please enter meeting time</span> : null}
        <input
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={values.firstName}
          onChange={handleFirstNameInputChange}
        />
        {submitted && !values.firstName ? <span id="first-name-error">Please enter a first name</span> : null}
        <input
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={values.lastName}
          onChange={handleLastNameInputChange}
        />
        {submitted && !values.lastName ? <span id="last-name-error">Please enter a last name</span> : null}
        <input
          id="country"
          class="form-field"
          type="text"
          placeholder="Country"
          name="country"
          value={values.country}
          onChange={handleCountryInputChange}
        />
        {submitted && !values.country ? <span id="country-error">Please enter country</span> : null}
        <button class="form-field" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
