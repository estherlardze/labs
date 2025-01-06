import "./Form.css";
import { setOverlay } from "../../../store/features/overlaySlice";
import { Heading } from "../../atom/Heading/Heading";
import ItemList from "../../atom/ItemList/ItemList";
import BillFrom from "../../molecule/BillFrom/BillFrom";
import BillTo from "../../molecule/BillTo/BillTo";
import Footer from "../../molecule/Footer/Footer";
import { FormProvider, useForm } from "react-hook-form";
import { InvoiceProps, Item } from "../../../types/type";
import { initialData } from "../../../utils/constants";
import { DevTool } from "@hookform/devtools";
import { calculatePaymentDue } from "../../../utils";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import {
  addInvoice,
  selectLoading,
} from "../../../store/features/invoiceSlice";

const Invoice = () => {
  const dispatch = useAppDispatch();

  const form = useForm<InvoiceProps>({
    defaultValues: initialData,
    mode: "onTouched",
  });

  const { handleSubmit, control, getValues, setError, reset } = form;
  // const { errors } = formState;

  const calculateTotal = (items: Item[]) => {
    return items.reduce((acc, item) => {
      return acc + item.total;
    }, 0);
  };

  const calculateItemTotal = (items: Item[]) => {
    return items.map((item) => ({
      ...item,
      quantity: Number(item.quantity),
      price: Number(item.price),
      total: Number((item.quantity * item.price).toFixed(2)),
    }));
  };

  const onSubmit = (data: InvoiceProps) => {
    if (data.items.length === 0) {
      setError("items", {
        type: "manual",
        message: "At least one item is required",
      });
      return;
    }
    data.status = "pending";
    data.items = calculateItemTotal(data.items);
    data.total = calculateTotal(data.items);
    data.paymentDue = calculatePaymentDue(
      data.createdAt,
      data.paymentTerms ?? 1
    );

    dispatch(addInvoice(data)).then(() => {
      handleInvoiceClose();
    });
  };

  const handleSaveAsDraft = () => {
    const data = getValues();
    data.status = "draft";
    data.items = data.items ? calculateItemTotal(data.items) : [];
    data.total = data.items ? calculateTotal(data.items) : 0;
    data.paymentDue = calculatePaymentDue(
      data.createdAt,
      data.paymentTerms ?? 1
    );

    dispatch(addInvoice(data)).then(() => {
      handleInvoiceClose();
    });
  };

  const handleInvoiceClose = () => {
    reset();
    dispatch(setOverlay(false));
  };

  return (
    <section className="invoice--overlay" onClick={handleInvoiceClose}>
      <div className="invoice--container" onClick={(e) => e.stopPropagation()}>
        <FormProvider {...form}>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="invoice--form">
              <Heading variant="h3" className="new-invoice__heading">
                New Invoice
              </Heading>
              <BillFrom />
              <BillTo />
              <ItemList />
            </div>

            <Footer
              handleInvoiceClose={handleInvoiceClose}
              handleSaveAsDraft={handleSaveAsDraft}
            />
          </form>
        </FormProvider>
        <DevTool control={control} />
      </div>
    </section>
  );
};

export default Invoice;
