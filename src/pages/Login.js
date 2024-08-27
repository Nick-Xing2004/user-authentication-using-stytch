import {useState} from 'react';
import { useStytch } from '@stytch/react';


export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const stytchClient = useStytch();

    const login = () => {
        stytchClient.passwords.authenticate({email, password, session_duration_minutes: 45});    //this method within the passwords obj does the authentication
        //and the login function
    }

    //the resetting password functionality
    const resetPasswordByEmail = () => {
        stytchClient.passwords.resetByEmailStart({
            email: "yuyang.xing@vanderbilt.edu" 
        });    //send the specified email address an email used to reset the password
    }
    
    return (
        <>
            <br/>
            <input placeholder="email..." onChange={(e) => {setEmail(e.target.value)}}/>
            <input placeholder="password..." onChange={(e) => {setPassword(e.target.value)}}/>

            <button onClick={login}>Login!</button>

            <div>
                <p>Forget your password?</p>
                <button onClick={resetPasswordByEmail}>Reset your password</button>
            </div>
        </>
    );
};