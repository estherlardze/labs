import { sidebarlinks } from "../../constants";
import "./sidebar.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { handleSidebarClick } from "../../features/formSlice";


const Sidebar = () => {

  const { currentStepIndex } = useSelector((state: RootState) => state.form);
  const dispatch = useDispatch();

  const handleClick = (index: number) => {
    dispatch(handleSidebarClick(index));
  };

  return (
    <aside className="sidebar">
      {sidebarlinks.map((link) => (
        <div
          className={`sidebar-link`}
          key={link.index}
        >
          <div
            className="sidebar-link-index"
            style={{
              background: currentStepIndex === link.index -1 ? "#BEE2FD" : "",
              color: currentStepIndex === link.index -1 ? "#022959" : "",
            }}
          >
            <button style={{backgroundColor: "transparent", border: "none", color: "inherit"}}>{link.index}</button>
          </div>

          <div className="sidebar-link-text" onClick={() => handleClick(link.index - 1)}>
            <p className="step">{link.stepno}</p>
            <p className="title">{link.title}</p>
          </div>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
