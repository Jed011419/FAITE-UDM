import React,{useState} from 'react';
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
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Snackbar from '@material-ui/core/Snackbar';
import CardMedia from '@material-ui/core/CardMedia';
import MuiAlert from '@material-ui/lab/Alert';


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

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
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
  paper:{
    marginTop:100,
    textAlign:'center',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
     backgroundColor:'#1b5e20',
  },
  formControl:{
    margin: theme.spacing(1),
    minWidth:120,
    width:500,
  },
  log:{
    marginTop:-436,
    marginLeft:900,
  },
  media: {
    marginTop:-400,
    marginLeft:40,
    height: 150,
    width: 150,
  },

}));

export default function NewAcc({app,router}) {
  const classes = useStyles();
  const theme = useTheme();
   const [open, setOpen] = React.useState(false);
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  

  const [usertype,setUsertype]=React.useState('');
  const handleChange= event =>{
    setUsertype(event.target.value);
  };

  return (
    <>
    <Container  component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Create New User
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel className={classes.input} id="filled-label">User Type</InputLabel>
        <Select
        className={classes.select}
        labelId="filled-label"
        id="filled"
        value={usertype}
        onChange={handleChange}
        >
        <MenuItem  value={"Student"}>Student</MenuItem>
        <MenuItem value={"Faculty"}>Faculty</MenuItem>
        <MenuItem value={"VPAA"}>VPAA</MenuItem>
        </Select>
        </FormControl>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="idno"
                label="ID Number"
                name="idno"
                autoComplete="idno"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="department"
                label="Department"
                id="dep"
                autoComplete="department"
              />
            </Grid>
            <Grid item xs={12}>
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
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
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
            
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleClick}
          >
            Add Account
          </Button>
           <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Account Successfully Added!
        </Alert>
      </Snackbar>
        </form>
      </div> 
    </Container>

    <Container  maxWidth="sm" className={classes.log}>
    <form className={classes.form} noValidate>
            <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(event) => {
                setEmail(event.target.value)
            }}
            />
           </Grid>
           <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(event) => {
                setPassword(event.target.value)
            }}
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={event => {
                if(email === 'student' && password === '1234') {
                    sessionStorage.setItem('user-info', '{ "email":"'+ email + '", "password":"' + password +  '"}');
                    router.history.push('/student/clist');
                }
                else if(email === 'faculty' && password === '1234'){
                    sessionStorage.setItem('user-info', '{ "email":"'+ email + '", "password":"' + password +  '"}');
                    router.history.push('/faculty/ftaviewfac');
                }
                else if(email === 'dean' && password === '1234'){
                    sessionStorage.setItem('user-info', '{ "email":"'+ email + '", "password":"' + password +  '"}');
                    router.history.push('/dean/resetdean');
                }
                else if(email === 'vpaa' && password === '1234'){
                    sessionStorage.setItem('user-info', '{ "email":"'+ email + '", "password":"' + password +  '"}');
                    router.history.push('/vpaa/resetvpaa');
                }
                else if(email === 'admin' && password === 'admin'){
                    sessionStorage.setItem('user-info', '{ "email":"'+ email + '", "password":"' + password +  '"}');
                    router.history.push('/admin/resetreg');
                }
            }}
            >
              Sign In
            </Button>
            </Grid>
             <CardMedia
        className={classes.media}
        image="/udm.png"
      />
        </form>    
    </Container>
    </>
  );
}

