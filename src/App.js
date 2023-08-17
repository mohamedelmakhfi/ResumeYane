import './App.css';
import {Container } from './components/index';
import { Home , Contactus , Login, Signup, Templates, Forgotpassword, Resumeform, Profilepage, Loginprofil } from './pages/index';
import { BrowserRouter as Router , Route , Routes, Navigate } from 'react-router-dom'
import { Footer } from './sections';
import { useContext } from 'react';
import { AuthContext, AuthContextProvider } from './context/AuthContext';




const App = () => {


  const {currentUser} = useContext(AuthContext);


  const RequireAuth = ({children}) => {
    return currentUser ? children : <Navigate to='/Login' /> ;
  }


  return (
    <>
      <Router >
        <Container>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Contactus' element={<Contactus />} />
            <Route path='/Signup' element={<Signup />} />
            <Route path='/Templates' element={<Templates />} />
            <Route path='/Forgotpassword' element={<Forgotpassword />} />
            <Route path='/Resumeform' element={<Resumeform />} />
          </Routes>
        </Container>
        {/* Utilisation de RequireAuth ici pour les routes nécessitant une authentification */}
          <Routes>
            <Route path='/Profilepage' element={
                          <RequireAuth> 
                              <Profilepage />
                          </RequireAuth>    
            } />
            
            <Route path='/Loginprofil' element={
                          <RequireAuth> 
                              <Loginprofil />
                          </RequireAuth>    
            } />
            
          </Routes>
        {/* </Container>*/}
        <Footer />
      </Router>
    </>
  )
}

export default App