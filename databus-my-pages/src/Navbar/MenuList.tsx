import { Menu } from 'antd'
import {
  HomeOutlined,
  ExclamationCircleOutlined,
  CarOutlined,
  FieldTimeOutlined,
  CompassOutlined,
  BranchesOutlined,
  BugOutlined,
  BarChartOutlined,
  DollarOutlined,
} from '@ant-design/icons';

interface MenuListProps {
  darkTheme: boolean;
}


const MenuList: React.FC<MenuListProps> = ({darkTheme}) => {
  return (
    <Menu theme={darkTheme? 'dark' : 'light'} mode="inline" className="menu-bar">
      <Menu.Item key="home" icon={<HomeOutlined />}>
        בית
      </Menu.Item>
      <Menu.Item key="about" icon={<ExclamationCircleOutlined />}>
        אודות
      </Menu.Item>
      <Menu.Item key="historicTimeline" icon={<FieldTimeOutlined />}>
        לוח זמנים היסטורי
      </Menu.Item>
      <Menu.Item key="release" icon={<CarOutlined />}>
        נסיעות שאושרו
      </Menu.Item>
      <Menu.Item key="gaps" icon={<BarChartOutlined />}>
        נסיעות שלא יצאו
      </Menu.Item>
      <Menu.Item key="realtimeMap" icon={<CompassOutlined />}>
        מפה בזמן אמת
      </Menu.Item>
      <Menu.Item key="singleLineMap" icon={<BranchesOutlined />}>
        מפה לפי קו
      </Menu.Item>
      <Menu.Item key="BugReportForm " icon={<BugOutlined />}>
        דווח על באג
      </Menu.Item>
      <Menu.Item key="donation" icon={<DollarOutlined />}>
        תרומות
      </Menu.Item>
    </Menu>
  )
}

export default MenuList
