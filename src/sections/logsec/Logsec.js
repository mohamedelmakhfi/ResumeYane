import { useContext, useState } from 'react';
import './Logsec.css';
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, db, provider } from '../../firebase';
import { Link , useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';



const Logsec = () => {

    const [error , setError] = useState(false);
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const navigate = useNavigate();

    const {dispatch} = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        const user = userCredential.user;
        dispatch({type:"LOGIN" , payload:user})
        navigate("/Loginprofil");
        }).catch((error) => {
            setError(true);
        });
    }
    const isEmailRegistered = async (email) => {
      const querySnapshot = await db.collection('infoperson').where('email', '==', email).get();
      return !querySnapshot.empty; // Return true if the email is already registered, false if not
    };
    const isUserRegistered = async (uid) => {
      const userRef = db.collection('users').doc(uid);
      const userDoc = await userRef.get();
    
      return userDoc.exists; // Return true if the user exists, false if not
    };
    
    const handleLoginGoogle = async (e) => {
      e.preventDefault();
    
      try {
        const userCredential = await signInWithPopup(auth, provider);
        const user = userCredential.user;
        
        // Check if the email is already registered
        const emailIsRegistered = await isEmailRegistered(user.email);
        
        if (emailIsRegistered) {
          // User is registered, proceed with login
          const userIsRegistered = await isUserRegistered(user.uid);
          
          if (userIsRegistered) {
            dispatch({ type: "LOGIN", payload: user });
            navigate("/Loginprofil");
          } else {
            alert("User is not registered.");
            navigate("/Profilepage");
          }
        } else {
          // Email is not registered, show an alert or handle it accordingly
          alert("Email is not registered.");
        }
    
      } catch (error) {
        setError(true);
      }
    };
    
      

  return (
    <div className="container-fluid ps-md-0">
            <div className="row g-0">
                <div className="d-none d-md-flex col-md-4 col-lg-6 bg-imagee"></div>
                <div className="col-md-8 col-lg-6 ">
                  <div className="login d-flex align-items-center py-5">
                      <div className="container">
                      <div className="row">
                          <div className="col-md-9 col-lg-8 mx-auto">
                          <h3 className="login-heading mb-4 text-white text-center">Welcome back!</h3>

                          <form onSubmit={handleLogin}>
                              <div className="form-floating mb-3">
                              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" autoComplete="username" onChange={e=>setEmail(e.target.value)}/>
                              <label htmlFor="floatingInput">Email address</label>
                              </div>
                              <div className="form-floating mb-3">
                              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" autoComplete='current-password' onChange={e=>setPassword(e.target.value)}/>
                              <label htmlFor="floatingPassword">Password</label>
                              </div>

                              <div className="form-check mb-3">
                              <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck" />
                              <label className="form-check-label text-white smasll" htmlFor="rememberPasswordCheck">
                                  Remember password
                              </label>
                              </div>

                              <div className="d-grid haha">
                              <button className="btn btn-primary btn-login text-uppercase fw-bold mb-2" type="submit">Login</button>
                              <button className="btn btn-primary btn-login text-uppercase  mb-2" style={{backgroundColor: '#dd4b39'}}
                                  onClick={handleLoginGoogle}><i className="fab fa-google me-2"></i> Sign in with google</button>
                              { error && <span className='error text-center'>wrong email or password</span>}
                              <div className="text-center">
                                  <Link className="small text-white" to="/Forgotpassword">Forgot password?</Link>
                              </div>
                              </div>
                          </form>
                          </div>
                      </div>
                      </div>
                  </div>
                </div>
            </div>
    </div>
  )
}

export default Logsec