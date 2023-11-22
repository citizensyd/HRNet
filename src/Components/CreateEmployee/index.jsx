import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../../slices/employeeSlice';
import { useSelector } from 'react-redux';
import { states } from '../../data/states';
import 'react-calendar/dist/Calendar.css';
import { Button, TextField, FormControl, FormLabel, Select, InputLabel, MenuItem } from '@mui/material';
import { Modal } from 'test-modal-for-me'
import { ContainerStyles, FormStyles, CalendarContainer, StyledModal } from './index.styles';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns/AdapterDateFns.js';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { StyleSheetManager } from 'styled-components';

/**
 * Component representing the Create Employee page.
 *
 * This component provides a form for creating a new employee and includes various input fields
 * such as first name, last name, date of birth, and more. It also handles the submission of the form
 * and displays a modal when an employee is successfully created.
 *
 * @component
 * @returns {JSX.Element} The component for creating a new employee.
 */
const CreateEmployee = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to update the date of birth when a date is selected in the calendar
  const handleDateChange = (date, setDate) => {
    const dateAsJavaScriptDate = new Date(date);
    setDate(dateAsJavaScriptDate);
  };


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Use a console.log to display the global state
  const employees = useSelector(state => state.employeeReduc.employees);
  console.log('Employee state in CreateEmployee:', employees);

  // Use useState to manage the values of input fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');

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
      dateOfBirth: dateOfBirth ? dateOfBirth.toISOString() : "",
      startDate: startDate ? startDate.toISOString() : "",
      street,
      city,
      state: selectedState,
      zipCode,
      department: selectedDepartment,
    };
    console.log('Updated state:', newEmployee);

    dispatch(addEmployee(newEmployee));
    openModal();
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

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  const handleZipCodeChange = (event) => {
    setZipCode(event.target.value);
  };

  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
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
    <ContainerStyles className="container">
      <h1>HRnet</h1>
      <Button component={Link} to="/list" variant="contained" color="primary">
        View Current Employees
      </Button>
      <h2>Create Employee</h2>
      <FormStyles action="#" id="create-employee">
        <TextField
          label="First Name"
          type="text"
          id="first-name"
          value={firstName}
          onChange={handleFirstNameChange}
        />
        <TextField
          label="Last Name"
          type="text"
          id="last-name"
          value={lastName}
          onChange={handleLastNameChange}
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Date of Birth"
            value={dateOfBirth}
            onChange={(date) => handleDateChange(date, setDateOfBirth)}
          />
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Start Date"
            value={startDate}
            onChange={(date) => handleDateChange(date, setStartDate)}
          />
        </LocalizationProvider>
        <FormControl className="address">
          <FormLabel component="legend">Adresse</FormLabel>
          <TextField
            label="Street"
            id="street"
            type="text"
            value={street}
            onChange={handleStreetChange}
          />
          <TextField
            label="City"
            id="city"
            type="text"
            value={city}
            onChange={handleCityChange}
          />
          <FormControl>
            <InputLabel id="state-label">State</InputLabel>
            <Select
              label="State"
              labelId="state-label"
              id="state"
              value={selectedState}
              onChange={handleStateChange}
            >
              {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label="Zip code"
            id="zip-code"
            type="number"
            value={zipCode}
            onChange={handleZipCodeChange}
          />
        </FormControl>
        <FormControl>
          <InputLabel id="departement-label">Departement</InputLabel>
          <Select
            label="Departement"
            labelId="departement-label"
            id="department"
            value={selectedDepartment}
            onChange={handleDepartmentChange}
          >
            {departmentOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </FormStyles>
      <Button variant="contained" color="primary" onClick={handleSave}>
        Save
      </Button>
      <StyleSheetManager shouldForwardProp={(prop) => !['isModalOpen'].includes(prop)}>
        <StyledModal isModalOpen={isModalOpen}>
          <Modal isModalOpen={isModalOpen} onClose={closeModal}>
            <h2>Employee Created!</h2>
            <button onClick={closeModal}>Close Modal</button>
          </Modal>
        </StyledModal>
      </StyleSheetManager>
    </ContainerStyles>
  );
};

export default CreateEmployee;
