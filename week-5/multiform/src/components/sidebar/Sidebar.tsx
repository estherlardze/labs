import { sidebarlinks } from "../../constants";
import "./sidebar.css";
import { SidebarProps } from "../../types";
import { useContext } from "react";
import { FormContext } from "../../context/form-context";

const Sidebar = ({ currentStepId }: SidebarProps) => {

  const {confirm, setCurrentStepIndex} = useContext(FormContext);

  const handleSidebarClick = (stepId: number) => {
    if (confirm) return;
    setCurrentStepIndex(stepId - 1);
  };


  return (
    <aside className="sidebar">
      {sidebarlinks.map((link) => (
        <div className={`sidebar-link`} key={link.index}>
          <div
            className="sidebar-link-index"
            style={{
              background: currentStepId === link.index ? "#BEE2FD" : "",
              color: currentStepId === link.index ? "#022959" : "",
            }}
          >
            <p>{link.index}</p>
          </div>

          <div
            className="sidebar-link-text"
            onClick={() => handleSidebarClick(link.index)}
          >
            <p className="step">{link.stepno}</p>
            <p className="title">{link.title}</p>
          </div>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
