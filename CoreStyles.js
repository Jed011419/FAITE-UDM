import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
const drawerWidth = 240;

const useStyles = makeStyles((theme) =>{ 

  return ({
    card: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
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
    avatar: {
      backgroundColor: red[500],
    },    
    spacing: 0,
    switchField: {
      padding: 0,
    },    
    lookupDrawerList: {
      width: 250,
    },
    lookupDrawerFullList: {
        width: 'auto',
    },
    lookupIconButton: {
      padding: 0,
      margin: 0,
      color: red[800]
    },
    lookupSearchField: {
      marginRight: theme.spacing(1),
    },
    hiddenGridItem: {
      display: 'none',
    },     
    root: {
      display: 'flex',
    },
    dotbox: {
      width: '1px',
      height: '1px',
      overflow: 'hidden',
    },
    toolbar: {
      paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    menuButtonHidden: {
      display: 'none',
    },
    title: {
      flexGrow: 1,
    },
    drawerPaper: {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerPaperClose: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },
    container: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    paper: {
      padding: theme.spacing(1),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    paperCenter: {
      padding: theme.spacing(1),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',    
      alignItems: 'center'
    }, 
    fixedHeight: {
      height: 240,
    },
    '@global': {
      body: {
        backgroundColor: theme.palette.common.white,
      },
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main + ' !important',
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    formControl: {
      margin: theme.spacing(1),
    },    
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    loginmedia: {
      height: 200,
    },    
    bigAvatar: {
      margin: 10,
      width: '300px !important',
      height: '300px !important',
    },    
    titlecard: {
      maxWidth: 500,  
    },
    titlecardmedia: {
      height: 300,
    },
    titlecardmediasmall: {
      height: 150,
    },
    previewFullHeight: {
      height: '90vh',
      display: 'inline-block',
      margin: '0 auto'
    }   
  });
});

export default useStyles;