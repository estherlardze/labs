import {  useEffect } from "react";
import "./Main.css";
import InvoiceCard from "../../molecule/Card/InvoiceCard";
import InvoiceCardSc from "../../molecule/Card/InvoiceCardSc";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import {setScreenSize} from "../../../store/features/screenSizeSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { filterInvoice, selectFilteredInvoices, selectStatusFilter } from "../../../store/features/invoiceSlice";

const Main = () => {
  const ismobile = useSelector((state: RootState) => state.screenSize.ismobile);
  const filteredInvoices = useAppSelector(selectFilteredInvoices);
  const statusFilter = useAppSelector(selectStatusFilter)
  const dispatch = useAppDispatch();


  useEffect(() => {
    const handleResize = () => {
      dispatch(setScreenSize(window.innerWidth)); }

    window.addEventListener("resize", handleResize);

    handleResize()

    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch]);

 

  useEffect(() => {
    dispatch(filterInvoice())
  }, [statusFilter, dispatch]);


  const renderCard = (item: any) => {
    if (ismobile) {
      return <InvoiceCardSc item={item} key={item.id} />
    } else {
      return <InvoiceCard item={item} key={item.id} />
    }
  };

  return (
    <div className="invoice__container">
      {filteredInvoices.map((item) => renderCard(item))}
    </div>
  );
};

export default Main;
