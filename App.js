import React from 'react';
import Login from './module/login';
import Viewport from './components/Viewport';
import Subjects from './module/subjects';
import ResetStud from './module/resetstud';

import ResetFac from './module/resetfac';
import Encode from './module/encode';

import NewAcc from './module/newacc';
import Profile from './module/profile';
import ProfileFac from './module/profilefac';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      session: sessionStorage.getItem('user-info')
    }
    
  } 


  render() {

    return (
      <div className="App">
        <Viewport></Viewport>
      </div>
     
    );
  }
  
}
