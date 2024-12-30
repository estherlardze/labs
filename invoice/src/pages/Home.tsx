import EmptyPage from "./EmptyPage/EmptyPage";
import Main from "../components/Main/Main";
import { useSelector } from "react-redux";
import Header from "../components/Header/Header";
import { RootState } from "../store";

const Home = () => {

  const { invoices } = useSelector((state: RootState) => state.invoices);

  if (invoices.length === 0) {
    return <EmptyPage />;
  }

  return (
    <section className="main">
      <Header />
      <Main />
    </section>
  );
};

export default Home;
