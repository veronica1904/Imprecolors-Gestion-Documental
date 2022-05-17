import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

import styles from './navbar.module.scss';
import { useDispatch } from 'react-redux';
import { actionLogout } from '../../Redux/actions/user';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

export default function AvatarUser({ closeMenuLeft, isOpenMenuLeft }) {
    const dispatch = useDispatch()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const logout = () => {
        dispatch(actionLogout())
        if (isOpenMenuLeft) closeMenuLeft()
    }
    const menuUser = [
        
        {
            label: "Cerrar Sesión",
            Icon: Logout,
            callback: logout,
        }
    ]
    return (
        <React.Fragment>
            <div>
                <Tooltip title="Detalles de usuario">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar className={styles.profileImage} >M</Avatar>
                    </IconButton>
                </Tooltip>
            </div>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    className: styles.menuAccount,
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                {menuUser.map(({callback, Icon, label, link}, index) => (
                    <MenuItem
                        key={index}
                        onClick={callback ? callback : () => { }}
                        component={link ? Link : Button}
                        fullWidth
                        to={link}
                    >
                        <ListItemIcon>
                            <Icon fontSize="small" />
                        </ListItemIcon>
                        {label}
                    </MenuItem>
                ))}
            </Menu>
        </React.Fragment>
    );
}