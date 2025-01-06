import { useDispatch } from "react-redux";
import "./Form.css";
import { setOverlay } from "../../../store/features/overlaySlice";
import { Heading } from "../../atom/Heading/Heading";

import ItemList from "../../atom/ItemList/ItemList";
import BillFrom from "../../molecule/BillFrom/BillFrom";
import BillTo from "../../molecule/BillTo/BillTo";
import Footer from "../../molecule/Footer/Footer";
import { FormProvider, useForm } from "react-hook-form";
import { InvoiceProps } from "../../../types/type";
import { initialData } from "../../../utils/constants";
import { DevTool } from "@hookform/devtools";

const Invoice = () => {
  const dispatch = useDispatch();

  const form = useForm<InvoiceProps>({
    defaultValues: initialData,
    mode: "onTouched",
  });

  const { handleSubmit, control, getValues } = form;
  // const { errors } = formState;

  const onSubmit = (data: InvoiceProps) => {
    console.log("data", data);
  };

  const handleInvoiceClose = () => {
    dispatch(setOverlay(false));
  };

  return (
    <section className="invoice--overlay" onClick={handleInvoiceClose}>
      <div className="invoice--container" onClick={(e) => e.stopPropagation()}>
        <FormProvider {...form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="invoice--form">
              <Heading variant="h3" className="new-invoice__heading">
                New Invoice
              </Heading>
              <BillFrom />
              <BillTo />
              <ItemList />
            </div>

            <Footer handleInvoiceClose={handleInvoiceClose} />
          </form>
        </FormProvider>
        <DevTool control={control} />
      </div>
    </section>
  );
};

export default Invoice;
