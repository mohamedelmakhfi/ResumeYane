import { useContext, useState } from 'react';
import  './Signsec.css';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../firebase';
import { AuthContext } from '../../context/AuthContext';

const Signsec = () => {

    const [error , setError] = useState(false);
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const navigate = useNavigate();

    const {dispatch} = useContext(AuthContext);

    const handleSignup = (e) => {
        e.preventDefault();
        if( email === "" || password  ==="") {
            setError(true);
        }

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        const user = userCredential.user;
        dispatch({type:"SIGNUP" , payload:user})
        navigate("/Templates");
        })
        .catch((error) => {
            const errorCode = error.code;
            alert(`error => ${errorCode}  !!`);
        });
    }

    const handleSignupGoogle = (e) => {
        e.preventDefault();

        signInWithPopup(auth, provider)
        .then((userCredential) => {
            const user = userCredential.user;
            dispatch({type:"SIGNUP" , payload:user})
            navigate("/Templates");
            })
            .catch((error) => {
                const errorCode = error.code;
                alert(`error => ${errorCode}  !!`);
            });
        
    }


  return (
    <div className="container-fluid ps-md-0">
            <div className="row g-0">
            <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
                <div className="col-md-8 col-lg-6">
                <div className="login d-flex align-items-center py-5">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-9 col-lg-8 mx-auto">
                        <h3 className="login-heading mb-4 text-white text-center"> Sign UP </h3>

                        <form onSubmit={handleSignup}>
                            <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={e=>setEmail(e.target.value)}/>
                            <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
                            <label htmlFor="floatingPassword">Password</label>
                            </div>
                            <div className="d-grid haha">
                            <button className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2" type="submit">Sing up</button>
                            <button class="btn btn-lg btn-primary btn-login text-uppercase  mb-2" style={{backgroundColor: '#dd4b39'}}
                                onClick={handleSignupGoogle} ><i class="fab fa-google me-2"></i> Sign up with google</button>
                                
                            { error && <span className='error text-center'>{ error && <span className='error text-center'>Please fill all fields</span>}</span>}
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

export default Signsec
