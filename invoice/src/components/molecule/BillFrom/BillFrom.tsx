import { Text } from "../../atom/Text/Text";
import Input from "../../atom/Input/Input";
import "../../organism/Form/Form.css";
import { useFormContext } from "react-hook-form";
import { Errors } from "../../../types/type";


const BillFrom = () => {
 const {formState: {errors}} = useFormContext();

 console.log("errors", errors)

 const { street, postCode, city, country } = (errors["senderAddress"] as Errors) ?? {};

  return (
    <section>
      <Text variant="description" className="invoice--bill_from">
        Bill From
      </Text>
      <Input
        label="Street Address"
        id="streetAddress"
        name="senderAddress.street"
        validation={{ required: "can't be empty" }}
        error={street?.message}
        showError
      />
      <div className="invoice--bill_to-address">
        <Input
          label="City"
          id="city"
          name="senderAddress.city"
          validation={{ required: "required" }}
          className="input--short"
          error={city?.message}
        />
        <Input
          label="Post Code"
          id="postCode"
          name="senderAddress.postCode"
          validation={{ required: "required" }}
          className="input--short"
          error={postCode?.message}
        />
        <Input
          label="Country"
          id="country"
          name="senderAddress.country"
          validation={{ required: "required" }}
          className="input--short"
          error={country?.message}
        />
      </div>
    </section>
  );
};

export default BillFrom;
