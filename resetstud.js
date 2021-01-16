import React from 'react';
import clsx from 'clsx';
import { withStyles,makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import SettingsIcon from '@material-ui/icons/Settings';
import GradeIcon from '@material-ui/icons/Grade';
import ListIcon from '@material-ui/icons/List';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ViewListIcon from '@material-ui/icons/ViewList';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © Universidad De Manila'}
      <Link color="inherit" href="https://material-ui.com/">
  
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;



const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
     backgroundColor: "#1b5e20",
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  menu:{
    marginLeft:80,
    marginTop:30,
  },
  button:{
    backgroundColor:'#1b5e20',
    marginLeft:40,
    
    '&:hover': {
      backgroundColor: '#1b5e20',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
  },
  button:{
    backgroundColor:'#1b5e20',
    marginLeft:600,
    marginTop:20,
    
    '&:hover': {
      backgroundColor: '#1b5e20',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    background: 'linear-gradient(45deg, #0e6b0e 100%, #FF8E53 0%)',
    padding: theme.spacing(6, 4),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[2000] : theme.palette.grey[800],
  },
  roots: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  user:{
    marginBottom:10,
  },
  pass: {
    marginBottom:10,
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(5),
  },
}));

export default function ResetStud({app,router}) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
const [anchorset, setAnchorSet] = React.useState(null);
  const [anchorgr, setAnchorGr] = React.useState(null);
  const [anchoren, setAnchorEn] = React.useState(null);
  const [anchorma, setAnchorMa] = React.useState(null);
  const [anchorout, setAnchorOut] = React.useState(null);
  const [anchorform, setAnchorForm] = React.useState(null);
  
  
  const handleClick = event => {
    setAnchorSet(event.currentTarget);
  };

  const handleClicks = event => {
    setAnchorGr(event.currentTarget);
  };
  const handleClickss = event => {
    setAnchorEn(event.currentTarget);
  };
   const handleClicksss = event => {
    setAnchorMa(event.currentTarget);
  };
  const handleClickout = event => {
    setAnchorOut(router.history.push('/'));
  };
  const handleClose = () => {
    setAnchorSet(router.history.push('/student/Profile'));
  };

  const handleClickform = () => {
    setAnchorEn(router.history.push('/student/Subjects'));
  };

  const handleCloseres = () => {
    setAnchorSet(router.history.push('/student/resetstud'));
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Universidad De Manila
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
         <div>
      <Button startIcon={<SettingsIcon />} aria-controls="set" aria-haspopup="true" onClick={handleClick}>
        Settings
      </Button>
      <Menu
        id="set"
        anchorEl={anchorset}
        keepMounted
        open={Boolean(anchorset)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
        Profile
        </MenuItem>
        <MenuItem onClick={handleCloseres}>
        My Account
        </MenuItem>
      </Menu>
    </div>
      <div>
    <Button 
    startIcon={<ListIcon />} 
    aria-controls="form" 
    aria-haspopup="true" 
    onClick={handleClickform}>
        Subjects
      </Button>
      </div>
      <div>
      <Button 
      startIcon={<ExitToAppIcon />} 
      aria-controls="out" 
      aria-haspopup="true" 
      onClick={handleClickout}>
        Logout
      </Button>
      </div>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Manage your Account
        </Typography>
        <form className={classes.form} noValidate>
            <Grid className={classes.user} item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="username"
                label="Username"
                id="user"
                autoComplete="username"
              />
            </Grid>
            <Grid className={classes.pass} item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Input Old Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              </Grid>
              <Grid className={classes.pass} item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label=" New Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid><Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Re-input Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
        </form>
      </div>
    </Container>
            <Button color="primary"
        variant="contained"
        size="Medium"
        className={classes.button}
        startIcon={<ArrowUpwardIcon />}
        >
  Update  
</Button>
      </main>
    </div>
    <div className={classes.roots}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </footer>
    </div>
    </>
  );
}

