import Login from './pages/login/login.jsx'
import Register from './pages/register/register.jsx'
import {createBrowserRouter,  RouterProvider, Route, Outlet, Navigate} from "react-router-dom";
import Navbar from './components/navbar/navbar.jsx';
import Leftbar from './components/leftbar/leftbar.jsx';
import Rightbar from './components/rightbar/rightbar.jsx';
import Home from './pages/home/home.jsx'
import User_profile from './pages/user_profile/user_profile.jsx'

function App() {

  const currentUser = true;

  const Layout = () =>{
    return (
      <div>
        <Navbar/>               
        <div style = {{display: "flex"}}>
          <Leftbar/>
          <Outlet />
          <Rightbar />
        </div>
      </div>
    )
  }

  const ProtectedRoute = ({children}) => {
    if(!currentUser){
      return <Navigate to = '/login' />
    }

    return children
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute><Layout/></ProtectedRoute>,
      children:[
        {
          path:"/",
          element:<Home />
        },
        {
          path:"/profile/:id",
          element:<User_profile />
        }
      ]

    },
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
