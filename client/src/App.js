
import React from "react";
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import PageNotFound from "./components/PageNotFound";
import Password from "./components/Password";
import Profile from "./components/Profile";
import Recovery from "./components/Recovery";
import Register from "./components/Register";
import Reset from "./components/Reset";
import Username from "./components/Username";
import Home from "./MusicPanel/Home";

//**Auth middleware */
import { AuthorizeUser ,ProtectRoute } from "./middleware/auth";
/* root routes */
const router=createBrowserRouter([
 
  {
    path:'/register',
    element: <Register/>
  },
  {
    path:'/',
    element: <Username/>
  },
  {
    path:'/reset',
    element: <Reset/>
  },
  {
    path:'/recovery',
    element: <Recovery/>
  },
  {
    path:'/profile',
    element:<AuthorizeUser> <Profile/></AuthorizeUser>
  },
  {
    path:'/password',
    element:<ProtectRoute> <Password/></ProtectRoute>
  },

  {
    path:'*',
    element: <PageNotFound/>
  },
 

])

function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}

export default App;
