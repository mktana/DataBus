import { useState } from 'react'
import { Layout } from 'antd'
import Logo from './Logo'
import MenuList from './MenuList'
import ToggleThemeButton from './ToggleThemeButton'

//style
import './Navbar.scss'


const { Sider } = Layout
const Navbar = () => {
  const [darkTheme, setDarkTheme] = useState(true);
 
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  }
  return (
    <Layout dir="rtl">
      <Sider theme={darkTheme? 'dark' : 'light'}  className="sidebar">
        <Logo />
        <MenuList darkTheme={darkTheme} />
        <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
      </Sider>
    </Layout>
  )
}

export default Navbar
