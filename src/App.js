import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import CreateEmployee from "./Components/CreateEmployee";
import EmployeeList from "./Components/EmployeeList";
import NotFound from "./Components/NotFound";

/**
 * Creates a browser router and defines routes for the application.
 */
const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route
      path="create"
      element={<CreateEmployee />}
    />
    <Route
      path="list"
      element={<EmployeeList />}
    />
    <Route 
      path="*"
      element={<NotFound />} />
  </Route>
));

/**
 * Main application component.
 * @returns {JSX.Element} The main application component.
 */
function App() {
  return (
    <RouterProvider
      router={router}
      /* fallbackElement={<SpinnerOfDoom />} */
      future={{ v7_startTransition: true }}
    />
  );
}

export default App;
