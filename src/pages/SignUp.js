import {useState} from 'react';
import { useStytch } from '@stytch/react';


export const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const stytchCient = useStytch();   //accessing the stytchClient

    const signUp = () => {
        stytchCient.passwords.strengthCheck({email, password})
        .then((res) => {
            console.log('success!', res);
        })
        .catch((err) => {
            console.log(err);
        })

        stytchCient.passwords.create({
            email, password, session_duration_minutes: 45
        });
        
    }

    return (
        <>
            <br/>
            <input placeholder="email..." onChange={(e) => {setEmail(e.target.value)}}/>
            <input placeholder="password..." onChange={(e) => {setPassword(e.target.value)}}/>

            <button onClick={signUp}>SignUp for free!</button>
        </>
    );
}