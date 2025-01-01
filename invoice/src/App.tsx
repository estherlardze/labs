import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/molecule/Sidebar/Sidebar";
import Home from "./pages/Home";
import InvoiceDetail from "./pages/DetailPage/InvoiceDetail";

export const App = () => {
  return (
    <BrowserRouter>
      <main className="bg-body flex">
        <Sidebar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/:id" element={<InvoiceDetail />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
};
