import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(4),
    margin: theme.spacing(4),
    backgroundColor: '#fff',
    borderRadius: 16,
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    overflow: 'hidden',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '200px',
      background: 'linear-gradient(135deg, #1976d2 0%, #64b5f6 100%)',
      zIndex: 0,
    }
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(6),
    padding: theme.spacing(3),
    color: 'white',
    position: 'relative',
    zIndex: 1,
  },
  avatar: {
    width: theme.spacing(9),
    height: theme.spacing(9),
    backgroundColor: '#fff',
    color: '#1976d2',
    marginRight: theme.spacing(3),
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
    }
  },
  title: {
    fontWeight: 600,
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  form: {
    marginTop: theme.spacing(3),
    position: 'relative',
    zIndex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: theme.spacing(4),
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: theme.spacing(2),
    marginTop: theme.spacing(4),
  },
  inputIcon: {
    color: theme.palette.primary.main,
    marginRight: theme.spacing(1),
  },
  textField: {
    '& .MuiOutlinedInput-root': {
      borderRadius: 8,
      transition: 'transform 0.2s ease',
      '&:hover': {
        transform: 'translateY(-2px)',
      },
      '&.Mui-focused': {
        transform: 'translateY(-2px)',
      },
      '&.Mui-disabled': {
        backgroundColor: '#f5f5f5',
        '& fieldset': {
          borderColor: 'rgba(0, 0, 0, 0.1)',
        }
      }
    },
    '& .MuiInputLabel-outlined': {
      transform: 'translate(14px, 16px) scale(1)',
    },
    '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
      transform: 'translate(14px, -6px) scale(0.75)',
    }
  },
  editButton: {
    borderRadius: 8,
    padding: '10px 24px',
    textTransform: 'none',
    fontWeight: 600,
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 16px rgba(0, 0, 0, 0.15)',
    }
  },
  saveButton: {
    borderRadius: 8,
    padding: '10px 24px',
    textTransform: 'none',
    fontWeight: 600,
    background: 'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)',
    boxShadow: '0 4px 12px rgba(33, 150, 243, 0.3)',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 16px rgba(33, 150, 243, 0.4)',
    }
  },
  cancelButton: {
    borderRadius: 8,
    padding: '10px 24px',
    textTransform: 'none',
    fontWeight: 600,
    borderColor: theme.palette.secondary.main,
    '&:hover': {
      transform: 'translateY(-2px)',
      backgroundColor: 'rgba(244, 67, 54, 0.04)',
    }
  }
})); 