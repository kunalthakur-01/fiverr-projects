import React, { useRef } from 'react';

import styles from './CreditCheckout.module.css';

import svgIcon from '../../assets/playgrounds/frame1491-0sap.svg';

import { Link, useHistory, useLocation, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { firebaseActions } from '../../store/AuthSlice';

const CreditCheckout = () => {

    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const params = useParams();

    const usernameInput = useRef();
    const emailInput = useRef();
    const passwordInput = useRef();
    const repeatPasswordInput = useRef();



    // FETCHING DATA******************************************************************************************
    const fetchData = async (whichForm, enteredEmail, enteredPassword) => {

        const url = whichForm === 'signup'
            ? 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB6HN233smzZv1phyZckLpZGTXp3TUCDjQ'
            : 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB6HN233smzZv1phyZckLpZGTXp3TUCDjQ';

        const response = await fetch(url,
            {
                method: 'POST',
                body: JSON.stringify({ email: enteredEmail, password: enteredPassword, returnSecureToken: true }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

        const data = await response.json();

        if (!response.ok) {
            alert(data.error.message);
            throw new Error('something went wromg!!');
        }

        // console.log(data);
        dispatch(firebaseActions.checkAuthentication(data.idToken));

        if(whichForm === 'signup'){
            sendEmailVerification(data.idToken);
        }


    }

    // Email verification*****************************************************************************************
    const sendEmailVerification = async (token) => {
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyB6HN233smzZv1phyZckLpZGTXp3TUCDjQ',
            {
                method: 'POST',
                body: JSON.stringify({requestType: "VERIFY_EMAIL", idToken: token}),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

        const data = await response.json();

        if (!response.ok) {
            alert(data.error.message);
            throw new Error('something went wromg!!');
        }
    }



    // SIGNUP FORM HANDLER******************************************************************************************
    const signupFormHandler = (e) => {
        e.preventDefault();

        if (passwordInput.current.value !== repeatPasswordInput.current.value) {
            alert('Password not matched')

            usernameInput.current.value = '';
            emailInput.current.value = '';
            passwordInput.current.value = '';
            repeatPasswordInput.current.value = '';

            return;
        }


        fetchData('signup', emailInput.current.value, passwordInput.current.value);

        history.replace('/');

        usernameInput.current.value = '';
        emailInput.current.value = '';
        passwordInput.current.value = '';
        repeatPasswordInput.current.value = '';
    }


    return (
        <section className={styles.authentication_page}>
            <div className={styles.logo}>
                <Link to={'/'}><img src={require('../../assets/21e51990-9be8-4cdc-90bc-efadf12136b9.png')} alt="" /></Link>
            </div>

            <div className={styles.auth_section}>
                <div className={styles.checkout_price}>
                    <div className={styles.checkout_logo}>
                        <img src={svgIcon} alt="" />
                    </div>
                    <h2>Total checkout price is ${params.price}.00</h2>
                </div>

                {location.pathname === '/credit-checkout/' + params.price && <h3 className={styles.heading2}>Create an account</h3>}
                {location.pathname === '/credit-checkout/' + params.price && <p className={styles.para}>Or if you already have an account, <Link to="/login">login here.</Link></p>}



                {location.pathname === '/credit-checkout/' + params.price && <form onSubmit={signupFormHandler} className={styles.signup_form} action="/">
                    <div className={styles.input_field}>
                        <label htmlFor="email">Email</label>
                        <input type="email" ref={emailInput} name='email' placeholder='Enter your email address' required />
                    </div>
                    <div className={styles.input_field}>
                        <label htmlFor="password">Password</label>
                        <input type="password" ref={passwordInput} name='password' placeholder='Enter your password' required />
                    </div>
                    <div className={styles.input_field}>
                        <label htmlFor="repeat-password">Repeat Password</label>
                        <input type="password" ref={repeatPasswordInput} name='repeat-password' placeholder='Confirm your password' required />
                    </div>
                    <button>Create account</button>
                </form>}


                {location.pathname === '/credit-checkout/' + params.price && <p className={styles.links}>By creating your account, you agree to the <Link to="/license">licensing agreement</Link> , <Link to="/terms&condition"> terms & conditions</Link> and <Link to="/privacy-policy" >privacy policy</Link>.</p>}
            </div>

            <div className={styles.footer}>
                <p>Got a question? Chat with us and we’ll help you out!</p>
                <button>Open livechat</button>
            </div>
        </section>
    )
}

export default CreditCheckout;
