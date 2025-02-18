import {useState} from 'react';
import {FormWrap, FormH1del, FormContent, Form, FormInput, FormH1, FormLabel, FormButton} from './../customerStyle'
import axios from 'axios'
import Divider from '@material-ui/core/Divider';
import Swal from 'sweetalert2';

const Searchcustomer = () => {
  const [username, setUsername] = useState("");
  var fname = "";
  var lname = "";
  var age = "";
  var pincode = "";
  var email = "";

  const validateSearch = () => {
    if (!username.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Username Required',
        text: 'Please enter a username to search',
        confirmButtonColor: '#038ea1'
      });
      return false;
    }
    return true;
  };

  const Searchcustomer = async () => {
    if (!validateSearch()) return;

    try {
      const response = await axios.post('http://localhost:1300/searchcustomer/adminsearch', {
        username: username,
      });

      if (response.data && response.data[0]) {
        const user = response.data[0];
        Swal.fire({
          icon: 'info',
          title: 'Customer Found',
          html: `
            <div style="text-align: left">
              <p><strong>Name:</strong> ${user.fname} ${user.lname}</p>
              <p><strong>Age:</strong> ${user.age}</p>
              <p><strong>Email:</strong> ${user.email}</p>
              <p><strong>Pincode:</strong> ${user.pincode}</p>
            </div>
          `,
          confirmButtonColor: '#038ea1'
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Not Found',
          text: 'No customer found with this username',
          confirmButtonColor: '#038ea1'
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Search Failed',
        text: 'Error occurred while searching for customer',
        confirmButtonColor: '#038ea1'
      });
    }
  };

  const Deletecustomer = async () => {
    if (!validateSearch()) return;

    try {
      const result = await Swal.fire({
        icon: 'warning',
        title: 'Are you sure?',
        text: 'This action cannot be undone!',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!'
      });

      if (result.isConfirmed) {
        const response = await axios.post('http://localhost:1300/searchcustomer/admindelete', {
          username: username,
        });

        if (response.data.login === 1) {
          Swal.fire({
            icon: 'success',
            title: 'Deleted!',
            text: 'Customer has been deleted successfully',
            confirmButtonColor: '#038ea1'
          });
          setUsername("");
        } else {
          throw new Error('Delete failed');
        }
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Delete Failed',
        text: 'Error occurred while deleting customer',
        confirmButtonColor: '#038ea1'
      });
    }
  };

  return (
    <>
    <FormWrap>
       <FormContent>
         <Form onSubmit={(e) => {
           e.preventDefault();
           Searchcustomer();
         }}>
           <FormH1>Search/Delete Customer</FormH1>
           <FormLabel>Username</FormLabel>
             <FormInput type = 'text' required value={username} onChange ={(event) => {setUsername(event.target.value)}}/>
           <div style={{ display: 'flex', gap: '10px' }}>
             <FormButton type="submit">Search</FormButton>
             <FormButton type="button" onClick={Deletecustomer} style={{ backgroundColor: '#d33' }}>
               Delete
             </FormButton>
           </div>
         </Form>
       </FormContent>
     </FormWrap>
   </>
  )
}
export default Searchcustomer;

