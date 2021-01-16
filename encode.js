
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
import PageviewIcon from '@material-ui/icons/Pageview';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ViewListIcon from '@material-ui/icons/ViewList';
import CreateIcon from '@material-ui/icons/Create';


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

function createData(subcode,subtitle,section,units) {
  return { subcode,subtitle,section,units };
}

const rows = [
  createData('CT 023', 'Capstone 2', 'CT 41', 'MTh','8:00-10:00','3'),
  

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
    width:900,
    marginTop:30,
    marginLeft :200
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
  
  buttonv:{
    backgroundColor:'#1b5e20',
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
  
}));

export default function Encode({app,router}) {
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

  
  const handleClosem = () => {
    setAnchorSet(router.history.push('/faculty/resetfac'));
  };

  const handleClosep = () => {
    setAnchorSet(router.history.push('/faculty/Profile'));
  };

  const handleClose = () => {
    setAnchorGr(router.history.push('/faculty/Encode'));
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
        <MenuItem onClick={handleClosem}>
        My Account
        </MenuItem>
      </Menu>
    </div>
    <div>
    <Button  startIcon={<ViewListIcon />} 
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
      ><div className={classes.labelm}>{"Report of Grades"}</div>
        <div className={classes.labelp}>{"Vivien A Agustin"}</div>
  
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Subject Code</StyledTableCell>
            <StyledTableCell>Subject Title</StyledTableCell>
            <StyledTableCell>Section</StyledTableCell>
            <StyledTableCell>Units</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <StyledTableRow key={row.subcode}>
              <StyledTableCell component="th" scope="row">
                {row.subcode}
              </StyledTableCell>
              <StyledTableCell>{row.subtitle}</StyledTableCell>
              <StyledTableCell>{row.section}</StyledTableCell>
              <StyledTableCell>{row.units}</StyledTableCell>
              <StyledTableCell align="right">
        <Button color="primary"
        variant="contained"
        size="Medium"
        className={classes.buttonv}
        startIcon={<CreateIcon />}
        >
 Encode
</Button>          
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
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

