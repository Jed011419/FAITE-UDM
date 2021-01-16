export default class AppController {
    static sharedInstance = AppController.sharedInstance == null ? new AppController() : this.sharedInstance;

    constructor(){
        if(global && !global.AppController){
            global.AppController = AppController;
        }
        if(window && !window.AppController){
            window.AppController = AppController;
        }
        this.appInstance = undefined;
    }

    static getInstance(){
        return AppController.sharedInstance;
    }

    setApp(app) {
        this.appInstance = app;
        return app;
    }

    getApp(){
        return this.appInstance;
    }
}