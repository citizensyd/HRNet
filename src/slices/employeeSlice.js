import { createSlice } from '@reduxjs/toolkit';

/**
 * Redux Slice for managing employee data.
 * @typedef {Object} EmployeeSlice
 * @property {Array.<object>} employees - An array of employee objects.
 */

/**
 * Initial state for the employee slice.
 * @type {EmployeeSlice}
 */
const initialState = {
  employees: [],
};

const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    /**
     * Adds a new employee to the state.
     * @param {EmployeeSlice} state - The current state.
     * @param {object} action - The action containing the employee data to add.
     * @param {object} action.payload - The employee data to add.
     */
    addEmployee: (state, action) => {
      state.employees.push(action.payload);
    },
    // Add other reducers as needed
  },
});

export const { addEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
