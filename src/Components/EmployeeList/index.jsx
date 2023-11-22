import React, { useMemo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTable, useSortBy, useFilters, usePagination } from 'react-table';
import { parseISO, format } from 'date-fns';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Select, MenuItem } from '@mui/material';
import { ListContainer } from './index.styles';
import { getDatabase, ref, onValue } from "firebase/database";
import { app } from '../../firebaseConfig';

/**
 * A React component for displaying a list of employees with features like sorting, filtering, and pagination.
 * Utilizes Firebase for data fetching and `react-table` for handling table display and interactions.
 *
 * @returns {JSX.Element} A component that renders a table of employees.
 */
const EmployeeList = () => {
  // State to store the fetched data from Firebase
  const [dataFirebase, setData] = useState([]);

  // Establishing a connection to the Firebase database
  const db = getDatabase(app);

  // Effect to fetch data from Firebase and listen for changes
  useEffect(() => {
    const usersRef = ref(db, 'users');
    onValue(usersRef, (snapshot) => {
      const val = snapshot.val();
      if (val) {
        const transformedData = Object.keys(val).map(key => ({
          id: key,
          ...val[key],
        }));
        setData(transformedData);
      }
    });

    return () => onValue(usersRef, () => { });
  }, []);

  // Columns configuration for `react-table`
  const columns = useMemo(() => [
    { Header: 'First Name', accessor: 'firstName' },
    { Header: 'Last Name', accessor: 'lastName' },
    {
      Header: 'Start Date', accessor: 'startDate',
      Cell: ({ value }) => format(parseISO(value), 'yyyy-MM-dd')
    },
    { Header: 'Department', accessor: 'department' },
    {
      Header: 'Date of Birth', accessor: 'dateOfBirth',
      Cell: ({ value }) => format(parseISO(value), 'yyyy-MM-dd')
    },
    { Header: 'Street', accessor: 'street' },
    { Header: 'City', accessor: 'city' },
    { Header: 'State', accessor: 'state' },
    { Header: 'Zip Code', accessor: 'zipCode' },
  ], []);

  // Preparing data for `react-table`
  const data = useMemo(() => dataFirebase, [dataFirebase]);

  // State and handler for filter input
  const [filterInput, setFilterInput] = useState("");
  const handleFilterChange = e => {
    const value = e.target.value;
    setFilter("firstName", value);
    setFilterInput(value);
  };

  // `react-table` hooks and functions
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
