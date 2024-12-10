import { sidebarlinks } from "../../constants";
import "./sidebar.css";
import { SidebarProps } from "../../types";

const Sidebar = ({ currentStepId, handleSidebarClick }: SidebarProps) => {
  return (
    <aside className="sidebar">
      {sidebarlinks.map((link) => (
        <div
          className={`sidebar-link ${link.index  > currentStepId ? "disabled" : ""}`}
          key={link.index}
          onClick={() => handleSidebarClick(link.index)}
        >
          <div
            className="sidebar-link-index"
            style={{
              background: currentStepId === link.index ? "#BEE2FD" : "",
              color: currentStepId === link.index ? "#022959" : "",
            }}
          >
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
