import React from 'react';
import styles from './Header.module.css';

import { BiMenu } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';
import { useDispatch, useSelector } from 'react-redux';
import { firebaseActions } from '../../store/AuthSlice';
import { useState } from 'react';
import CheckOutsideClick from '../CheckOutsideClick';


const Header = () => {

    const dispatch = useDispatch();
    const isLogin = useSelector(state => state.firebaseAuth.isLogin);
    const [isClickOnMenu, setIsClickOnMenu] = useState(false);

    const logoutBtnHandler = () => {
        dispatch(firebaseActions.checkAuthentication(''));
    }

    const hamburgerMenuHandler = () => {
        setIsClickOnMenu(!isClickOnMenu);
    }

    const closeMenubar = () => {
        setIsClickOnMenu(false);
    }

    return (
        <header className={styles.main_header}>
            <div className={styles.search_header}>
                <Link to={'/'} className={`${styles.logo}`}>
                    <img src={require('../../assets/Ai-arts_logo.png')} alt="logo" />
                </Link>
                <div className={styles.searchbar}>
                    <img className={styles.search} src={require('../../assets/0db21099504adc2c3b59ca0c56f9dd44.png')} alt="search" />
                    <input type="text" placeholder='Search free high-resolution photos'/>
                    <img className={styles.scanner} src={require('../../assets/819e63aa7f5d8eb4a2ae911ef7e2d1bb.png')} alt="scan" />
                </div>
                <div className={styles.links}>
                    <div className={styles.nav_links}>
                        <Link to="/explore">Explore</Link>
                        <Link to="/create">Create</Link>
                        <Link to="/pricing"><img src={require('../../assets/4c2700c43830cbba7c0e8799e1c5c036.png')} alt="pricing" /></Link>
                    </div>
                    <div className={styles.authentication_links}>
                        {!isLogin && <div className={styles.login_signup_btn}>
                            <Link to="/login">Login</Link>
                            <span>/</span>
                            <Link to="/signup">Signup</Link>
                        </div>}
                        {isLogin && <div className={styles.logout_btn}>
                            <button onClick={logoutBtnHandler}>Logout</button>
                        </div>}
                    </div>
                </div>
                <div className={styles.menubar}>
                    <button onClick={hamburgerMenuHandler}>
                        <BiMenu className={styles.hamburger_menu}/>
                    </button>
                    <CheckOutsideClick onClickOutside={closeMenubar} icon={<BiMenu />}>
                        {isClickOnMenu && <HamburgerMenu />}
                    </CheckOutsideClick>
                </div>
            </div>
            <div className={`${styles.categories_header}`}>
                <span>Categories</span>
                <ul>
                    <li><Link to="/category/Abstract">Abstract</Link></li>
                    <li><Link to="/category/Aerial Photography">Aerial Photography</Link></li>
                    <li><Link to="/category/Animals&Wildlife">Animals & Wildlife</Link></li>
                    <li><Link to="/category/Architectural Concepts">Architectural Concepts</Link></li>
                    <li><Link to="/category/Automotive">Automotive</Link></li>
                    <li><Link to="/category/Fantasy&Sci-Fi">Fantasy & Sci-Fi</Link></li>
                    <li><Link to="/category/Food&Drink">Food & Drink</Link></li>
                    <li><Link to="/category/Holidays">Holidays</Link></li>
                    <li><Link to="/category/Landscape">Landscape</Link></li>
                    <li><Link to="/category/Mecha">Mecha</Link></li>
                    <li><Link to="/category/Pixel&Voxel">Pixel & Voxel</Link></li>
                    <li><Link to="/category/Portraits">Portraits</Link></li>
                    <li><Link to="/category/Realism">Realism</Link></li>
                    <li><Link to="/category/Space">Space</Link></li>
                    <li><Link to="/category/Sports">Sports</Link></li>
                    <li><Link to="/category/Storybook Realism">Storybook Realism</Link></li>
                    <p>Featured</p>
                </ul>
            </div>
        </header>
    )
}

export default Header
