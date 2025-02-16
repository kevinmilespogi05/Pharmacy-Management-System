import {useState} from 'react';
import {Headline ,HeadH1} from './signinStyle/title'
import {CheckInput, Tnc, Createbutton, Container, ImgWrap, Img, FormWrap, FormContent, Form, FormInput, FormH1, FormLabel, FormButton,AddButton} from './signinStyle/signin'
import logo from './images/logo.svg'
import loc from './images/location.svg'
import pharma from './images/pharma.png'
import medicine from './images/medicine.png'
// import {Footer, Heading, Contact, Location, Image} from './signinStyle/FooterElements'
import Footer from './signinStyle/Footer'
import axios from 'axios'
import Swal from 'sweetalert2';

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const checkUser = async (e) => {
    e.preventDefault(); // Prevent form submission
    
    // Validate inputs
    if (!username.trim() || !password.trim()) {
      Swal.fire({
        title: 'Error',
        text: 'Please enter both username and password',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      return;
    }

    try {
      console.log("Attempting login for:", username);
      const response = await axios.post('http://localhost:1300/signin/authenticate', {
        username: username.trim(),
        password: password.trim(),
      });

      if (response.data.login === 1) {
        // Store user ID in localStorage
        localStorage.setItem('userId', response.data.userId);
        
        // Show SweetAlert on successful login
        await Swal.fire({
          title: 'Success!',
          text: 'You have successfully logged in.',
          icon: 'success',
          confirmButtonText: 'OK',
        });
        
        // Redirect to the home page after the user clicks "OK"
        window.location.href = '/home';
      } else {
        // Show SweetAlert for login failure
        Swal.fire({
          title: 'Login Failed',
          text: response.data.message || 'Invalid username or password.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
    } catch (error) {
      console.log('Login error:', error);
      // Show SweetAlert for API errors
      Swal.fire({
        title: 'Error',
        text: error.response?.data?.message || 'An error occurred. Please try again later.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  return (
    <>
    <Headline>
     <HeadH1> Pharmacy Management System</HeadH1>
    </Headline>
    <Createbutton to = '/registration'> Create an account</Createbutton>
    <Container>
    <ImgWrap>
       <Img src={logo} alt={"alt"}/>
     </ImgWrap>
    <FormWrap>
       <FormContent>
         <Form onSubmit={checkUser}>
           <FormH1>Member Login</FormH1>
           <FormLabel htmlFor="username">Username</FormLabel>
             <FormInput 
               id="username"
               type="text" 
               required 
               value={username}
               onChange={(e) => handleInputChange(e, setUsername)}
             />
             <FormLabel htmlFor="password">Password</FormLabel>
             <FormInput 
               id="password"
               type="password" 
               required 
               value={password}
               onChange={(e) => handleInputChange(e, setPassword)}
             />
             <Tnc>
              <CheckInput type="checkbox" id="remember"></CheckInput>
              <FormLabel htmlFor="remember">Remember me</FormLabel>
             </Tnc>
           <FormButton type="submit">Sign in</FormButton>
           <AddButton to='/forgotpassword'>Forgot password</AddButton>
         </Form>
       </FormContent>
     </FormWrap>
   </Container>
    <Footer/>
   </>
  )
}
export default SignIn;

