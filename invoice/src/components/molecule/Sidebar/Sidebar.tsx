import "./Sidebar.css";
import {sidebar, oval, iconMoon} from '../../../utils/assets'
import Avatar from "../../atom/Avatar/Avatar";
import Button from "../../atom/Button/Button";
import Icon from "../../atom/Icon/Icon";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <Icon src={sidebar} alt="sidebar icon" size="lg" radius="none" className="logo"/>

      <div className="sidebar__avatar">
        <Button variant="transparent">
          <Icon size="sm" radius="rounded" src={iconMoon} alt="moon icon"/>
        </Button>
        <div className="sidebar__line"></div>
        <Avatar src={oval} alt="avatar" size="md" />
      </div>
    </div>
  );
};

export default Sidebar;
