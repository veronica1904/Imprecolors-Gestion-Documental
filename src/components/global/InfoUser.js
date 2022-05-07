import React from 'react'
import { Avatar, Typography } from '@mui/material'
import styles from './global.module.scss'
import { FolderSpecialOutlined, Person } from '@mui/icons-material'

function InfoUser({image = <Person />, name = "Sin Completar" }) {
  return (
    <div className={styles.contentAvatar}>
        <Avatar src={image}></Avatar>
        <h1>{name}</h1>
    </div>
  )
}

export default InfoUser