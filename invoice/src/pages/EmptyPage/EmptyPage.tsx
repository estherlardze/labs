import empty from "../../assets/illustration-empty.svg";
import "./EmptyPage.css";

const EmptyPage = () => {
  return (
    <div className="empty-page">
      <img src={empty} alt="empty page illustration" />
      <div className="empty-page__text">
        <h1>There is nothing here</h1>
        <div className="empty-page__description">
          <p>Create an invoice by clicking the </p>
          <p>
            <span>New Invoice </span> button and get started
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmptyPage;
