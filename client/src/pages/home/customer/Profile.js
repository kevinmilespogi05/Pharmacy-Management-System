import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  FormWrap, 
  FormContent, 
  Form, 
  FormH1, 
  FormInput, 
  FormLabel, 
  FormButton 
} from '../customerStyle';

const Profile = () => {
  const [profile, setProfile] = useState({
    fname: '',
    lname: '',
    age: '',
    pincode: '',
    email: '',
    username: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      const username = localStorage.getItem('userId');
      
      const response = await axios.get(`http://localhost:1300/user/profile/${username}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      setProfile(response.data);
    } catch (error) {
      console.error('Error fetching profile:', error);
      setMessage('Error loading profile');
    }
  };

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const username = localStorage.getItem('userId');
      
      const response = await axios.put(
        `http://localhost:1300/user/profile/update/${username}`,
        profile,
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      );

      setMessage('Profile updated successfully!');
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
      setMessage('Error updating profile');
    }
  };

  return (
    <FormWrap>
      <FormContent>
        <Form onSubmit={handleSubmit}>
          <FormH1>My Profile</FormH1>
          {message && <p style={{color: message.includes('Error') ? 'red' : 'green'}}>{message}</p>}
          
          <FormLabel>First Name</FormLabel>
          <FormInput
            type="text"
            name="fname"
            value={profile.fname}
            onChange={handleChange}
            disabled={!isEditing}
          />

          <FormLabel>Last Name</FormLabel>
          <FormInput
            type="text"
            name="lname"
            value={profile.lname}
            onChange={handleChange}
            disabled={!isEditing}
          />

          <FormLabel>Age</FormLabel>
          <FormInput
            type="number"
            name="age"
            value={profile.age}
            onChange={handleChange}
            disabled={!isEditing}
          />

          <FormLabel>Pincode</FormLabel>
          <FormInput
            type="text"
            name="pincode"
            value={profile.pincode}
            onChange={handleChange}
            disabled={!isEditing}
          />

          <FormLabel>Email</FormLabel>
          <FormInput
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            disabled={!isEditing}
          />

          <FormLabel>Username</FormLabel>
          <FormInput
            type="text"
            value={profile.username}
            disabled={true}
          />

          {!isEditing ? (
            <FormButton type="button" onClick={() => setIsEditing(true)}>
              Edit Profile
            </FormButton>
          ) : (
            <>
              <FormButton type="submit">Save Changes</FormButton>
              <FormButton type="button" onClick={() => {
                setIsEditing(false);
                fetchProfile(); // Reset form to original values
              }}>
                Cancel
              </FormButton>
            </>
          )}
        </Form>
      </FormContent>
    </FormWrap>
  );
};

export default Profile; 