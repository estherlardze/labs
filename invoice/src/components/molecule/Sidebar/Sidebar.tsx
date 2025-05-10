import "./Sidebar.css";
import { sidebar, oval, iconMoon, iconSun } from "../../../utils/assets";
import Avatar from "../../atom/Avatar/Avatar";
import Icon from "../../atom/Icon/Icon";
import ToggleTheme from "../../atom/ToggleTheme/ToggleTheme";
import { useState } from "react";

export const Sidebar = () => {
  const [changeBg, setChangeBg] = useState(iconSun);

  const handleToggleTheme = () => {
    setChangeBg(changeBg === iconMoon ? iconSun : iconMoon);
  };

  return (
    <div className="sidebar">
      <Icon
        src={sidebar}
        alt="sidebar icon"
        size="lg"
        radius="none"
        className="logo"
      />

      <div className="sidebar__avatar">
        <ToggleTheme
          mode="light"
          src={changeBg}
          alt="moon icon"
          onClick={handleToggleTheme}
        />
        <div className="sidebar__line"></div>
        <Avatar src={oval} alt="avatar" size="md" />
      </div>
    </div>
  );
};

export default Sidebar;
