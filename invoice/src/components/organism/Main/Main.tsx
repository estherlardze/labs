import {  useEffect } from "react";
import "./Main.css";
import InvoiceCard from "../../molecule/Card/InvoiceCard";
import InvoiceCardSc from "../../molecule/Card/InvoiceCardSc";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import {setScreenSize} from "../../../store/features/screenSizeSlice";

const Main = () => {
  const invoices = useSelector((state: RootState) => state.invoices.invoices);
  const ismobile = useSelector((state: RootState) => state.screenSize.ismobile);
  const filteredInvoices = useSelector( (state: RootState) => state.invoices.filteredInvoices);
  const dispatch = useDispatch();


  useEffect(() => {
    const handleResize = () => {
      dispatch(setScreenSize(window.innerWidth));
    }

    window.addEventListener("resize", handleResize);

    handleResize()

    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch]);


  const invoicesToDisplay =
    filteredInvoices.length > 0 ? filteredInvoices : invoices;


  const renderCard = (item: any) => {
    if (ismobile) {
      return <InvoiceCardSc item={item} key={item.id} />
    } else {
      return <InvoiceCard item={item} key={item.id} />
    }
  };

  return (
    <div className="invoice__container">
      {invoicesToDisplay.map((item) => renderCard(item))}
    </div>
  );
};

export default Main;
