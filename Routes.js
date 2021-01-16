import React, { useEffect } from 'react';
import LoginForm from './login';
import Subjects from './subjects';
import ResetStud from './resetstud';

import ResetFac from './resetfac';
import Encode from './encode';


import NewAcc from './newacc';
import Profile from './profile';
import ProfileFac from './profilefac';

export default class CoreRouter{
    static sharedInstance = CoreRouter.sharedInstance == null ? new CoreRouter() : this.sharedInstance;

    componentList = [
        {
            'path':'/',
            'component':(app, router) => {
                return <LoginForm name="app.core.LoginForm" app={app} router={router}/>
            }
        },
        {
            'path':'/student/Subjects',
            'component':(app, router) => {
                return <Subjects name="app.user.Subjects" app={app} router={router}/>
            }
        },
        {
            'path':'/student/Profile',
            'component':(app, router) => {
                return <Profile name="app.user.Profile" app={app} router={router}/>
            }
        },
        
        {
            'path':'/student/resetstud',
            'component':(app, router) => {
                return <ResetStud name="app.user.ResetStud" app={app} router={router}/>
            }
        },
        {
            'path':'/faculty/resetfac',
            'component':(app, router) => {
                return <ResetFac name="app.user.ResetFac" app={app} router={router}/>
            }
        },
        {
            'path':'/faculty/Profile',
            'component':(app, router) => {
                return <ProfileFac name="app.user.ProfileFac" app={app} router={router}/>
            }
        },
        
        {
            'path':'/faculty/Encode',
            'component':(app, router) => {
                return <Encode name="app.user.Encode" app={app} router={router}/>
            }
        },
        
       
    ];

    componentMap = {};

    constructor(){
        this.componentList.map((field, index) => {
            this.componentMap[field.path] = field;
        });
    }

    getComponent(isAuthenticated, field, app, router){
        // if(isAuthenticated){
            return field.component(app, router);
        // }else{
        //     return <LoginForm name="app.core.LoginForm" app={app} router={router} />;
        // }
    }

    getPaths(){
        return this.componentList;
    }

    static getInstance(){
        return CoreRouter.sharedInstance;
    }

}