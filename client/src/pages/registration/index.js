import {useState} from 'react';
// import axios from 'axios';
import {Headline ,HeadH1, HeadH2} from './registerStyle/title'
import {Video, Container, ImgWrap, Img, FormWrap, FormContent, Form, FormInput, FormH1, FormLabel, FormButton} from './registerStyle/register'
import logo from './images/s2.svg'
import loc from './images/location.svg'
import video from './video/video.mp4'
import pharma from './images/pharma.png'
import medicine from './images/medicine.png'
import {Footer, Heading, Contact, Location, Image} from './registerStyle/FooterElements'
import Swal from 'sweetalert2';
import axios from 'axios';

const Registration = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    age: '',
    pincode: '',
    email: '',
    username: '',
    password: '',
    profile_image: null
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5242880) { // 5MB limit
        Swal.fire({
          icon: 'error',
          title: 'File too large',
          text: 'Please select an image under 5MB',
          confirmButtonColor: '#038ea1'
        });
        return;
      }

      if (!file.type.startsWith('image/')) {
        Swal.fire({
          icon: 'error',
          title: 'Invalid file type',
          text: 'Please select an image file',
          confirmButtonColor: '#038ea1'
        });
        return;
      }

      setFormData({
        ...formData,
        profile_image: file
      });

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const register = async (e) => {
    e.preventDefault();
    setError(''); // Clear any previous errors

    try {
      const formData = new FormData();
      formData.append('fname', formData.fname);
      formData.append('lname', formData.lname);
      formData.append('age', formData.age);
      formData.append('pincode', formData.pincode);
      formData.append('email', formData.email);
      formData.append('username', formData.username);
      formData.append('password', formData.password);
      if (formData.profile_image) {
        formData.append('profile_image', formData.profile_image);
      }

      const response = await axios.post('http://localhost:1300/register/create', formData);
      
      if (response.status === 200) {
        // Registration successful
        Swal.fire({
          icon: 'success',
          title: 'Registration Successful',
          text: 'Your account has been created!',
          confirmButtonColor: '#038ea1'
        });
        // Clear form
        setFormData({
          fname: '',
          lname: '',
          age: '',
          pincode: '',
          email: '',
          username: '',
          password: '',
          profile_image: null
        });
        setImagePreview(null);
      }
    } catch (error) {
      if (error.response) {
        // Server responded with an error
        setError(error.response.data.message);
      } else {
        setError('Registration failed. Please try again.');
      }
    }
  };

  return (
    <>
     <Headline>
      <HeadH1> Pharmacy Management System</HeadH1>
     </Headline>
     <Container>
     <ImgWrap>
     <HeadH2> Register today to get medicines at your doorsteps</HeadH2>
      <Video autoPlay loop muted src={video} type='video/mp4' />
      <Img src={logo} alt={"alt"}/>
      </ImgWrap>
     <FormWrap>
        <FormContent>
          <Form onSubmit={register}>
            <FormH1>Create your account</FormH1>
            {error && <div style={{color: 'red', marginBottom: '1rem'}}>{error}</div>}
            <div style={{ marginBottom: '20px', textAlign: 'center' }}>
              {imagePreview && (
                <img 
                  src={imagePreview} 
                  alt="Profile preview" 
                  style={{
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    marginBottom: '10px'
                  }}
                />
              )}
              <div style={{ position: 'relative' }}>
                <FormButton 
                  type="button" 
                  as="label" 
                  style={{ 
                    background: imagePreview ? '#4CAF50' : '#038ea1',
                    cursor: 'pointer'
                  }}
                >
                  {imagePreview ? 'Change Profile Picture' : 'Add Profile Picture'}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{ display: 'none' }}
                  />
                </FormButton>
              </div>
            </div>
            <FormLabel>First Name</FormLabel>
              <FormInput type = 'text' required name="fname" onChange ={handleChange}/>
              <FormLabel>Last Name</FormLabel>
              <FormInput type = 'text' required name="lname" onChange ={handleChange}/>
              <FormLabel>Age</FormLabel>
              <FormInput type = 'number' required name="age" onChange ={handleChange}/>
              <FormLabel>Physical address (pincode)</FormLabel>
              <FormInput type = 'number' required name="pincode" onChange ={handleChange}/>
              <FormLabel>Email</FormLabel>
              <FormInput type = 'email' required name="email" onChange ={handleChange}/>
            <FormLabel>Username</FormLabel>
              <FormInput type = 'text' required name="username" onChange ={handleChange}/>
              <FormLabel>Password</FormLabel>
              <FormInput type = 'password' required name="password" onChange ={handleChange}/>
            <FormButton type="submit">Continue</FormButton> 
          </Form>
        </FormContent>
      </FormWrap>
    </Container>

    <Footer>
    <Image src = {loc} alt = {"alt"}></Image>
    <Location>
    <Heading>Contact details</Heading>
    <Contact>Breathless Hospital</Contact>
    <Contact>Olongapo city</Contact>
    <Contact>395007</Contact>
    <Contact>Phone number: +63-9428640792</Contact>
    </Location>
    <Image src = {pharma} alt = {"alt"}></Image>
    <Location>
    <Heading>Services</Heading>
    <Contact>Buy medicines</Contact>
    <Contact>Sell medicines</Contact>
    <Contact>Generic medicine distribution</Contact>
    <Contact>Others</Contact>
    </Location>
    <Image src = {medicine} alt = {"alt"}></Image>
    </Footer>
    </>
  );
}
export default Registration;
