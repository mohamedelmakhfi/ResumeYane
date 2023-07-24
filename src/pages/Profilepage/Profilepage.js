import './Profilepage.css';
import {
  MDBCol,
  MDBRow,
  MDBBreadcrumb,
  MDBBreadcrumbItem
} from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from '../../firebase';
import { useContext, useId, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { FaRegCircleDown } from "react-icons/fa6";



const ProfilePage  = () => {

  const {dispatch} = useContext(AuthContext);
  const { currentUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    signOut(auth).then(() => {
      dispatch({type:"LOGOUT"})
      alert('Sign-out successful.');
      navigate('/');

    }).catch((error) => {
      alert(error);
    });

  }



    const [file, setFile] = useState("");


    return (
    <div className='container rounded bg-light mt-5 mb-5'>
      <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-white rounded-3 mt-4 p-3 mb-4 border border-primary">
              <MDBBreadcrumbItem>
                <Link to='/'>Home</Link>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem>
                User profile
              </MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>
        

    <form className="row">
        <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img className="rounded-circle mt-5" width="150px" 
                src={
                  file
                    ? URL.createObjectURL(file)
                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                }
              />

              <div className="formInput m-4">
                <label htmlFor="file">
                  Image: <FaRegCircleDown /> 
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              <hr style={{"backgroundColor" : "blue" , "width" : "170px" , "height" : "px" }} />
              <span className="text-primary">{currentUser.email}</span>
              <span className='mt-3'><button className='btn1' onClick={handleLogout}>Log out</button></span></div>
        </div>
        <div className="col-md-5 border-right">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-right"><span className='difcolor strong'>Profile </span>Settings</h4>
                </div>
                <div className="row mt-2">
                    <div className="col-md-6"><label className="labels">Name</label><input type="text" className="form-control" placeholder="first name"  /></div>
                    <div className="col-md-6"><label className="labels">Surname</label><input type="text" className="form-control"  placeholder="surname" /></div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12"><label className="labels">Mobile Number</label><input type="text" className="form-control" placeholder="phone number" /></div>
                    <div className="col-md-12"><label className="labels">Address</label><input type="text" className="form-control" placeholder="enter address" /></div>
                    <div className="col-md-12"><label className="labels">Email ID</label><input type="text" className="form-control" placeholder="email id" value={currentUser.email}/></div>
                    <div className="col-md-12"><label className="labels">Professional Summary </label><input className="form-control" defaultValue="Professional Summary" /></div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-6"><label className="labels">Country</label><input type="text" className="form-control" placeholder="country" /></div>
                    <div className="col-md-6"><label className="labels">State/Region</label><input type="text" className="form-control"  placeholder="state" /></div>
                </div>

                <div className="row mt-5">
                  <div className="d-flex justify-content-between m-2 align-items-center difcolor experience"><span>Education</span><span className="border px-2 difcolor  add-experience"><i className="fa fa-plus"></i></span></div><br />
                    <div className="col-md-6"><label className="labels">School</label><input type="text" className="form-control" placeholder="School" /></div>
                    <div className="col-md-6"><label className="labels">Degree</label><input type="text" className="form-control"  placeholder="Degree" /></div>
                    <div className="col-md-6"><label className="labels">Start Date</label><input type="date" className="form-control"  /></div>
                    <div className="col-md-6"><label className="labels">End Date</label><input type="date" className="form-control"  /></div>
                </div>

                <div className="row mt-6">
                <div className="d-flex justify-content-between m-2 align-items-center difcolor experience"><span>Languages</span><span className="border px-2 difcolor  add-experience"><i className="fa fa-plus"></i></span></div><br />
                    <div className="col-md-6"><label className="labels">language</label><input type="text" className="form-control" placeholder="language" /></div>
                    <div className="col-md-6"><label className="labels">proficiency</label><input type="text" className="form-control"  placeholder="proficiency" /></div>
                    <div className="col-md-6"><label className="labels">language</label><input type="text" className="form-control" placeholder="language" /></div>
                    <div className="col-md-6"><label className="labels">proficiency</label><input type="text" className="form-control"  placeholder="proficiency" /></div>
                </div>

                <div className="row mt-7">
                <div className="d-flex justify-content-between m-2 align-items-center difcolor experience"><span>Skills</span><span className="border px-2 difcolor  add-experience"><i className="fa fa-plus"></i></span></div><br />
                    <div className="col-md-6"><label className="labels">Skill</label><input type="text" className="form-control" placeholder="Skill" /></div>
                    <div className="col-md-6"><label className="labels">Skill</label><input type="text" className="form-control"  placeholder="Skill" /></div>
                    <div className="col-md-6"><label className="labels">Skill</label><input type="text" className="form-control" placeholder="Skill" /></div>
                    <div className="col-md-6"><label className="labels">Skill</label><input type="text" className="form-control"  placeholder="Skill" /></div>
                </div>

                <div className="row mt-7">
                <div className="d-flex justify-content-between m-2 align-items-center difcolor experience"><span>Hobbies</span><span className="border px-2 difcolor  add-experience"><i className="fa fa-plus"></i></span></div><br />
                    <div className="col-md-6"><label className="labels">hobbie</label><input type="text" className="form-control" placeholder="hobbie" /></div>
                    <div className="col-md-6"><label className="labels">hobbie</label><input type="text" className="form-control"  placeholder="hobbie" /></div>
                    <div className="col-md-6"><label className="labels">hobbie</label><input type="text" className="form-control" placeholder="hobbie" /></div>
                    <div className="col-md-6"><label className="labels">hobbie</label><input type="text" className="form-control"  placeholder="hobbie" /></div>
                </div>
                                
                <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button">Save Profile</button></div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center experience difcolor "><span>Experience</span><span className="border px-2 add-experience"><i className="fa fa-plus"></i></span></div><br />
                <div className="col-md-12"><label className="labels">Position Title</label><input type="text" className="form-control" placeholder="experience" /></div> <br />
                <div className="col-md-12"><label className="labels">Company Name </label><input type="text" className="form-control" placeholder="additional details" /></div>
                <div className="col-md-6"><label className="labels">Start Date </label><input type="date" className="form-control" placeholder="additional details" /></div>
                <div className="col-md-6"><label className="labels">End Date </label><input type="date" className="form-control" placeholder="additional details" /></div>
                <div className="col-md-12"><label className="labels">Work Summary</label><input className="form-control" defaultValue="Work Summary" /></div>
            </div>
        </div>
    </form>
  </div>





  );
}

export default ProfilePage