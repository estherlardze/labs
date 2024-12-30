import logo from "../../assets/sidebar.svg";
import image from "../../assets/Oval.svg";
import "./Sidebar.css";
import Avatar from "../ui/avatar/Avatar";
import moon from '../../assets/icon-moon.svg'
import Button from "../ui/button/Button";
import Icon from "../ui/icon/Icon";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src={logo} alt="app logo" className="logo"/>

      <div className="sidebar__avatar">
        <Button variant="transparent">
        <Icon size="sm" radius="rounded" src={moon} alt="moon icon" />
        </Button>
        <div className="sidebar__line"></div>
        <Avatar src={image} alt="avatar" size="md"/>
      </div>
    </div>
  );
};

export default Sidebar;
