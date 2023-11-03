import { Link } from "react-router-dom/dist";
/**
 * Component representing the home page.
 * @component
 * @returns {JSX.Element} Component for the home page.
 */
const Home = () => {
    return (
        <>
            <Link to="/create">Create a new employee</Link>
            <Link to="/list">List of employees</Link>
        </>
    );
};

export default Home;


