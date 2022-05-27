import React, { useState } from 'react'
import { List, ListItemButton, ListItemIcon, ListItemText, Divider, Collapse } from '@mui/material'
import { useSelector } from 'react-redux';
import { getTypeUser } from '../../Redux/selectors/user';
import styles from "./navbar.module.scss";
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import {  DescriptionRounded, Equalizer,  Loyalty, PersonSearch, ProductionQuantityLimits, Public } from '@mui/icons-material';

function ContentMenu({ open }) {
    const location = useLocation();
    const [openSubList, setOpenSubList] = useState(null)
    const type_user = 'admin'
    // const type_user = useSelector(getTypeUser)
    const currentPath = location.pathname.split("/")[1];
    const menuTypeUsers = {
        "admin": [
            {
                text: "Usuarios",
                icon: <PersonSearch />,
                link: "/users",
                options: [
                    {
                        text: "Crear Usuario",
                        link: "/createUser"
                    }
                ]
            },
            {
                text: "Productos",
                icon: <ProductionQuantityLimits/>,
                link: "/products",
                options: [
                    {
                        text: "Crear Productos",
                        link: "/createProduct"
                    }
                ]
            },
            {
                text: "Facturas",
                icon: <DescriptionRounded/>,
                link: "/bill",
                options: [
                    {
                        text: "Crear Factura",
                        link: "/createBill"
                    }
                ]
            },
            {
                text: "Proveedores",
                icon: <Loyalty />,
                link: "/provider",
                options: [
                    {
                        text: "Provedor de campo",
                        link: "/createProvider",
                    },
                    {
                        text: "Provedor empresa",
                        link: "/createBusniess"
                    }
                ]
            },
            {
                text: "Estadisticas",
                icon: <Equalizer />,
                link: "/statistics"
            },
        ]

    }

    const handleOpenSubList = (index) => {
        setOpenSubList(prev => prev === index ? null : index);
    }

    return (
        <List>
            {(menuTypeUsers[type_user] || []).map(({ text, link, icon, options = [] }, index) => (
                <>
                    <ListItemButton
                        key={index}
                        // className={link === currentPath ? styles.active : styles.menuItem}
                        className={clsx(styles.menuItem, {
                            [styles.menuActive]: link === `/${currentPath}`
                        })}
                        component={Link}
                        to={link}
                        onClick={() => { if (options.length) handleOpenSubList(index) }}
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            {icon}
                        </ListItemIcon>
                        <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                    {open && (
                        <Collapse in={openSubList === index} timeout="auto" unmountOnExit>
                            <List component="div" dense>
                                {(options || []).map(({ text, link: linkSub, icon }, index) => (
                                    <ListItemButton
                                        key={index}
                                        sx={{ pl: 4 }}
                                        component={Link}
                                        to={`${link}${linkSub}`}
                                    >
                                        <ListItemText primary={text} />
                                    </ListItemButton>
                                ))}
                            </List>
                        </Collapse>
                    )}
                </>
            ))}
        </List>
    )
}

export default ContentMenu