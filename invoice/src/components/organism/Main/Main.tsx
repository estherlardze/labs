import "./Main.css";
import InvoiceCard from "../../molecule/Card/InvoiceCard";
import InvoiceCardSc from "../../molecule/Card/InvoiceCardSc";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { setScreenSize } from "../../../store/features/screenSizeSlice";
import {  useAppSelector } from "../../../hooks";
import {
  selectFilteredInvoices
} from "../../../store/features/invoiceSlice";

const Main = () => {
  const ismobile = useSelector((state: RootState) => state.screenSize.ismobile);
  const filteredInvoices = useAppSelector(selectFilteredInvoices);
 

  const renderCard = (item: any) => {
    if (ismobile) {
      return <InvoiceCardSc item={item} key={item.id} />;
    } else {
      return <InvoiceCard item={item} key={item.id} />;
    }
  };

  return (
    <div className="invoice__container">
      {filteredInvoices?.map((item) => renderCard(item))}
    </div>
  );
};

export default Main;
