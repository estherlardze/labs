import Header from "./Header";
import UserInfo from "../components/userinfo/UserInfo";
import SelectPlan from "../components/selectplan/SelectPlan";
import Footer from "../components/footer/Footer";

const Main = () => {
  return (
    <div className="main">
      <Header
        title="Personal Details"
        description="Please provide your name, email address, and phone number."
      />
      <div className="main-form">
        <SelectPlan />
      </div>
      <Footer/>
    </div>
  );
};

export default Main;
