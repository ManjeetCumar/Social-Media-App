import Login from './pages/login/login.jsx'
import Register from './pages/register/register.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
function App() {

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />     
    </>
  );
}

export default App;
