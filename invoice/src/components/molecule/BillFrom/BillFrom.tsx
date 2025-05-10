import { Text } from "../../atom/Text/Text";
import Input from "../../atom/Input/Input";
import '../../organism/Form/Form.css'


const BillFrom = () => {
  return (
    <section>
      <Text variant="description" className="invoice--bill_from">
        Bill From
      </Text>
      <Input
        label="Street Address"
        id="streetAddress"
        name="streetAddress"
        value=""
      />
      <div className="invoice--bill_to-address">
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
      </div>
    </section>
  );
};

export default BillFrom;
