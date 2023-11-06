import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../../slices/employeeSlice';
import * as datipiReact from 'datipi-react';
import { useSelector } from 'react-redux';
import { states } from '../../data/states';

/**
 * Component representing the Create Employee page.
 * @component
 * @returns {JSX.Element} Component for creating a new employee.
 */
const CreateEmployee = () => {

  // Use a console.log to display the global state
  const employees = useSelector(state => state.employeeReduc.employees);
  console.log('Employee state in CreateEmployee:', employees);

  // Use useState to manage the values of input fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [startDate, setStartDate] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [selectedState, setSelectedState] = useState(null);
  const [zipCode, setZipCode] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  /**
   * A hook that initializes DateTimePickers when the component mounts
   * and destroys them when the component unmounts.
   */
  useEffect(() => {
    datipiReact.initDateTimePicker(
      '#date-of-birth',
      {
        format: 'Y-m-d'
      },
      setDateOfBirth);

    datipiReact.initDateTimePicker(
      '#start-date',
      {
        format: 'Y-m-d'
      },
      setStartDate);

    return () => {
      datipiReact.destroyDateTimePicker('#date-of-birth');
      datipiReact.destroyDateTimePicker('#start-date');
    };
  }, []);

  /**
   * Handles the save action for creating a new employee.
   * @param {Event} event - The click event.
   */
  const dispatch = useDispatch();
  const handleSave = (event) => {
    event.preventDefault();
    const newEmployee = {
      firstName,
      lastName,
      dateOfBirth,
      startDate,
      street,
      city,
      state: selectedState ? selectedState.value : null,
      zipCode,
      department: selectedDepartment ? selectedDepartment.value : null,
    };
    console.log('Updated state:', newEmployee);

    dispatch(addEmployee(newEmployee));
  };

  // Event handler functions to update local states
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleStreetChange = (event) => {
    setStreet(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleStateChange = (selectedOption) => {
    setSelectedState(selectedOption);
  };

  const handleZipCodeChange = (event) => {
    setZipCode(event.target.value);
  };
  
  const handleDepartmentChange = (selectedOption) => {
    setSelectedDepartment(selectedOption);
  };

  /**
   * Options for the State dropdown.
   * @type {Array.<{value: string, label: string}>}
   */
  const options = states.map(state => ({
    value: state.abbreviation,
    label: state.name
  }));

  /**
   * Options for the Department dropdown.
   * @type {Array.<{value: string, label: string}>}
   */
  const departmentOptions = [
    { value: 'Sales', label: 'Sales' },
    { value: 'Marketing', label: 'Marketing' },
    { value: 'Engineering', label: 'Engineering' },
    { value: 'Human Resources', label: 'Human Resources' },
    { value: 'Legal', label: 'Legal' },
  ];

  return (
    <>
      <div>
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="/list">View Current Employees</Link>
        <h2>Create Employee</h2>
        <form action="#" id="create-employee">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            value={firstName}
            onChange={handleFirstNameChange}
          />

          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            value={lastName}
            onChange={handleLastNameChange}
          />

          <label htmlFor="date-of-birth">Date of Birth</label>
          <input
            id="date-of-birth"
            type="text"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />

          <label htmlFor="start-date">Start Date</label>
          <input
            id="start-date"
            type="text"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input
              id="street"
              type="text"
              value={street}
              onChange={handleStreetChange}
            />

            <label htmlFor="city">City</label>
            <input
              id="city"
              type="text"
              value={city}
              onChange={handleCityChange}
            />

            <label htmlFor="state">State</label>
            <Select
              name="state"
              id="state"
              options={options}
              value={selectedState}
              onChange={handleStateChange}
            />

            <label htmlFor="zip-code">Zip Code</label>
            <input
              id="zip-code"
              type="number"
              value={zipCode}
              onChange={handleZipCodeChange}
            />
          </fieldset>

          <label htmlFor="department">Department</label>
          <Select
            name="department"
            id="department"
            options={departmentOptions}
            value={selectedDepartment}
            onChange={handleDepartmentChange}
          />
        </form>
        <button onClick={handleSave}>Save</button>

      </div>
    </>
  );
};

export default CreateEmployee;
