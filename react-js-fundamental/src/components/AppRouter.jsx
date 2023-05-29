import React, { useContext } from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import { publicRoutes, privateRoutes } from '../router/index';

import { AuthContext } from '../context';
import Loader from './UI/Loader/Loader';


const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);

    if(isLoading) {
        return <Loader/>
    }

    // const isAuth = true;
    let router;

    if (isAuth) {
        router = createBrowserRouter(privateRoutes);
    } else {
        router = createBrowserRouter(publicRoutes);
    }
    

    return (
        <div>
            {/* <RouterProvider router={privateRouter} /> */}
            <RouterProvider router={router} />
        </div>
    );
};

export default AppRouter;