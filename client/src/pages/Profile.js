import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  Avatar,
  Grid,
  Snackbar,
  CircularProgress,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import LocalPharmacyIcon from '@material-ui/icons/LocalPharmacy';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import MedicalServicesIcon from '@material-ui/icons/LocalHospital';
import { useStyles } from './profileStyles';

const Profile = () => {
  const classes = useStyles();
  const [userData, setUserData] = useState({
    fname: '',
    lname: '',
    age: '',
    pincode: '',
    email: '',
    username: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        const userId = localStorage.getItem('userId');
        const token = localStorage.getItem('token');
        
        if (!token) {
          setError('Authentication token not found. Please login again.');
          return;
        }

        const response = await axios.get(`http://localhost:1300/user/profile/${userId}`, {
          headers: { token: token }
        });
        setUserData(response.data);
        setError('');
      } catch (error) {
        console.error('Error fetching user data:', error);
        setError(error.response?.data?.message || 'Failed to load user data');
        setMessage('Failed to load user data');
        setOpenSnackbar(true);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!userData.fname || !userData.lname) {
      setError('First name and last name are required');
      setMessage('First name and last name are required');
      setOpenSnackbar(true);
      return false;
    }
    if (userData.age && (isNaN(userData.age) || userData.age < 0)) {
      setError('Age must be a valid number');
      setMessage('Age must be a valid number');
      setOpenSnackbar(true);
      return false;
    }
    if (userData.email && !/\S+@\S+\.\S+/.test(userData.email)) {
      setError('Please enter a valid email address');
      setMessage('Please enter a valid email address');
      setOpenSnackbar(true);
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      setLoading(true);
      const userId = localStorage.getItem('userId');
      const token = localStorage.getItem('token');
      
      if (!token) {
        setError('Authentication token not found. Please login again.');
        setMessage('Authentication token not found. Please login again.');
        setOpenSnackbar(true);
        return;
      }

      const response = await axios.put(
        `http://localhost:1300/user/profile/update/${userId}`, 
        userData,
        {
          headers: { token: token }
        }
      );

      setMessage('Profile updated successfully!');
      setOpenSnackbar(true);
      setIsEditing(false);
      setError('');
      
      // Update the displayed data with the response
      if (response.data.user) {
        setUserData(response.data.user);
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      setError(error.response?.data?.message || 'Failed to update profile');
      setMessage(error.response?.data?.message || 'Failed to update profile');
      setOpenSnackbar(true);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  if (loading && !isEditing) {
    return (
      <Container maxWidth="md" className={classes.container}>
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" className={classes.container}>
      <Paper className={classes.paper}>
        <Box className={classes.header}>
          <Avatar className={classes.avatar}>
            <LocalPharmacyIcon fontSize="large" />
          </Avatar>
          <Typography variant="h4" component="h1" className={classes.title}>
            Pharmacy Staff Profile
          </Typography>
        </Box>

        {error && !openSnackbar && (
          <Box mt={2} mb={2}>
            <Alert severity="error">{error}</Alert>
          </Box>
        )}

        <form onSubmit={handleSubmit} className={classes.form}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="First Name"
                name="fname"
                value={userData.fname || ''}
                onChange={handleInputChange}
                disabled={!isEditing}
                variant="outlined"
                className={classes.textField}
                error={isEditing && !userData.fname}
                helperText={isEditing && !userData.fname ? 'First name is required' : ''}
                InputProps={{
                  startAdornment: (
                    <MedicalServicesIcon className={classes.inputIcon} />
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Last Name"
                name="lname"
                value={userData.lname || ''}
                onChange={handleInputChange}
                disabled={!isEditing}
                variant="outlined"
                className={classes.textField}
                error={isEditing && !userData.lname}
                helperText={isEditing && !userData.lname ? 'Last name is required' : ''}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Age"
                name="age"
                type="number"
                value={userData.age || ''}
                onChange={handleInputChange}
                disabled={!isEditing}
                variant="outlined"
                className={classes.textField}
                error={isEditing && userData.age && (isNaN(userData.age) || userData.age < 0)}
                helperText={isEditing && userData.age && (isNaN(userData.age) || userData.age < 0) ? 'Please enter a valid age' : ''}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Pincode"
                name="pincode"
                value={userData.pincode || ''}
                onChange={handleInputChange}
                disabled={!isEditing}
                variant="outlined"
                className={classes.textField}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={userData.email || ''}
                onChange={handleInputChange}
                disabled={!isEditing}
                variant="outlined"
                className={classes.textField}
                error={isEditing && userData.email && !/\S+@\S+\.\S+/.test(userData.email)}
                helperText={isEditing && userData.email && !/\S+@\S+\.\S+/.test(userData.email) ? 'Please enter a valid email' : ''}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Username"
                name="username"
                value={userData.username || ''}
                disabled={true}
                variant="outlined"
                className={classes.textField}
              />
            </Grid>
          </Grid>

          <Box className={classes.buttonContainer}>
            {isEditing ? (
              <>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  startIcon={loading ? <CircularProgress size={20} /> : <SaveIcon />}
                  className={classes.saveButton}
                  disabled={loading}
                >
                  {loading ? 'Saving...' : 'Save Changes'}
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => {
                    setIsEditing(false);
                    setError('');
                  }}
                  startIcon={<CancelIcon />}
                  className={classes.cancelButton}
                  disabled={loading}
                >
                  Cancel
                </Button>
              </>
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={() => setIsEditing(true)}
                startIcon={<EditIcon />}
                className={classes.editButton}
                disabled={loading}
              >
                Edit Profile
              </Button>
            )}
          </Box>
        </form>

        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={message.includes('success') ? 'success' : 'error'}
          >
            {message}
          </Alert>
        </Snackbar>
      </Paper>
    </Container>
  );
};

export default Profile;