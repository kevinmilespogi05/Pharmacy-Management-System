import {useState} from 'react';
import {FrmWrap, FrmContent, Frm, FrmInput, FrmH1, FrmButton, ExfrmInput} from './../customerStyle'
import axios from 'axios';
import Swal from 'sweetalert2';

const Updatecustomer = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFirstname] = useState("");
  const [lname, setLastname] = useState("");
  const [age, setAge] = useState("");
  const [pincode, setPincode] = useState("");
  const [email, setEmail] = useState("");

  const validateForm = () => {
    if (!username.trim() || !password.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Credentials Required',
        text: 'Please enter both username and password',
        confirmButtonColor: '#038ea1'
      });
      return false;
    }

    if (fname.trim() || lname.trim()) {
      if (!fname.trim() || !lname.trim()) {
        Swal.fire({
          icon: 'error',
          title: 'Invalid Name',
          text: 'Please enter both first and last name',
          confirmButtonColor: '#038ea1'
        });
        return false;
      }
    }

    if (age && (isNaN(age) || age < 0)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Age',
        text: 'Please enter a valid age',
        confirmButtonColor: '#038ea1'
      });
      return false;
    }

    if (pincode && pincode.length !== 4) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Pincode',
        text: 'Please enter a valid 4-digit pincode',
        confirmButtonColor: '#038ea1'
      });
      return false;
    }

    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        Swal.fire({
          icon: 'error',
          title: 'Invalid Email',
          text: 'Please enter a valid email address',
          confirmButtonColor: '#038ea1'
        });
        return false;
      }
    }

    return true;
  };

  const updateCustomer = (e) => {
    e && e.preventDefault(); // Prevent form submission if event exists
    
    if (!validateForm()) return;

    axios.post('http://localhost:1300/adminUpdate/adminUpdate', {
      username,
      password,
      fname,
      lname,
      age,
      pincode,
      email
    })
    .then(response => {
      if (response.data.password === 1) {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Customer details updated successfully',
          confirmButtonColor: '#038ea1'
        });
        // Clear form
        setUsername("");
        setPassword("");
        setFirstname("");
        setLastname("");
        setAge("");
        setPincode("");
        setEmail("");
      } else {
        throw new Error('Update failed');
      }
    })
    .catch(error => {
      Swal.fire({
        icon: 'error',
        title: 'Update Failed',
        text: 'Invalid credentials or server error',
        confirmButtonColor: '#038ea1'
      });
    });
  };

  return (
    <FrmWrap>
      <FrmContent>
        <Frm>
          <FrmH1>Update details</FrmH1>
          <ExfrmInput type="text" required placeholder="Existing username" value={username} onChange={(e) => setUsername(e.target.value)}/>
          <ExfrmInput type="password" required placeholder="Existing password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <FrmInput type="text" placeholder="First name" value={fname} onChange={(e) => setFirstname(e.target.value)}/>
          <FrmInput type="text" placeholder="Last name" value={lname} onChange={(e) => setLastname(e.target.value)}/>
          <FrmInput type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)}/>
          <FrmInput type="text" placeholder="Pincode" value={pincode} onChange={(e) => setPincode(e.target.value)}/>
          <FrmInput type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <FrmButton type="button" onClick={updateCustomer}>Update</FrmButton>
        </Frm>
      </FrmContent>
    </FrmWrap>
  );
};

export default Updatecustomer;
