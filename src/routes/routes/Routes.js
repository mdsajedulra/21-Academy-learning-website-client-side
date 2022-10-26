import { createBrowserRouter } from "react-router-dom";
import CourseDetails from "../../component/CourseDetails/CourseDetails";
import ErrorElement from "../../component/ErrorElement";
import CheckOut from "../../component/Pages/Checkout/CheckOut";
import Courses from "../../component/Pages/Courses/Courses";
import Login from "../../component/Pages/Login/Login";
import Register from "../../component/Pages/Register/Register";
import Main from "../../Layout/Main";
import PrivateRouter from "../PrivateRoutes/PrivateRoute";

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
            },
            {
                path: 'courses',
                element: <Courses></Courses>,
                loader: () => fetch('http://localhost:5000/courses')
            },
            {
                path: 'courses',
                element: <Courses></Courses>,
                loader: () => fetch('http://localhost:5000/categories')
            },
            {
                path: 'courses/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
            },
            {
                path: 'checkout/:id',
                element: <PrivateRouter><CheckOut></CheckOut></PrivateRouter>,
                loader: ({ params }) => fetch(`http://localhost:5000/checkout/${params.id}`)
            }
        ]
    }
])