import { useDispatch } from "react-redux";
import "./Form.css";
import { setOverlay } from "../../../store/features/invoiceSlice";
import { Heading } from "../../atom/Heading/Heading";
import Button from "../../atom/Button/Button";
import { Text } from "../../atom/Text/Text";
import { HiMiniPlusSmall } from "react-icons/hi2";
import ItemList from "../../atom/ItemList/ItemList";
import { useState } from "react";
import BillFrom from "../../molecule/BillFrom/BillFrom";
import BillTo from "../../molecule/BillTo/BillTo";

const Invoice = () => {
  const dispatch = useDispatch();
  const [addItem, setAddItem] = useState(false);

  const handleInvoiceClose = () => {
    dispatch(setOverlay(false));
  };

  const handleAddItem = () => {
    setAddItem(true);
  };


  return (
    <section className="invoice--overlay">
      <div className="invoice--container">
        <Heading variant="h3" className="new-invoice__heading">
          New Invoice
        </Heading>

        <BillFrom />

        <BillTo />

        <article>
          {addItem ? <ItemList /> : ""}

          <Button
            variant="primary"
            radius="rounded-lg"
            className="add-item"
            onClick={handleAddItem}
          >
            <HiMiniPlusSmall size={20} className="pluss--icon" />
            <Text variant="description">Add New Item</Text>
          </Button>
        </article>
        <button onClick={handleInvoiceClose}>Save</button>
      </div>
    </section>
  );
};

export default Invoice;
