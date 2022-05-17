import React from 'react'
import Login from '../../Login/index';
import style from '../home.module.scss'

export default function HomeLogin() {
  return (
    <div className={style.containerHome} >
        <Login />
    </div>
  )
}
