import React,{useState} from 'react';
import Header from './ui/Header';
import {ThemeProvider} from '@material-ui/styles'
import '../App.css';
import theme from './ui/Theme';
import Home from './ui/Home';
import BottomNavbar from './ui/BottomNavbar';
function App() {
  const screenConfig = useState(0);
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Header/>
        <Home currentScreen={screenConfig[0]}/>
        <BottomNavbar screenConfig={screenConfig}/>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
