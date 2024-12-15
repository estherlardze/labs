
import { resetForm } from "../../features/formSlice";
import { useDispatch } from "react-redux";

type HeaderProps = {
  title: string;
  description: string;
};

const Header = ({ title, description }: HeaderProps) => {

  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetForm());
  }

  return (
    <div className="header-container">
      <div className="header">
        <h1>{title}</h1> <p>{description}</p>
      </div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Header;
