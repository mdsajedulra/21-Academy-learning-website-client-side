import { createBrowserRouter } from "react-router-dom";
import CourseDetails from "../../component/CourseDetails/CourseDetails";
import ErrorElement from "../../component/ErrorElement";
import Home from "../../component/Home";
import Blog from "../../component/Pages/Blog/Blog";
import CheckOut from "../../component/Pages/Checkout/CheckOut";
import Courses from "../../component/Pages/Courses/Courses";
import Login from "../../component/Pages/Login/Login";
import Practice from "../../component/Pages/Practice";
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
                path: '/',
                element: <Home></Home>
            },
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
                loader: () => fetch('https://21-academy-server.vercel.app/courses')
            },
            {
                path: 'courses',
                element: <Courses></Courses>,
                loader: () => fetch('https://21-academy-server.vercel.app/categories')
            },
            {
                path: 'courses/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`https://21-academy-server.vercel.app/courses/${params.id}`)
            },
            {
                path: 'checkout/:id',
                element: <PrivateRouter><CheckOut></CheckOut></PrivateRouter>,
                loader: ({ params }) => fetch(`https://21-academy-server.vercel.app/checkout/${params.id}`)
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'practice',
                element: <Practice></Practice>
            }
        ]
    }
])