import { Menu } from "antd";
import busImage from './img/busImg.png';
import {
  FieldTimeOutlined,
  BarChartOutlined,
  LineChartOutlined,
  CompassOutlined,
  BugOutlined,
  DollarOutlined,
} from "@ant-design/icons";
import "./HomePage.scss";

//dark theme #001529;


export const HomePage = () => {

  return (
    <div className='homepage'>
      <img src={busImage} alt="Public Transportaion Bus Illustration" />
      <div className='homepage-headers'>
        <h1>ברוכים הבאים לדאטאבוס</h1>
        <h2>
          הפלטפורמה הפתוחה לנתוני אמת על איכות קווי התחבורה הציבורית בישראל{" "}
        </h2>
        <h3>
          מטרת האתר היא לשפר את איכות התחבורה הציבורית בארץ ע״י מתן מידע אמין
          לעיתונאים, אזחרים, חברות התחבורה, וגורמי ממשל בישראל.
        </h3>
      </div>
      <Menu
        mode='horizontal'
        className='main-menu'
        selectedKeys={[location.pathname]}
      >
        <Menu.Item key='/timeline' icon={<FieldTimeOutlined />}>
          היסטורית לוחות זמנים
        </Menu.Item>
        <Menu.Item key='/gaps' icon={<BarChartOutlined />}>
          נסיעות שלא יצאו
        </Menu.Item>
        <Menu.Item key='/gaps_pattern' icon={<LineChartOutlined />}>
          דפוסי נסיעות שלא יצאו
        </Menu.Item>
        <Menu.Item key='/map' icon={<CompassOutlined />}>
          מפה בזמן אמת
        </Menu.Item>
        <Menu.Item key='/BugReportForm' icon={<BugOutlined />}>
          דווח על באג
        </Menu.Item>
        <Menu.Item key='/donation' icon={<DollarOutlined />}>
          תרומות
        </Menu.Item>
      </Menu>
      <footer>© הסדנא לידע ציבורי (ע״ר) 2024</footer>
    </div> 
  );
};

export default HomePage;
