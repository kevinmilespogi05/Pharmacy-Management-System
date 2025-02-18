import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Deposits from './Deposits';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Functions from './functions';
import {Link as LinkR} from 'react-router-dom';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/kevinmilespogi05">
        DOSE
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#038ea1',
  },
  toolbar: {
    paddingRight: 24,
    [theme.breakpoints.down('sm')]: {
      paddingRight: 10,
    },
  },
  title: {
    flexGrow: 1,
    fontSize: '1.5rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.2rem',
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    backgroundColor: '#f5f5f5',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1.5),
    },
  },
  fixedHeight: {
    height: 240,
    [theme.breakpoints.down('sm')]: {
      height: 200,
    },
  },
  logoutIcon: {
    fontSize: '24px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '20px',
    },
  },
  gridContainer: {
    [theme.breakpoints.down('sm')]: {
      spacing: 2,
    },
  },
  copyright: {
    marginTop: 'auto',
    padding: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
    },
  }
}));

export default function Dashboard() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Dashboard
          </Typography>
          <IconButton color="inherit">
            <LinkR to='/signin' style={{textDecoration:"none", color: "white"}}>
              <ExitToAppIcon className={classes.logoutIcon} />
            </LinkR>
          </IconButton>
        </Toolbar>
      </AppBar>
      
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3} className={classes.gridContainer}>
            {/* Services */}
            <Grid item xs={12}>
              <Functions/>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} sm={12} md={12}>
              <Paper className={fixedHeightPaper}>
                <Deposits />
              </Paper>
            </Grid>            
          </Grid>
          
          <Box className={classes.copyright}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}