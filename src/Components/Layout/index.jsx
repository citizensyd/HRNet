import { Outlet } from "react-router-dom/dist";
import { LayoutStyles } from "./index.styles";
/**
 * Component representing the basic layout.
 * @component
 * @returns {JSX.Element} Component for the basic layout with route content.
 */
const Layout = () => {
    return (
        <LayoutStyles>
            <>
                <Outlet />
            </>
        </LayoutStyles>
    );
};

export default Layout;

