import React from 'react';
import {Link} from "react-router-dom";
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
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
//CSS
import'../App.css';


//Drawer stuff
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

//Drawer  Icons
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import FindReplaceIcon from '@material-ui/icons/FindReplace';
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';
import HomeIcon from '@material-ui/icons/Home';

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
      margin: 'auto',
      centered:"true"
  },
  logoHeader: {
      fontFamily: 'Arial',
      fontSize: '1.2rem',
      display: 'inline-block',
      color: '#959595',
      letterSpacing: 0,
      paddingLeft: 8
  },
icons: {
    fontSize: '3rem',
    color: '#959595',
    '&:hover': {
        color: '#FFFFFF',
    },
},
rightIcons: {
    padding: '2rem'
},
list: {
  width: 300,
  marginTop: 'auto',
  marginBottom: 'auto',

},
fullList: {
  width: 'auto',
  verticalAlign: 'middle',
},
flash: {
  transform: 'rotate(-90deg)',
},

arrow: {
  position: 'fixed',
  right: 15,
  top: '50%',
  zIndex: 3

},
  menu: {
    fontSize:'2rem',
    opacity: '.5',
    "&:hover": {
      opacity: '.9',
      cursor: 'pointer'
    }
  },
  

}));

export default function Navbar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
      
      <Link to="/sell" style={{ textDecoration: 'none' }}>
      <ListItem  button>
      <ListItemIcon><AttachMoneyIcon/></ListItemIcon>
      <ListItemText>Components Wanted</ListItemText>
    </ListItem>
    </Link>
    <Divider />

    <Link to="/E-Waste" style={{ textDecoration: 'none' }}>
    <ListItem button>
      <ListItemIcon><DeleteForeverIcon/></ListItemIcon>
      <ListItemText>E-Waste Removal</ListItemText>
    </ListItem>
    </Link>
  <Divider />

  <Link to="/sourcing" style={{ textDecoration: 'none' }}>
  <ListItem button>
  <ListItemIcon><FindReplaceIcon /></ListItemIcon>
  <ListItemText>Source A Machine-Part</ListItemText>
</ListItem>
</Link>

<Divider />
<ListItem></ListItem>
<Divider />

<Link to="/location" style={{ textDecoration: 'none' }}>
<ListItem  button>
<ListItemIcon><OfflineBoltIcon  className={classes.flash}/></ListItemIcon>
<ListItemText>Areas Serviced</ListItemText>
</ListItem>
</Link>

<Divider />      

<Link to="/about" style={{ textDecoration: 'none' }}>
<ListItem button>
<ListItemIcon><OfflineBoltIcon  className={classes.flash}/></ListItemIcon>
<ListItemText>FAQ / About</ListItemText>
</ListItem>
</Link>
<Divider />    

<Link to="/contact" style={{ textDecoration: 'none' }}>
<ListItem button>
<ListItemIcon><OfflineBoltIcon  className={classes.flash}/></ListItemIcon>
<ListItemText>Contact NJT</ListItemText>
</ListItem>
</Link>
<Divider />    

<Link to="/" style={{ textDecoration: 'none' }}>
<ListItem button>
<ListItemIcon><HomeIcon/></ListItemIcon>
<ListItemText>HOME</ListItemText>
</ListItem>
</Link>
<Divider />    
      </List>
    </div>

  );
  return (
  <nav>
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.Toolbar} >
          <Typography variant="h4" className={classes.title}>
          <Tooltip title="Back To Home" placement="bottom-start">
          <div className='logo'>
          <Link to="/" className='logo'>
         NJT
          </Link>
           <div className={classes.logoHeader}> Automation Salvage
            <div>Milwaukee, WI</div>   
           </div>
           </div> 

           </Tooltip>
          </Typography>


          <div className={classes.rightIcons}>  

          <Tooltip title="Menu">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer('right', true)}>
          <ArrowDropDownIcon className={classes.icons} />
          </IconButton>
          </Tooltip>
          
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

      <div>
      <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
        {sideList('right')}
      </Drawer>
    </div>
    <Tooltip title="Navigation" placement="left">
    <div className={classes.arrow}>
      <ArrowBackIosIcon className={classes.menu} onClick={toggleDrawer('right', true)}/>
      </div>
      </Tooltip>
    </div>
    </nav>
  );
}