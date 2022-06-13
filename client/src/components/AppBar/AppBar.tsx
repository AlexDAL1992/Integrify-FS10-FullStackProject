import React from 'react'
import { useSelector } from 'react-redux'

import Drawer from '../Drawer/Drawer'
import Cart from '../Cart/Cart'
import './AppBar.scss'

interface AppBarProps {
    drawerState: boolean
    onClick: Function
  }

const AppBar = ({drawerState, onClick}: AppBarProps) => {
    const onDrawerClick = () => {
        onClick(!drawerState)
      }

      const cart = useSelector((state: any) => state.cart)
    return (<div>

    </div>)
}

export default AppBar