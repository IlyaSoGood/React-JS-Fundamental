import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MyButton from '../button/MyButton';
import { AuthContext } from '../../../context';

const NavBar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }

    return (
        <div className="navbar">
            <MyButton
                onClick={logout}
                style={{marginRight: 'auto'}}
            >
                Выйти
            </MyButton>

            <div className='navbar__links'>
                <Link to={'/about'}>О сайте</Link>
                <Link to={'/posts'}>Посты</Link>
            </div>
        </div>

);
};

export default NavBar;