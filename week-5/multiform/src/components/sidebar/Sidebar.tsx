import { sidebarlinks } from "../../constants";
const Sidebar = () => {
  return (
    <aside className="sidebar">
      {sidebarlinks.map((link) => (
        <div className="sidebar-link" key={link.index}>
          <div className="sidebar-link-index">
            <p>{link.index}</p>
          </div>

          <div className="sidebar-link-text">
            <p className="step">{link.stepno}</p>
            <p className="title">{link.title}</p>
          </div>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
