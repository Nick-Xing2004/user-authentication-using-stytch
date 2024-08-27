import './App.css';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {Login} from './pages/Login';
import { SignUp } from './pages/SignUp';
import { ResetPassword } from "./pages/ResetPassword";
import {StytchHeadlessClient} from "@stytch/vanilla-js/headless";   //use it because of the smaller package size
import { StytchProvider } from "@stytch/react";


function App() {

  const stytchClient = new StytchHeadlessClient("public-token-test-ffdd0a2f-2124-406b-865c-ea2f8ac1e4cd");
  //right now has connection to stytch and our project;
   
  const logOut = () => {
    stytchClient.session.revoke();    //stops the current session of the user current logged in  
  }

  return (
    <div className="App">
      <Router>
        <Link to="/signup">Sign Up for free!</Link>
        <br/>
        <Link to="/auth">Login in</Link>
        
        
        <StytchProvider stytch={stytchClient}>   
          <Routes>     
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/auth" element={<Login/>} />
            <Route path="/resetpassword/*" element={<ResetPassword/>} />
          </Routes>
         

          <br/>

          <button onClick={logOut}>Log out...</button>
        </StytchProvider>
      </Router>

    </div>
  );
}

export default App;
