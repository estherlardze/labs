import "./Main.css";
import InvoiceCard from "../ui/Card/InvoiceCard";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { InvoiceProps } from "../../types/type";

const Main = () => {
  const invoices = useSelector((state: RootState) => state.invoices);
  const filteredInvoices = useSelector((state: RootState) => state.invoices.filteredInvoices);

  const invoicesToDisplay = filteredInvoices.length > 0 ? filteredInvoices : invoices;

  return (
    <div className="invoice__container">
      {invoicesToDisplay.map((item: InvoiceProps) => (
        <InvoiceCard item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Main;