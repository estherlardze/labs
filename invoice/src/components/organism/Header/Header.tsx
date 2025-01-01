import "./Header.css";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import Invoice from "../../organism/Form/Form";
import HeaderLeft from "../../molecule/HeaderLeft/HeaderLeft";
import HeaderRight from "../../molecule/HeaderRight/HeaderRight";

const Header = () => {
  const { overlay } = useSelector((state: RootState) => state.overlay);

  return (
    <section className="header">
      <HeaderLeft />

      <HeaderRight />
      {overlay && <Invoice />}
    </section>
  );
};

export default Header;
