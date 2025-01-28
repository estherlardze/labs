import EmptyPage from "./EmptyPage/EmptyPage";
import Main from "../components/organism/Main/Main";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/organism/Header/Header";
import { RootState } from "../store";
import { useGetPostsQuery } from "../store/post/PostApiSlice";
import { useEffect } from "react";
import { filterInvoice, selectStatusFilter, setInvoices } from "../store/features/invoiceSlice";
import { useAppSelector } from "../hooks";

const Home = () => {
  const { invoices } = useSelector((state: RootState) => state.invoices);
    const statusFilter = useAppSelector(selectStatusFilter);
  
   const { data, isLoading } = useGetPostsQuery({});
   const dispatch = useDispatch();
  
    useEffect(() => {
      if (!isLoading) {
        dispatch(setInvoices(data?.invoices));
      }
    }, [data, isLoading]);
  
    useEffect(() => {
      dispatch(filterInvoice());
    }, [statusFilter]);



  if ((invoices.length === 0) && (!isLoading)) {
    return <EmptyPage />;
  }

  return (
    <section className="main">
      <section className="main__container">
        <Header />
        <Main />
      </section>
    </section>
  );
};

export default Home;
