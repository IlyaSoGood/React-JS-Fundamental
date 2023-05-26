import React from 'react';
import './styles/App.css';
// import {BrowserRouter, Route} from 'react-router-dom';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import About from './pages/About';
import Posts from './pages/Posts';

const router = createBrowserRouter([
    {
        path: "/about",
        element: <About/>
    },
    // {
    //     path: "/",
    //     element: <Posts/>
    // }
]);

function App() {
    return (
        // <BrowserRouter>
        //     <Route path="/about">
        //         <About/>
        //     </Route>
        // </BrowserRouter>
        <RouterProvider router={router} />
    )
}

export default App;