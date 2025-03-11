import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import HomeIcon from '@material-ui/icons/Home';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import GroupIcon from '@material-ui/icons/Group';
import ReceiptIcon from '@material-ui/icons/Receipt';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from 'react-router-dom';
import { 
  redirectHome, 
  redirectMed, 
  redirectCust, 
  redirectBill, 
  redirectProfile,
  logout 
} from './functions';

export const mainListItems = (
  <div>
    <ListItem button onClick={(e) => {
      e.preventDefault();
      window.location.href='/home';
      }}>
      <ListItemIcon>
        <HomeIcon style={{ color: '#038ea1' }} />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button onClick ={e=>{
      e.preventDefault();
      window.location.href = '/medicine'
    }}>
      <ListItemIcon>
        <LocalHospitalIcon style={{ color: '#038ea1' }} />
      </ListItemIcon>
      <ListItemText primary="Medicines" />
    </ListItem>
    <ListItem button  onClick={(e) => {
      e.preventDefault();
      window.location.href='/customer';
      }}>
      <ListItemIcon>
        <GroupIcon style={{ color: '#038ea1' }} />
      </ListItemIcon>
      <ListItemText primary="Customers" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ReceiptIcon style={{ color: '#038ea1' }} />
      </ListItemIcon>
      <ListItemText primary="Transactions" button onClick = {(e)=>{
       e.preventDefault();
       window.location.href='/bills';
    }} />
    </ListItem>
    <ListItem button onClick={redirectProfile}>      
      <ListItemIcon>
        <PersonIcon style={{ color: '#038ea1' }} />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItem>
  </div>
);

export const Logout = (
  <div>
    <ListSubheader inset>Other options</ListSubheader>
    <ListItem button  onClick={(e) => {
      e.preventDefault();
      window.location.href='/';
      }}>
      <ListItemIcon>
        <ExitToAppIcon style={{ color: '#038ea1' }} />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItem>
  </div>
);


