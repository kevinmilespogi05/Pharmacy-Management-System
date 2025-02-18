import {useState} from 'react';
import { FrmWrap, FrmContent, Formadd, FormInputadd, FormH1add, FormButtonadd} from './../customerStyle'
import Swal from 'sweetalert2';

const Addcustomer = () => {
  const [fname, setFirstname] = useState("");
  const [lname, setLastname] = useState("");
  const [age, setAge] = useState("");
  const [pincode, setPincode] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const validateForm = () => {
    if (!fname.trim() || !lname.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Name Required',
        text: 'Please enter both first and last name',
        confirmButtonColor: '#038ea1'
      });
      return false;
    }

    if (!age || age < 0) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Age',
        text: 'Please enter a valid age',
        confirmButtonColor: '#038ea1'
      });
      return false;
    }

    if (!pincode || pincode.length !== 4) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Pincode',
        text: 'Please enter a valid 4-digit pincode',
        confirmButtonColor: '#038ea1'
      });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Email',
        text: 'Please enter a valid email address',
        confirmButtonColor: '#038ea1'
      });
      return false;
    }

    if (!username.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Username Required',
        text: 'Please enter a username',
        confirmButtonColor: '#038ea1'
      });
      return false;
    }

    if (!password || password.length < 6) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Password',
        text: 'Password must be at least 6 characters long',
        confirmButtonColor: '#038ea1'
      });
      return false;
    }

    return true;
  };

  const addUser = (e) => {
    e.preventDefault(); // Prevent form submission
    
    if (!validateForm()) return;

    fetch("http://localhost:1300/register/create", {
      method: "post",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fname, lname, age, pincode, email, username, password
      })
    })
    .then(response => {
      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Customer added successfully',
          confirmButtonColor: '#038ea1'
        });
        // Clear form
        setFirstname("");
        setLastname("");
        setAge("");
        setPincode("");
        setEmail("");
        setUsername("");
        setPassword("");
      } else {
        throw new Error('Failed to add customer');
      }
    })
    .catch(error => {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to add customer. Please try again.',
        confirmButtonColor: '#038ea1'
      });
    });
  };

  return (
    <FrmWrap>
      <FrmContent>
        <Formadd>
          <FormH1add>Add new customer</FormH1add>
          <FormInputadd type="text" placeholder="First name" value={fname} onChange={(e) => setFirstname(e.target.value)}/>
          <FormInputadd type="text" placeholder="Last name" value={lname} onChange={(e) => setLastname(e.target.value)}/>
          <FormInputadd type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)}/>
          <FormInputadd type="text" placeholder="Pincode" value={pincode} onChange={(e) => setPincode(e.target.value)}/>
          <FormInputadd type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <FormInputadd type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
          <FormInputadd type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <FormButtonadd type="button" onClick={addUser}>Add Customer</FormButtonadd>
        </Formadd>
      </FrmContent>
    </FrmWrap>
  );
};

export default Addcustomer;
