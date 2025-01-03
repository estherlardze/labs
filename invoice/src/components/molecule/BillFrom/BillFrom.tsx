import { Text } from "../../atom/Text/Text";
import Input from "../../atom/Input/Input";
import "../../organism/Form/Form.css";

const BillFrom = () => {
  return (
    <section>
      <Text variant="description" className="invoice--bill_from">
        Bill From
      </Text>
      <Input
        label="Street Address"
        id="streetAddress"
        name="senderAddress.street"
        validation={{ required: "" }}
      />
      <div className="invoice--bill_to-address">
        <Input
          label="City"
          id="city"
          name="senderAddress.city"
          validation={{ required: "" }}
          className="input--short"
        />
        <Input
          label="Post Code"
          id="postCode"
          name="senderAddress.postCode"
          validation={{ required: "" }}
          className="input--short"
        />
        <Input
          label="Country"
          id="country"
          name="senderAddress.country"
          validation={{ required: "" }}
          className="input--short"
        />
      </div>
    </section>
  );
};

export default BillFrom;
