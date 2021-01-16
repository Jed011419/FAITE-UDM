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
import PrintIcon from '@material-ui/icons/Print';
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import GetAppIcon from '@material-ui/icons/GetApp';

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


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const drawerWidth = 240;

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "#1b5e20",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: "none",
    },
  },
}))(TableRow);
function createData(subcode, subtitle, units, days, time,room,grades) {
  return { subcode, subtitle, units, days, time,room,grades };
}

const rows = [
  createData('OJT 2', 'On-The-Job Training 2', 12, 'MTH', '1:00pm-4:00pm','Field'),
  createData('CTE 013', 'Software Engineering', 3, 'MTH', '8:30am-11:30am',),
  createData('CT 023', 'Capstone 2', 3, 'TF', '8:00am-11:00am',),
  createData('CTE 011', 'Visual Basic', 3, 'TF', '1:00pm-4:00pm','305'),
];



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
  label: {
    marginTop:100,
    fontSize:50,
    textAlign:'center',
    fontStyle:'italic',
    fontFamily:'times new roman'
  },
  rform:{
    align:'center',
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      marginLeft: theme.spacing(25),
      width: 200,
      fontFamily:'times new roman',
    },
  },
  dchair:{
    marginLeft:1000,
    marginTop:-57,
  },
  button:{
    backgroundColor:'#1b5e20',
    marginLeft:40,
    marginTop:48,
    '&:hover': {
      backgroundColor: '#1b5e20',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
  },

  buttonp:{
    backgroundColor:'#1b5e20',
    marginLeft:480,
    marginTop:50,
    '&:hover': {
      backgroundColor: '#1b5e20',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
  },
  buttone:{
    backgroundColor:'#1b5e20',
    marginLeft:40,
    marginTop:50,
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
  table: {
    minWidth: 500,
    width:1025,
    marginLeft:190,
    fontFamily:'times new roman',
    backgroundColor:'#1b5e20',
  },
  tables: {
    minWidth: 500,
    width:1025,
    marginLeft:190,
    fontFamily:'times new roman',
     },
  
 
}));

export default function Subjects({app,router}) {
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
    setAnchorSet(router.history.push('/student/Subjects'));
  };

  const handleClosep = () => {
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
        <MenuItem onClick={handleClosep}>
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
      </div>  <div>
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
<div className={classes.label}>{"Subjects to be Enroll"}</div>
    <form className={classes.rform} noValidate autoComplete="off">
     <TextField disabled 
     id="standard-required" 
     label="Surname"
     defaultValue="Gajonera" 
     />
     <TextField disabled 
     id="standard-required" 
     label="First Name"
     defaultValue="Jed Patrick" 
     />
     <TextField disabled 
     id="standard-required" 
     label="Last Name" 
     defaultValue="G"
     />
     </form>

     <form className={classes.rform} noValidate autoComplete="off">
     <TextField disabled 
     id="standard-required" 
     label="Student Number"
     defaultValue="16-40CT-003" 
     />
     <TextField disabled 
     id="standard-required" 
     label="Course"
     multiline
          rowsMax="4"
     defaultValue="Bachelor in Industrial Technology"
     />
     <TextField disabled 
     id="standard-required"
     multiline
          rowsMax="4" 
     label="Course"
     defaultValue="Computer Technology" 
     />
     </form>
     
      <form className={classes.rform} noValidate autoComplete="off">
     <TextField required 
     id="standard-required" 
     label="Section" 
     />
     <TextField disabled
     id="standard-required"
     defaultValue="Warning Status" 
     label="Academic Status" 
     />
     </form>
    
      <Table className={classes.tables}aria-label="simple table">
        <TableHead className={classes.table}>
          <TableRow>
            <StyledTableCell>Subject Code</StyledTableCell>
            <StyledTableCell align="center">Subject Title</StyledTableCell>
            <StyledTableCell align="center">Units</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.subcode}>
              <TableCell component="th" scope="row">
                {row.subcode}
              </TableCell>
              <TableCell align="center">{row.subtitle}</TableCell>
              <TableCell align="center">{row.units}</TableCell>
            </TableRow>

          ))}

        </TableBody>

      </Table>
    
     <Button color="primary"
        variant="contained"
        size="large"
        className={classes.buttonp}
        startIcon={<PrintIcon />}
        onClick={handleClick}>
  Print
</Button>
      <Button color="primary"
        variant="contained"
        size="large"
        className={classes.button}
        startIcon={<GetAppIcon />}
        onClick={handleClick}>
  Download
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

 