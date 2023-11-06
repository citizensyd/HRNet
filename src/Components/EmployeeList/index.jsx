import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTable, useSortBy, useFilters, usePagination } from 'react-table';
import { useSelector } from 'react-redux';

/**
 * Component representing the list of employees.
 * @component
 * @returns {JSX.Element} Component for displaying a list of employees with sorting and filtering.
 */
const EmployeeList = () => {
  
  // Use a console.log to display the global state
  const employees = useSelector(state => state.employeeReduc.employees);
  console.log('Employee state in CreateEmployee:', employees);

  const columns = useMemo(() => [
    { Header: 'First Name', accessor: 'firstName' },
    { Header: 'Last Name', accessor: 'lastName' },
    { Header: 'Start Date', accessor: 'startDate' },
    { Header: 'Department', accessor: 'department' },
    { Header: 'Date of Birth', accessor: 'dateOfBirth' },
    { Header: 'Street', accessor: 'street' },
    { Header: 'City', accessor: 'city' },
    { Header: 'State', accessor: 'state' },
    { Header: 'Zip Code', accessor: 'zipCode' },
  ], []);

  const data = useMemo(() => employees, [employees]);

  const [filterInput, setFilterInput] = useState("");

  /**
   * Handles the filter change for employee names.
   * @param {Event} e - The change event.
   */
  const handleFilterChange = e => {
    const value = e.target.value || undefined;
    setFilter("firstName", value);
    setFilterInput(value);
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    setFilter,
    canPreviousPage,
    canNextPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    { columns, data },
    useFilters,
    useSortBy,
    usePagination
  );

  return (
    <>
      <div id="employee-div" className="container">
        <h1>Current Employees</h1>
        <div>
          <select
            value={pageSize}
            onChange={e => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[10, 25, 50, 100].map(pageSize => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
        <input
          value={filterInput}
          onChange={handleFilterChange}
          placeholder={"Search name"}
        />
        <table {...getTableProps()} className="display">
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className={
                      column.isSorted
                        ? column.isSortedDesc
                          ? "sort-desc"
                          : "sort-asc"
                        : ""
                    }
                  >
                    {column.render("Header")}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : ""}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.length === 0 ? (
              <tr>
                <td colSpan={columns.length}>
                  No data available in the table
                </td>
              </tr>
            ) : (
              page.map(row => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map(cell => (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    ))}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
        <div>
          {data.length === 0 ? (
            <div>Showing 0 to 0 of 0 entries</div>
          ) : (
            <div>
              Showing {pageIndex * pageSize + 1} to {Math.min((pageIndex + 1) * pageSize, data.length)} of {data.length} entries
            </div>
          )}
        </div>
        <div>
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            Previous
          </button>
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            Next
          </button>
        </div>
        <Link to="/">Home</Link>
      </div>
    </>
  );
};

export default EmployeeList;
