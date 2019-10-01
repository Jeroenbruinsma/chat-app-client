import React from 'react';
import {Route} from "react-router-dom"
import ChannelList from './components/ChannelList';

class App extends React.Component {
  render(){
    return ( <div>
        <Route exaxt path='/' component={ChannelList} />
      </div>
        
      
  )}
}

export default App;
