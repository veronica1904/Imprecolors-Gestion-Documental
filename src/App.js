import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from './utils/theme';
import NavBar from './components/NavBar';
import { BrowserRouter } from 'react-router-dom';
import ScrollIntoView from './components/global/ScrollIntoView';
import styles from './styles/AppStyles.module.scss'
import Routes from './Routes';
import { getToken,  isAuth } from './Redux/selectors/user';
import {  useSelector } from 'react-redux';
import { useEffect } from 'react';
import clsx from 'clsx';
import { getStateMenu } from './Redux/selectors/app';



function App() {
  const auth = useSelector(isAuth);
  const token = useSelector(getToken);
  const isOpenMenu = useSelector(getStateMenu);


  useEffect(() => {
   
  }, [auth]);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ScrollIntoView>
          <NavBar />
          <div className={clsx(styles.root, {
              [styles.rootAuth]: auth,
              [styles.rootAuthOpenMenu]: auth && isOpenMenu,
            })}>
            <Routes />
          </div>
          {/* <Footer /> */}
        </ScrollIntoView>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
