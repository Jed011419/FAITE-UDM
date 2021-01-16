import React, { useEffect } from 'react';
import clsx from 'clsx';
import { HashRouter, Route, Redirect } from 'react-router-dom'

import CssBaseline from '@material-ui/core/CssBaseline';

import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';

import MenuIcon from '@material-ui/icons/Menu';
import AddBoxIcon from '@material-ui/icons/AddBox';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import CheckIcon from '@material-ui/icons/Check';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ClearIcon from '@material-ui/icons/Clear';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import FilterListIcon from '@material-ui/icons/FilterList';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import LastPageIcon from '@material-ui/icons/LastPage';
import RemoveIcon from '@material-ui/icons/Remove';
import SaveIcon from '@material-ui/icons/Save';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import SearchIcon from '@material-ui/icons/Search';
import ViewColumnIcon from '@material-ui/icons/ViewColumn';
import ViewListIcon from '@material-ui/icons/ViewList';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';

import useStyles from './CoreStyles';

import AppController from './AppController';
import Routes from '../module/Routes';
import Subjects from '../module/subjects';
import ResetStud from '../module/resetstud';

import ResetFac from '../module/resetfac';
import Encode from '../module/encode';

import NewAcc from '../module/newacc';
import Profile from '../module/profile';
import ProfileFac from '../module/profilefac';

export default function Viewport() {

  const classes = useStyles();

  const [rendered, setRendered] = React.useState(false);
  const [appDrawerIsOpen, setAppDrawerIsOpen] = React.useState(false);
  const [appIsAuthenticated, setAppIsAuthenticated] = React.useState(false);
  const [appUser, setAppUser] = React.useState({
    "role_id": "admin",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJiaXJ0aGRheSI6IjE5ODItMDEtMDEiLCJlbWFpbCI6InJvb3QiLCJmaXJzdG5hbWUiOiJhZG1pbiIsImdlbmRlciI6Ik0iLCJpZCI6IjI3NDFlMGU3LTE5YWEtNGZiZS05ZTJhLTMyNjgwYzY5YTQxOCIsImxhc3RuYW1lIjoidXNlciIsIm1pZGRsZW5hbWUiOiJ0ZXN0IiwicGhvdG8iOiIiLCJyb2xlX2lkIjoiYWRtaW4iLCJpYXQiOjE1ODA3ODYwMjF9.niJ5AXusdRa561Xn92tfpodJKLeRRuoDHS5B6bkltZ8"
  });

  const handleDrawerOpen = () => {
    setAppDrawerIsOpen(true);
  };
  const handleDrawerClose = () => {
    setAppDrawerIsOpen(false);
  };

  const appProp = (name, config) => {
    if(AppController.getInstance() && AppController.getInstance().getApp() && AppController.getInstance().getApp()[name]){
      return AppController.getInstance().getApp()[name];
    }else{
      return (config) ? config:{};
    }
  }

  const app = AppController.getInstance().setApp({
    forms:appProp('forms'),
    controlCache:appProp('controlCache',{}),
    stateCache:appProp('stateCache',{}),
    alertHandle:appProp('alertHandle'),
    sideHandle:appProp('sideHandle'),
    popSelectHandle:appProp('popSelectHandle'),
    icons:appProp('icons',{
      Add: AddBoxIcon,
      Assignment: AssignmentIcon,
      Check: CheckIcon,
      Clear: ClearIcon,
      Delete: DeleteOutlineIcon,
      DetailPanel: ChevronRightIcon,
      Edit: EditIcon,
      Export: SaveAltIcon,
      Filter: FilterListIcon,
      FirstPage: FirstPageIcon,
      LastPage: LastPageIcon,
      Menu: MenuIcon,
      NextPage: ChevronRightIcon,
      PhotoAlbum: PhotoAlbumIcon,
      PictureAsPdf: PictureAsPdfIcon,
      PreviousPage: ChevronLeftIcon,
      ResetSearch: ClearIcon,
      Save: SaveIcon,
      Search: SearchIcon,
      SortArrow: ArrowUpwardIcon,
      ThirdStateCheck: RemoveIcon,
      ViewColumn: ViewColumnIcon,
      ViewList: ViewListIcon
    }),
    createControl: (component, state, name) => {
      if(name && app.controlCache[name]) return app.controlCache[name];
      let _self = {
        name: '',
        component: component,
        state: state,
        tables:[],
        values:{},
        files:{},
        visibles:{},
        selectedCache:{},
        errors:{},
        disabled:{},
        currentStep: '',
        forms:[]
      };
      _self.findForm = (key) => {
        for(var i=0;i<_self.forms.length;i++){
          if(_self.forms[i].formKey==key){
            return _self.forms[i];
          }
        }        
      }
      _self.findTable = (key) => {
        for(var i=0;i<_self.tables.length;i++){
          if(_self.tables[i].tableKey==key){
            return _self.tables[i];
          }
        }        
      }
      var ctrl = {
        setCurrentStep: (name) => {
          _self.currentStep = name;
        },
        setName: (name) => {
          _self.name = name;
        },
        getComponent: () => {
          return _self.component;
        },
        addForm: (control) => {
          for(var i=0;i<_self.forms.length;i++){
            if(control.formKey==_self.forms[i].formKey){
              _self.forms.splice(i,1);
            }
          }
          _self.forms.push(control);
        },
        addTable: (control) => {
          for(var i=0;i<_self.tables.length;i++){
            if(control.tableKey==_self.tables[i].tableKey){
              _self.tables.splice(i,1);
            }
          }          
          _self.tables.push(control);
        },
        getForm: (index) => {
          if(index==undefined){
            index = 0;
          }
          return _self.forms[index];
        },
        getForms: () => {
          return _self.forms;
        },
        findForm: (key) => {
          return _self.findForm(key);
        },
        getTable: (index) => {
          if(index==undefined){
            index = 0;
          }
          return _self.tables[index];
        },
        getTables: () => {
          return _self.tables;
        },
        findTable: (key) => {
          return _self.findTable(key);
        },
        cacheFormFiles: (key, files) => {
          _self.files[key] = files;
        },
        cacheFormValues: (key, values) => {
          _self.values[key] = values;
        },
        cacheFormErrors: (key, errors) => {
          _self.errors[key] = errors;
        },
        cacheFormVisibles: (key, data) => {
          _self.visibles[key] = data;
        },
        cacheFormDisabled: (key, data) => {
          _self.disabled[key] = data;
        },
        cacheSelectedData: (key, data) => {
          _self.selectedCache[key] = data;
        },
        getSelectedCache: (key) => {
          return _self.selectedCache[key];
        },
        getError: (key, fieldName) => {
          if(_self.errors[key] && _self.errors[key][fieldName]){
            return _self.errors[key][fieldName]
          }else{
            return '';
          }
        },
        getDisabled: (key) => {
          if(!key && _self.currentStep && _self.currentStep!='') key = _self.currentStep;
          if(!key && _self.forms.length>0)
            key = _self.forms[0].formKey;
          return _self.disabled[key];
        },        
        isDisabled: (key, fieldName) => {
          if(!key && _self.currentStep && _self.currentStep!='') key = _self.currentStep;
          if(_self.disabled[key] && _self.disabled[key][fieldName]){
            return _self.disabled[key][fieldName]
          }else{
            return false;
          }
        },
        getVisibles: (key) => {
          if(!key && _self.currentStep && _self.currentStep!='') key = _self.currentStep;
          if(!key && _self.forms.length>0)
            key = _self.forms[0].formKey;
          return _self.visibles[key];
        },        
        isVisible: (key, fieldName) => {
          if(!key && _self.currentStep && _self.currentStep!='') key = _self.currentStep;
          if(_self.visibles[key] && _self.visibles[key][fieldName]){
            return _self.visibles[key][fieldName]
          }else{
            return false;
          }
        },
        getErrors: (key) => {
          if(!key && _self.currentStep && _self.currentStep!='') key = _self.currentStep;
          if(!key && _self.forms.length>0)
            key = _self.forms[0].formKey;
          return _self.errors[key];
        },        
        getValues: (key) => {
          if(!key && _self.currentStep && _self.currentStep!='') key = _self.currentStep;
          if(!key && _self.forms.length>0)
            key = _self.forms[0].formKey;
          return _self.values[key];
        },
        getFormValues: (key) => {
          if(!key && _self.currentStep && _self.currentStep!='') key = _self.currentStep;
          if(!key && _self.forms.length>0)
            key = _self.forms[0].formKey;
          var formValues = {..._self.values[key]};
          for(var i in formValues){
            if(Array.isArray(formValues[i])){
              formValues[i] = formValues[i].join(',');
            }
          }
          return formValues;
        },
        getFormData: (data, key) => {
          if(!key && _self.currentStep && _self.currentStep!='') key = _self.currentStep;
          if(!key && _self.forms.length>0){
            return _self.forms[0].getFormData(data);
          }else{
            return _self.findForm(key).getFormData(data);
          }
        },        
        getSearchValues: (key) => {
          if(!key && _self.currentStep && _self.currentStep!='') key = _self.currentStep;
          if(!key && _self.forms.length>0)
            key = _self.forms[0].formKey;

          var formValues = {..._self.values[key]};
          for(var i in formValues){
            if(Array.isArray(formValues[i])){
              formValues[i] = formValues[i].join(',');
            }
            if(formValues[i].trim()==''){
              delete formValues[i];
            }
          }
          return formValues;
        },
        show: (flag, key) => {
          if(!key && _self.currentStep && _self.currentStep!='') key = _self.currentStep;
          if(!key && _self.forms.length>0){
            _self.forms[0].show(flag);
          }else{
            _self.findForm(key).show(flag);
          }
        },        
        setVisibles: (data, key) => {
          if(!key && _self.currentStep && _self.currentStep!='') key = _self.currentStep;
          if(!key && _self.forms.length>0){
            _self.forms[0].setVisibles(data);
          }else{
            _self.findForm(key).setVisibles(data);
          }
        },
        setVisible: (fieldName, flag, key) => {
          if(!key && _self.currentStep && _self.currentStep!='') key = _self.currentStep;
          if(!key && _self.forms.length>0){
            _self.forms[0].setVisible(fieldName,flag);
          }else{
            _self.findForm(key).setVisible(fieldName,flag);
          }
        },
        disable: (flag, key) => {
          if(!key && _self.currentStep && _self.currentStep!='') key = _self.currentStep;
          if(!key && _self.forms.length>0){
            _self.forms[0].disable(flag);
          }else{
            _self.findForm(key).disable(flag);
          }
        },        
        setDisables: (data, key) => {
          if(!key && _self.currentStep && _self.currentStep!='') key = _self.currentStep;
          if(!key && _self.forms.length>0){
            _self.forms[0].setDisables(data);
          }else{
            _self.findForm(key).setDisables(data);
          }
        },        
        setDisabled: (fieldName, flag, key) => {
          if(!key && _self.currentStep && _self.currentStep!='') key = _self.currentStep;
          if(!key && _self.forms.length>0){
            _self.forms[0].setDisabled(fieldName,flag);
          }else{
            _self.findForm(key).setDisabled(fieldName,flag);
          }
        },
        setValue: (fieldName, value, key) => {
          if(!key && _self.currentStep && _self.currentStep!='') key = _self.currentStep;
          if(!key && _self.forms.length>0){
            _self.forms[0].setValue(fieldName,value);
          }else{
            _self.findForm(key).setValue(fieldName,value);
          }
        },
        setValues: (values, key) => {
          if(!key && _self.currentStep && _self.currentStep!='') key = _self.currentStep;
          if(!key && _self.forms.length>0){
            _self.forms[0].setValues(values);
          }else{
            _self.findForm(key).setValues(values);
          }
        },
        clearErrors: (key) => {
          if(!key && _self.currentStep && _self.currentStep!='') key = _self.currentStep;
          if(!key && _self.forms.length>0){
            _self.forms[0].clearErrors();
          }else{
            _self.findForm(key).clearErrors();
          }
        },         
        refresh: (key) => {
          if(!key && _self.currentStep && _self.currentStep!='') key = _self.currentStep;
          if(!key && _self.forms.length>0){
            _self.forms[0].refresh();
          }else{
            _self.findForm(key).refresh();
          }
        },          
        reset: (key) => {
          if(!key && _self.currentStep && _self.currentStep!='') key = _self.currentStep;
          if(!key && _self.forms.length>0){
            _self.forms[0].reset();
          }else{
            _self.findForm(key).reset();
          }
        },        
        submit: (key) => {
          if(!key && _self.currentStep && _self.currentStep!='') key = _self.currentStep;
          if(!key && _self.forms.length>0){
            _self.forms[0].submit();
          }else{
            _self.findForm(key).submit();
          }
        },
        validate: (key) => {
          if(!key && _self.currentStep && _self.currentStep!='') key = _self.currentStep;
          if(!key && _self.forms.length>0){
            _self.forms[0].validate();
          }else{
            _self.findForm(key).validate();
          }
        },
        isValid: (flag, key) => {
          if(!key && _self.currentStep && _self.currentStep!='') key = _self.currentStep;
          if(!key && _self.forms.length>0){
            return _self.forms[0].isValid(flag);
          }else{
            return _self.findForm(key).isValid(flag);
          }
        }  
      };
      if(name) app.controlCache[name] = ctrl;
      return ctrl;
    },
    setStateCache: (key, values) => {
      app.stateCache[key] = { ...app.stateCache[key], ...values };
    },
    getStateCache: (key) => {
      return app.stateCache[key];
    },    
    setPopSelectHandle: (handle) => {
      app.popSelectHandle = handle;
    },    
    setAlertHandle: (handle) => {
      app.alertHandle = handle;
    },
    setSideHandle: (handle) => {
      app.sideHandle = handle;
    },     
    registerForm: (name, component) => {
      AppController.getInstance().getApp().forms[name] = component;
      console.log('loaded:',name,app.forms[name]);
      app.forms[name].setName(name);
      return app.forms[name];
    },
    getForm: (name) => {
      if(AppController.getInstance().getApp().forms[name])
        return app.forms[name];
    },
    unregisterForm: (name) => {
      console.log('unloaded:',name);
      delete AppController.getInstance().getApp().forms[name];
    },
    service:{
      promise:(callback)=>{
        return new Promise((resolve, reject) => {
          callback(resolve, reject);
        });
      },
      get: (path, callback) => {
        if(AppController.getInstance().getApp().isAuthenticated()){
          if(path.indexOf('?')==-1){
            path += '?1=1'
          }
          path += '&token='+AppController.getInstance().getApp().getUser().token;
        }
        fetch(window.BASE_APP_PATH+path)
        .then((res) => {
          try{
            return res.json()
          }catch(e){
            return {
              success:false,
              message:e.message,
              result:e
            };
          }
        })
        .then((p) => {
          callback(p);
        });
      },
      post: (path, data, callback) => {
        var formData = new URLSearchParams();
        var json = JSON.stringify(data);
        formData.append('data', json);
        formData.append('token',AppController.getInstance().getApp().getUser().token);

        var headers = new Headers();
        fetch(window.BASE_APP_PATH+path, {
            method: 'POST',
            headers: headers,
            redirect: 'follow',
            body: formData,
        })
        .then((res) => {
          try{
            return res.json()
          }catch(e){
            return {
              success:false,
              message:e.message,
              result:e
            };
          }
        })
        .then((p) => {
          callback(p);
        });
      },
      upload: (path, data, callback) => {
        data.set('token',AppController.getInstance().getApp().getUser().token);
        var headers = new Headers();
        fetch(window.BASE_APP_PATH+path, {
            method: 'POST',
            headers: headers,
            redirect: 'follow',
            body: data,
        })
        .then((res) => {
          try{
            return res.json()
          }catch(e){
            return {
              success:false,
              message:e.message,
              result:e
            };
          }
        })
        .then((p) => {
          callback(p);
        });
      },      
      download: (path, data) => {
        const link = document.createElement('a');
        var url = window.BASE_APP_PATH+path;
        if(data){
          url = url+'?data='+JSON.stringify(data);
          url += '&token='+AppController.getInstance().getApp().getUser().token;
        }
        link.setAttribute('href',url);
        link.setAttribute('target', '_blank');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);        
      },
      /*preview: (path, data) => {
        app.side(
          {
            onRender: ()=>{ 
              return <PreviewFrame name="app.component.PreviewFrame" app={app} router={router} src={window.BASE_APP_PATH+path+'?data='+JSON.stringify(data)} height="100%" width="45%"/> 
            },
            onClose: ()=>{
            }
          }
        );                
      },*/
      prepQuery: (query, obj) => {
        obj['$paging'] = {
          page: query.page,
          start: query.page * query.pageSize,
          limit: query.pageSize
        };
  
        if(query.orderBy!=undefined){
          obj['$paging'].sort = query.orderBy.field;
          obj['$paging'].dir = query.orderDirection.toUpperCase();
        }
        return obj;
      },
      prepResult: (query, p) => {
        return {
          data: (p.result.records) ? p.result.records : p.result,
          page: query.page,
          totalCount: (p.result.records) ? p.result.total : p.result.length
        }
      }    
    },
    setUser: (user) => {
      setAppIsAuthenticated(true);
      setAppUser(user);
    },
    isAuthenticated: () => {
      return appIsAuthenticated==true;
    },
    getUser: () => {
      return appUser;
    },
    getStyles: () => {
      return classes;
    },
    side: (ctrl) => {
      AppController.getInstance().getApp().sideHandle.setState({
        open: true,
        onRender: ctrl.onRender,
        onClose: ctrl.onClose
      });
    },
    pop: (type, name, label, value, dataProvider, setPopoverTarget, setPopoverCancel, selectData, multiSelect, dataMap, anchorEl) => {
      var selectedIDs = {};
      if(multiSelect){
        for(var i=0;i<value.length;i++){
          selectedIDs[value[i]] = dataMap[value[i]];
        }
      }else{
        for(var i=0;i<dataProvider.length;i++){
          if(dataProvider[i].id==value){
            AppController.getInstance().getApp().popSelectHandle.setSelectedIndex(i);
          }
        }
      }
      AppController.getInstance().getApp().popSelectHandle.setState({
        open: true,
        type: type,
        name: name,
        label: label,
        value: '',
        lastValue: value,
        multiSelect: (multiSelect) ? true: false,
        selectedIDs: selectedIDs,
        dataProvider: dataProvider,
        setPopoverTarget: setPopoverTarget,
        setPopoverCancel: setPopoverCancel,
        selectData: selectData,
        anchorEl: anchorEl
      });
    },
    alert: (message, callback) => {
      AppController.getInstance().getApp().alertHandle.setAppAlert({
        title:'Pulse',
        open:true,
        type:'ok',
        message:message,
        callback:callback
      });
    },
    ask: (message, callback) => {
      AppController.getInstance().getApp().alertHandle.setAppAlert({
        title:'Pulse',
        open:true,
        type:'yesno',
        message:message,
        callback:callback
      });
    },
    dialog: (message, callback, buttons) => {
      AppController.getInstance().getApp().alertHandle.setAppAlert({
        title:'Pulse',
        open:true,
        type:'dialog',
        message:message,
        callback:callback,
        buttons:buttons
      });
    },
    delay: (cb,ms) => {
      if(ms==undefined) ms = 1;
      setTimeout(()=>{
        cb();
      },ms);      
    }
  });

  useEffect(() => {
    setRendered(true);
    console.log('Viewport Loaded');
    return () => {
      console.log('Viewport Unloaded');
    };
  },[]);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <HashRouter>
        { false && appIsAuthenticated && <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !appDrawerIsOpen && classes.drawerPaperClose),
          }}
          open={appDrawerIsOpen}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <Route path="/Registation" component={(router) => appIsAuthenticated && appUser.role_id=='' ? <NewAcc app={app} router={router} user={appUser}/> : <div></div>} />    
          <Route path="/" component={(router) => appIsAuthenticated && appUser.role_id=='student' ? <Subjects app={app} router={router} user={appUser}/> : <div></div>} />
          <Route path="/student/Subjects" component={(router) => appIsAuthenticated && appUser.role_id=='student' ? <Subjects app={app} router={router} user={appUser}/> : <div></div>} />
          <Route path="/student/resetstud" component={(router) => appIsAuthenticated && appUser.role_id=='student' ? <ResetStud app={app} router={router} user={appUser}/> : <div></div>} />
          <Route path="/student/Profile" component={(router) => appIsAuthenticated && appUser.role_id=='student' ? <Profile app={app} router={router} user={appUser}/> : <div></div>} />
         
          <Route path="/faculty/resetfac" component={(router) => appIsAuthenticated && appUser.role_id=='faculty' ? <ResetFac app={app} router={router} user={appUser}/> : <div></div>} />
          <Route path="/faculty/Encode" component={(router) => appIsAuthenticated && appUser.role_id=='faculty' ? <Encode app={app} router={router} user={appUser}/> : <div></div>} />
          <Route path="/faculty/Profile" component={(router) => appIsAuthenticated && appUser.role_id=='faculty' ? <ProfileFac app={app} router={router} user={appUser}/> : <div></div>} />
        </Drawer>
        }
        <main className={classes.content}>
          {/* <div className={classes.appBarSpacer} /> */}
          {
            Routes.getInstance().getPaths().map((field, index) => {
              return <Route key={'route-' + index} exact path={field.path} component={(router) => { return Routes.getInstance().getComponent(appIsAuthenticated, field, app, router); } }/>
            })
          }
        </main>
      </HashRouter>
    </div>
  );
}