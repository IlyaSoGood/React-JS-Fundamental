import About from '../pages/About';
import Posts from '../pages/Posts';
import NavBar from '../components/UI/Navbar/NavBar';
import Error from '../pages/Error';
import PostIdPage from '../pages/PostIdPage';
import Login from '../pages/Login';

export const privateRoutes = [
    {
        path: "/",
        element: <NavBar/>,
        errorElement: <Error/>,
    },
    {
        path: "about",
        element: <About/>,
    },
    {
        path: "posts",
        element: <Posts/>,
    },
    {
        path: "posts/:id",
        element: <PostIdPage/>,
    }
]

export const publicRoutes = [
    {
        path: "/",
        element: <Login/>,
        errorElement: <Error/>,
    }
]