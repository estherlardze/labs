import { useState, useEffect } from "react";
import "./Main.css";
import InvoiceCard from "../ui/Card/InvoiceCard";
import InvoiceCardSc from "../ui/Card/InvoiceCardSc";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Main = () => {
  const invoices = useSelector((state: RootState) => state.invoices.invoices);
  const filteredInvoices = useSelector(
    (state: RootState) => state.invoices.filteredInvoices
  );

  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log(screenSize, "screenSize");

  const invoicesToDisplay =
    filteredInvoices.length > 0 ? filteredInvoices : invoices;

  console.log("Invoices to display:", invoicesToDisplay);

  const renderCard = (item: any) => {
    if (screenSize < 531) {
      return <InvoiceCardSc item={item} key={item.id} />;
    } else {
      return <InvoiceCard item={item} key={item.id} />;
    }
  };

  return (
    <div className="invoice__container">
      {invoicesToDisplay.map((item) => renderCard(item))}
    </div>
  );
};

export default Main;
