import './login.css'
import { useRef, useContext } from 'react';
import {loginCall} from '../../apiCalls';
import { AuthContext } from '../../context/AuthContext';


export default function Login() {
    const email = useRef();
    const password = useRef();
    const {user,isFetching, error, dispatch} = useContext(AuthContext)
    const handleClick = (e) => {
        e.preventDefault();
        loginCall({email:email.current.value,password:password.current.value},dispatch)
        
    }
    console.log(user)
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Lamasocial</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you on Lamasocial
                    </span>
                </div>
                <div className="loginRight" onSubmit={handleClick}>
                    <form className="loginBox">
                        <input placeholder='Email' type="Email" className="loginInput" ref={email} />
                        <input placeholder='Password' type="Password" className="loginInput" minLength="6" ref={password} />
                        <button className="loginButton">Log In</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">Create a New</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
