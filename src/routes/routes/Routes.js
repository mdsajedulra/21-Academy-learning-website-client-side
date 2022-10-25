import { createBrowserRouter } from "react-router-dom";
import ErrorElement from "../../component/ErrorElement";
import Login from "../../component/Pages/Login/Login";
import Register from "../../component/Pages/Register/Register";
import Main from "../../Layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    }
])