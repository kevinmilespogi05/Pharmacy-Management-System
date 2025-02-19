import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
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
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button onClick ={e=>{
      e.preventDefault();
      window.location.href = '/medicine'
    }}>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Medicines" />
    </ListItem>
    <ListItem button  onClick={(e) => {
      e.preventDefault();
      window.location.href='/customer';
      }}>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Customers" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Transactions" button onClick = {(e)=>{
       e.preventDefault();
       window.location.href='/bills';
    }} />
    </ListItem>
    <ListItem button onClick={redirectProfile}>      
      <ListItemIcon>
        <AccountCircleIcon />
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
        <ExitToAppIcon/>
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItem>
  </div>
);


