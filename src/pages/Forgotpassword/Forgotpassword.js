import {  Link, useNavigate } from 'react-router-dom'
import { Header } from '../../sections'
import './Forgotpassword.css'
import { useState } from 'react'
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../../firebase'

const Forgotpassword = () => {

    const [email , setEmail] = useState("");
    const [validation , setValidation] = useState(false);
    const [error , seterror] = useState(false);


    const handleResetpassword = (e) => {
        e.preventDefault();

        sendPasswordResetEmail(auth, email)
        .then(() => {
            setValidation(true);
            seterror(false);

        })
        .catch((err) => {
            seterror(true);
            setValidation(false);
        });

    }


  return (
    <>

        <Header />

        <div className='sectionFogotpass'>
            <div className="container mg-3 card cart text-center">
            { validation && <span style={{"color":"blue" }}>Check you email</span>}
            { error && <span style={{"color":"red" }}>Email doesn't exist</span>}
                <form onSubmit={handleResetpassword}>
                <div className="card-header cardheader h5 text-white bg-primary m-2">Password Reset</div>
                <div className="card-body px-5">
                    <p className="card-text  cardtext py-2">
                        Enter your email address and we'll send you an email with instructions to reset your password.
                    </p>
                    <div className="form-outline">
                        <input type="email" id="typeEmail" className="form-control my-3" onChange={e=>setEmail(e.target.value)} />
                        <label className="form-label formlabel" for="typeEmail">Email input</label>
                    </div>
                    <button className="btn btn-primary w-100" type="submit" >Reset password</button>
                    <div className="dflex d-flex justify-content-between mt-4">
                        <Link to="/Login">Login</Link>
                        <Link to="/Signup">Register</Link>
                    </div>
                </div>
                </form>
            </div>
        </div>
        

    </>
  )
}

export default Forgotpassword