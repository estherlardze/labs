import "./Sidebar.css";
import { sidebar, oval, iconMoon, iconSun } from "../../../utils/assets";
import Avatar from "../../atom/Avatar/Avatar";
import Icon from "../../atom/Icon/Icon";
import ToggleTheme from "../../atom/ToggleTheme/ToggleTheme";
import { useState, useEffect } from "react";


export const Sidebar = () => {
  const [changeBg, setChangeBg] = useState(iconSun);
  const [theme, setTheme] = useState<string>(() => sessionStorage.getItem('theme') ?? 'light');


  const handleToggleTheme = () => {
    setChangeBg(changeBg === iconMoon ? iconSun : iconMoon);
    setTheme(theme === "light" ? "dark" : "light");
  };


  useEffect(() => {
    sessionStorage.setItem('theme', theme);
     document.body.className = theme;
  }, [theme])


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
          mode="dark"
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
