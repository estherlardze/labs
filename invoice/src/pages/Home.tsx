import EmptyPage from "./EmptyPage/EmptyPage";
import Main from "../components/Main/Main";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { useState } from "react";

const Home = () => {
  const [empty, setEmpty] = useState(false);

  return (
    <section className="main">
      <Header />
      <div>{empty ? <EmptyPage /> : <Main />}</div>
    </section>
  );
};

export default Home;
