import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from './utils/theme';
import NavBar from './components/NavBar';
import { BrowserRouter } from 'react-router-dom';
import ScrollIntoView from './components/global/ScrollIntoView';
import styles from './styles/AppStyles.module.scss'
import Routes from './Routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ScrollIntoView>
          <NavBar />
          <div className={styles.root}>
            <Routes />
          </div>
          {/* <Footer /> */}
        </ScrollIntoView>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
