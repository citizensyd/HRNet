import React from "react";
import { Link } from "react-router-dom"; // Import Link
import Button from "@mui/material/Button";

/**
 * Component representing the home page.
 * @component
 * @returns {JSX.Element} Component for the home page.
 */
const Home = () => {
    return (
        <>
            <Button component={Link} to="/create" variant="contained" color="primary">
                Create a new employee
            </Button>
            <Button component={Link} to="/list" variant="contained" color="primary">
                List of employees
            </Button>
        </>
    );
};

export default Home;
