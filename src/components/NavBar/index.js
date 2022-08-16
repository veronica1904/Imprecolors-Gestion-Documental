import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { AppBar, Drawer, DrawerHeader } from './Components';
import { useDispatch, useSelector } from 'react-redux';
import { changeMenu } from '../../Redux/actions/app';
import { getStateMenu } from '../../Redux/selectors/app';
import { isAuth } from '../../Redux/selectors/user';
import { Link } from 'react-router-dom';
import { Button, IconButton, Box, Toolbar, List, Typography, Divider } from '@mui/material';
import AvatarUser from './AvatarUser';
import styles from './navbar.module.scss';
import ContentMenu from './ContentMenu';

export default function NavBar() {
  const dispatch = useDispatch()
  const open = useSelector(getStateMenu)
  //  const auth = true
  const auth = useSelector(isAuth)
  const handleChangeMenuLeft = () => {
    dispatch(changeMenu())
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleChangeMenuLeft}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
              ...(!auth && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <div className={styles.contentLogo}>
            <Typography variant="h6" component={Link} to="/" sx={{ ...(open && { display: 'none' }) }} >
                ImpriColors
            </Typography>
          </div>
          {auth && (<AvatarUser isOpenMenuLeft={open} closeMenuLeft={handleChangeMenuLeft} />)}
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} sx={{ ...(!auth && { display: "none" }) }} PaperProps={{ className: styles.drawerStyles }} >
        <DrawerHeader>
          <div className={styles.contentLogoMenu}>
            <Typography variant="h6" sx={{ ...(!open && { display: 'none' }) }} component={Link} to="/" >
            
            </Typography>
          </div>
          <IconButton onClick={handleChangeMenuLeft}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <ContentMenu open={open} />
      </Drawer>
    </Box>
  );
}
