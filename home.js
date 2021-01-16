
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
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';



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
  buttons:{
    backgroundColor:'#1b5e20',
    marginLeft:980,
    
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
  media:{
    marginTop:100,
    marginLeft:400,
    height:500,
    width:500,
    position: 'absolute',
  },

  mission :{
    backgroundColor: '#1b5e20',
    width:320,
    marginTop:520,
    marginLeft:250,
    borderRadius:5,
    color: '#fafafa'
  },

  labelmis:{
    marginLeft:20,
    fontSize:28,
    fontFamily:'times new roman',
  },
  vision :{
    backgroundColor: '#1b5e20',
    width:320,
    marginTop:-462,
    marginLeft:750,
    borderRadius:5,
    color:'#fafafa'
  },
  
  labelviso:{
    marginLeft:200,
    fontSize:28,
    fontFamily:'times new roman',
  },

  labelvis:{
    marginLeft:20,
    fontSize:28,
    fontFamily:'times new roman',
  },
  
  left:{
    height:200,
    width:200,
    marginLeft:200,
    marginTop:30,
  },

  lefts:{
    height:190,
    width:220,
    marginLeft:200,
    marginTop:30,
  },

  center:{
    height:200,
    width:200,
    marginLeft:550,
    marginTop:-200,
  },
  
  right:{
    height:200,
    width:200,
    marginLeft:900,
    marginTop:-200,
  },

  centers:{
    height:250,
    width:190,
    marginLeft:550,
    marginTop:-200,
  },

   centerss:{
    height:200,
    width:200,
    marginLeft:550,
    marginTop:20,
  }, 
}));

export default function Checklist({app,router}) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const [anchorset, setAnchorSet] = React.useState(null);
  const [anchorgr, setAnchorGr] = React.useState(null);
  const [anchoren, setAnchorEn] = React.useState(null);
  const [anchorma, setAnchorMa] = React.useState(null);

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
  const handleClose = () => {
    setAnchorSet(null);
    setAnchorGr(null);
    setAnchorEn(null);
    setAnchorMa(null);
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
        <MenuItem onClick={handleClose}>
        My Account
        </MenuItem>
      </Menu>
    </div>
    <div>
    <Button  startIcon={<GradeIcon />} aria-controls="gr" aria-haspopup="true" onClick={handleClicks}>
        E-Grades
      </Button>
      <Menu
        id="gr"
        anchorEl={anchorgr}
        keepMounted
        open={Boolean(anchorgr)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Grades</MenuItem>
        <MenuItem onClick={handleClose}>Checklist</MenuItem>
      </Menu>
      </div>
      <div>
    <Button startIcon={<ListIcon />} aria-controls="en" aria-haspopup="true" onClick={handleClickss}>
        Enroll
      </Button>
      <Menu
        id="en"
        anchorEl={anchoren}
        keepMounted
        open={Boolean(anchoren)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Enroll</MenuItem>
        <MenuItem onClick={handleClose}>Study Plan</MenuItem>
        <MenuItem onClick={handleClose}>Reconsideration</MenuItem>
        <MenuItem onClick={handleClose}>HD/LOA</MenuItem>
        <MenuItem onClick={handleClose}>Shift</MenuItem>
      </Menu>
      </div>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
      <CardMedia
        className={classes.media}
        image="/udm.png"
      />
      <div className ={classes.mission}>
        <Typography className={classes.labelmis}>Mission</Typography>
        <Typography className={classes.labelmis}>Universidad De Manila promotes free
        and quality tertiary education for the underprileged youth, relevant curricular
        and research programs, nad responsive extensions services all these benefiting
        the City of Manila and the country.</Typography>
      </div >

      <div className ={classes.vision}> 
        <Typography className={classes.labelviso}>Vision</Typography>
        <Typography className={classes.labelvis}>Universidad De Manila promotes free
        and quality tertiary education for the underprileged youth, relevant curricular
        and research programs, nad responsive extensions services all these benefiting
        the City of Manila and the country.</Typography>
      </div >

      <CardMedia
        className={classes.left}
        image="/cas.jpg"
      />

      <CardMedia
        className={classes.center}
        image="/cba.jpeg"
      /> 

      <CardMedia
        className={classes.right}
        image="/cbe.jpeg"
      />

       <CardMedia
        className={classes.left}
        image="/ced.jpg"
      />

      <CardMedia
        className={classes.centers}
        image="/cet.jpg"
      /> 

      <CardMedia
        className={classes.right}
        image="/chk.jpeg"
      /> 

      <CardMedia
        className={classes.lefts}
        image="/chs.jpeg"
      />

      <CardMedia
        className={classes.center}
        image="/cit.jpeg"
      /> 

      <CardMedia
        className={classes.right}
        image="/coc.jpg"
      />


      <CardMedia
        className={classes.centerss}
        image="/cpa.jpeg"
      /> 
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

