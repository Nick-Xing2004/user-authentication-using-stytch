import {useState} from 'react';
import { useStytch } from '@stytch/react';


export const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState("");

    const stytchCient = useStytch();

    const token = new URLSearchParams(window.location.search).get("token");

    const resetPassword = () => {
        stytchCient.passwords.resetByEmail({
            token: token,    //the token is used to determine which user you're changing the password for 
            password: newPassword,
            session_duration_minutes: 45
        });
    }

    return (
        <div>
            <input placeholder="enter your new password..." onChange={(e) => {setNewPassword(e.target.value)}}></input>
            <button onClick={resetPassword}>update password</button>
        </div>  
    );
}