import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

//MUI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

// Mui Icons
import PhoneForwardedIcon from '@material-ui/icons/PhoneForwarded';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MessageIcon from '@material-ui/icons/Message';
import EmailIcon from '@material-ui/icons/Email';

//CSS
import'../App.css';



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    fontSize: 30
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
    fontSize: '3rem',
  },
  Toolbar: {
      maxWidth: 1400,
      width: '100%',
      margin: 'auto'
  },

icons: {
    fontSize: '3rem',
    color: '#959595',
    '&:hover': {
        color: '#FFFFFF',
    },
},
rightIcons: {
    padding: '2rem',
},

}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar  className={classes.Toolbar} centered >
        
    

          <div className={classes.rightIcons}>  
          <Tooltip title="Call NJT">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <PhoneForwardedIcon className={classes.icons} />
          </IconButton>
          </Tooltip>

          <Tooltip title="Send Text Message">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MessageIcon className={classes.icons} />
          </IconButton>
          </Tooltip>

          <Tooltip title="Email NJT">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <EmailIcon  className={classes.icons} />
          </IconButton>
          </Tooltip>

          </div>

        </Toolbar>
      </AppBar>
    </div>
  );
}