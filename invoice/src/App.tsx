import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import { useState } from "react";
import Main from "./components/Main/Main";
import EmptyPage from "./components/EmptyPage/EmptyPage";

export const App = () => {
  const [empty, setEmpty] = useState(false);
  return (
    <main className="App">
      <Sidebar />

      <section className="main">
        <Header />

        <div>{empty ? <EmptyPage /> : <Main />}</div>
      </section>
    </main>
  );
};
