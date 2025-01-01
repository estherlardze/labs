import Input from "../../atom/Input/Input"
import { Text } from "../../atom/Text/Text"
import '../../organism/Form/Form.css'


const BillTo = () => {
  return (
    <section>
    
            <Text variant="description" className="invoice--bill_to">Bill To</Text>
    
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
    
            <div className="invoice--bill_to-address">
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
            </div>
    </section>
  )
}

export default BillTo
