import { Link } from "react-router-dom"; 

const Home = () => {
  return (
    <div className="home-container">
      <Link to="/form" className="home-link">
        Proceed to fill a Form
      </Link>
    </div>
  );
};


export default Home;
