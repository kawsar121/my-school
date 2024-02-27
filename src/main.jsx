import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Root/Root.jsx';
import Header from './Root/Header/Header.jsx';
import ExStudentDatabase from './Component/ExStudentDatabase/ExStudentDatabase.jsx';
import OurInformation from './Component/OurInformation/OurInformation.jsx';
import Gallary from './Component/Gallary/Gallary.jsx';
import ErrorPage from './Root/Error/Error.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage> ,
    children: [
      {
        path: "/",
        element: <OurInformation></OurInformation> ,
      },
      {
        path: "/exstudent",
        element: <ExStudentDatabase></ExStudentDatabase> ,
      },
      {
        path: "/gallary",
        element: <Gallary></Gallary> ,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
