import { useDispatch } from "react-redux";
import "./Invoice.css";
import { setOverlay } from "../../store/features/invoiceSlice";
import Input from "../ui/Input/Input";
import { Heading } from "../ui/heading/Heading";
import Button from "../ui/button/Button";
import { Text } from "../ui/text/Text";
import { HiMiniPlusSmall } from "react-icons/hi2";
import ItemList from "../ui/itemList/ItemList";
import { useState } from "react";

const Invoice = () => {
  const dispatch = useDispatch();
  const [addItem, setAddItem] = useState(false);

  const handleInvoiceClose = () => {
    dispatch(setOverlay(false));
  };

  const handleAddItem = () => {
    setAddItem(true);
  };

  // FormField
    // Input  

  return (
    <section className="invoice--overlay">
      <div className="invoice--container">
        <Heading variant="h3" className="new-invoice__heading">
          New Invoice
        </Heading>

        <Text variant="description" className="invoice--bill_from">Bill From</Text>
        <Input
          label="Street Address"
          id="streetAddress"
          name="streetAddress"
          value=""
        />
        <article className="invoice--bill_to-address">
          <Input
            label="City"
            id="city"
            name="city"
            value=""
            className="input--short"
          />
          <Input
            label="Post Code"
            id="postCode"
            name="postCode"
            value=""
            className="input--short"
          />
          <Input
            label="Country"
            id="country"
            name="country"
            value=""
            className="input--short"
          />
        </article>

        <p className="invoice--bill_to">Bill To</p>

        <Input label="Client Name" id="clientName" name="clientName" value="" />
        <Input
          label="Client Email"
          id="clientEmail"
          name="clientEmail"
          value=""
        />

        <Input
          label="Street Address"
          id="senderStreetAddress"
          name="senderStreetAddress"
          value=""
        />

        <article className="invoice--bill_to-address">
          <Input
            label="City"
            id="city"
            name="city"
            value=""
            className="input--short"
          />
          <Input
            label="Post Code"
            id="postCode"
            name="postCode"
            value=""
            className="input--short"
          />
          <Input
            label="Country"
            id="country"
            name="country"
            value=""
            className="input--short"
          />
        </article>

        <article className="invoice--bill_to-address">
          <Input
            label="Invoice Date"
            id="invoiceDate"
            name="invoiceDate"
            type="date"
            value=""
            className="input--medium"
          />
          <Input
            label="Payment Terms"
            id="paymentTerms"
            name="paymentTerms"
            type="select"
            value=""
            className="input--medium"
          />
        </article>

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
