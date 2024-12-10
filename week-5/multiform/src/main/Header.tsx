import { FormContext } from "../context/form-context";
import { useContext } from "react";

type HeaderProps = {
  title: string;
  description: string;
};

const Header = ({ title, description }: HeaderProps) => {
  const { resetForm } = useContext(FormContext);
  return (
    <div className="header-container">
      <div className="header">
        <h1>{title}</h1> <p>{description}</p>
      </div>
      <button onClick={resetForm}>Reset</button>
    </div>
  );
};

export default Header;
