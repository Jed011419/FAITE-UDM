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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import GetAppIcon from '@material-ui/icons/GetApp';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card'; 
import EditIcon from '@material-ui/icons/Edit';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Box from '@material-ui/core/Box';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
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



const defaultProps = {
  marginTop:20,
  
  m: 1,
  border: 2,
  style: { width: '60rem', height: '20rem' },
};


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
  buttons:{
    backgroundColor:'#1b5e20',
    marginLeft:980,
    
    '&:hover': {
      backgroundColor: '#1b5e20',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
  },
  table: {

    marginTop:30,
  },
  labelm: {
    marginTop:100,
    fontSize:50,
    textAlign:'center',
    fontStyle:'italic',
    fontFamily:'times new roman'
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
  media: {
    marginTop:100,
    marginLeft:300,
    height: 200,
    width: 200,
  },
  medias: {
    marginTop:-150,
    marginLeft:480,
    height: 50,
    width: 600,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  
  labelm: {
    marginTop:100,
    fontSize:50,
    textAlign:'center',
    fontStyle:'italic',
    fontFamily:'times new roman'
  },
  
  button:{
    backgroundColor:'#1b5e20',
    marginLeft:600,
    marginTop:50,
    '&:hover': {
      backgroundColor: '#1b5e20',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
  },
  labelsub: {
    marginTop:5,
    fontSize:30,
    textAlign:'center',
    fontStyle:'italic',
    fontFamily:'times new roman'
  },
  labelprof: {
    marginTop:5,
    fontSize:30,
    textAlign:'center',
    fontStyle:'italic',
    fontFamily:'times new roman'
  },
  labelp: {
    marginTop:-15,
    fontSize:30,
    textAlign:'center',
    fontStyle:'italic',
    fontFamily:'times new roman'
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
  pics:{
     height: 250,
     width:250,
      marginTop: 120,
      marginBottom:20,
      marginLeft: 190,
  },
  info:{
    marginLeft:500,
    marginTop:-650,
  },
  formss:{
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      marginTop: theme.spacing(3),
      width: 240,
    },
  },
  foms:{
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      marginTop: theme.spacing(50),
      width: 240,
    },
  },
  edit:{
    backgroundColor:'#1b5e20',
    marginLeft:740,
    marginTop:-40,
    
    '&:hover': {
      backgroundColor: '#1b5e20',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
  },
 boox:{
  marginTop:-450,
  marginLeft:20,
 },
 
}));

export default function ProfileFac({app,router}) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const [anchorset, setAnchorSet] = React.useState(null);
  const [anchorgr, setAnchorGr] = React.useState(null);
  const [anchoren, setAnchorEn] = React.useState(null);
  const [anchorma, setAnchorMa] = React.useState(null);
  const [anchorout, setAnchorOut] = React.useState(null);
  const [anchorencode,setAnchorEncode] = React.useState(null);


	
  const handleClickencode = event => {
    setAnchorEncode(router.history.push('/faculty/Encode'));
  };

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
    setAnchorSet(router.history.push('/faculty/Profile'));
  };

  const handleClosem = () => {
    setAnchorSet(router.history.push('/faculty/resetfac'));
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
        <MenuItem onClick={handleClosem}>
        My Account
        </MenuItem>
      </Menu>
    </div>
    <div>
    <Button startIcon={<ViewListIcon />} 
    aria-controls="encode" 
    aria-haspopup="true" 
    onClick={handleClickencode}>
        Encode Grades
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
       <>

       <CardMedia
        className={classes.pics}
        image="./man.jpg"
      />
       <Box display="flex" justifyContent="center" className={classes.boox}>
       <Box borderColor="#1b5e20" {...defaultProps} />
       </Box>
          </>

      <>
      <div className={classes.info}>
      
    <div className={classes.pro}>
    <form className={classes.foms} noValidate autoComplete="off">
      <div>
      <TextField 
      disabled id="standard-disabled" 
      label="Student Name" 
      defaultValue="Lebron James" />
      <TextField 
      disabled id="standard-disabled" 
      label="Student No." 
      defaultValue="16-40CT-003" />
      </div>
       </form>
      <form className={classes.formss} noValidate autoComplete="off">
      <div>
      <TextField 
      disabled id="standard-disabled" 
      label="Course" 
      defaultValue="Computer Technology" />
       <TextField 
      disabled id="standard-disabled" 
      label="Department" 
      defaultValue="College of Industrial Technology" />
      </div>
    </form>
    </div>
    
    </div>
    </>
      </main>
    </div>
    <Button color="primary"
        variant="contained"
        size="Medium"
        className={classes.edit}
        startIcon={<EditIcon />}
        >
  Edit
</Button>
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

