import Input from "../../atom/Input/Input";
import { Text } from "../../atom/Text/Text";
import "../../organism/Form/Form.css";

const BillTo = () => {
  return (
    <section>
      <Text variant="description" className="invoice--bill_to">
        Bill To
      </Text>

      <Input
        label="Client Name"
        id="clientName"
        name="clientName"
        validation={{ required: "" }}
      />
      <Input
        label="Client Email"
        id="clientEmail"
        name="clientEmail"
        validation={{ required: "can't be empty" }}
      />

      <Input
        label="Street Address"
        id="senderStreetAddress"
        name="clientAddress.street"
        validation={{ required: "" }}
      />

      <div className="invoice--bill_to-address">
        <Input
          label="City"
          id="city"
          name="clientAddress.city"
          validation={{ required: "" }}
          className="input--short"
        />
        <Input
          label="Post Code"
          id="postCode"
          name="clientAddress.postCode"
          validation={{ required: "h" }}
          className="input--short"
        />
        <Input
          label="Country"
          id="country"
          name="clientAddress.country"
          validation={{ required: "" }}
          className="input--short"
        />
      </div>

      <div className="invoice--bill_to-address">
        <Input
          label="Invoice Date"
          id="invoiceDate"
          name="createdAt"
          type="date"
          className="input--medium"
        />
        <Input
          label="Payment Terms"
          id="paymentTerms"
          name="paymentTerms"
          type="select"
          validation={{ required: "" }}
          className="input--medium"
        />
      </div>
    </section>
  );
};

export default BillTo;
