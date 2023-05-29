import React from 'react';
import { useRouteError  } from 'react-router-dom';

const Error = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div>
            <h1 style={{color: 'red'}}>
                Вы перешли на несущесвующую страницу
                {error.statusText || error.message}
            </h1>
        </div>
    );
};

export default Error;