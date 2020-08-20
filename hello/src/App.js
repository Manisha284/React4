import React from 'react';
import logo from './logo.svg';
import './App.css';
import ComponentA from './UsingUseContext/ComponentA'
import { UserProvider } from './UsingUseContext/userCon'
import { ChannelProvider } from './UsingUseContext/userCon'
//import Component1 from './MultipleContext/Component1'
//import { UserProvider } from './MultipleContext/UserContext'
//import { ChannelProvider } from './MultipleContext/UserContext'
//import Context1 from './components/Context1'
//import { UserProvider } from './components/UserContext'
function App() {
  return (
    <div className="App">
      <UserProvider value="Manisha">
        <ChannelProvider value="Sam">
            <ComponentA />
        </ChannelProvider>
      </UserProvider>
      
      
      
      {/*<UserProvider value="Mani">
        <ChannelProvider value="SAM">
         <Component1 />
        </ChannelProvider>
  </UserProvider>*/}
      
      
      {/*<UserProvider value="Manisha">
          <Context1 />
  </UserProvider>*/}
     
    </div>
  );
}

export default App;
