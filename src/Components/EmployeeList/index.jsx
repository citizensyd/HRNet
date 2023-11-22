import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTable, useSortBy, useFilters, usePagination } from 'react-table';
import { parseISO, format } from 'date-fns';
import { useSelector } from 'react-redux';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Select, MenuItem } from '@mui/material';
import { ListContainer } from './index.styles';

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
    { Header: 'Start Date', accessor: 'startDate',
      Cell: ({ value }) => format(parseISO(value), 'yyyy-MM-dd')},
    { Header: 'Department', accessor: 'department' },
    { Header: 'Date of Birth', accessor: 'dateOfBirth',
      Cell: ({ value }) => format(parseISO(value), 'yyyy-MM-dd')},
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
    const value = e.target.value;
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
    <ListContainer>
      <h1>Current Employees</h1>
      <Select
        value={pageSize}
        onChange={e => {
          setPageSize(Number(e.target.value));
        }}
      >
        {[10, 25, 50, 100].map(pageSize => (
          <MenuItem key={pageSize} value={pageSize}>
            Show {pageSize}
          </MenuItem>
        ))}
      </Select>
      <TextField
        value={filterInput}
        onChange={handleFilterChange}
        placeholder={"Search name"}
      />
      <Table {...getTableProps()} className="display">
        <TableHead>
          {headerGroups.map(headerGroup => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <TableCell
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
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {page.length === 0 ? (
            <TableRow>
              <TableCell colSpan={columns.length}>
                No data available in the table
              </TableCell>
            </TableRow>
          ) : (
            page.map(row => {
              prepareRow(row);
              return (
                <TableRow {...row.getRowProps()}>
                  {row.cells.map(cell => (
                    <TableCell {...cell.getCellProps()}>{cell.render('Cell')}</TableCell>
                  ))}
                </TableRow>
              );
            })
          )}
        </TableBody>
      </Table>
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
        <Button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </Button>
        <Button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </Button>
      </div>
      <Button component={Link} to="/" variant="contained" color="primary">
        Home
      </Button>
    </ListContainer>
  );
};

export default EmployeeList;
