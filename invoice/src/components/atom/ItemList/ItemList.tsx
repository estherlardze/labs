import Input from "../Input/Input";
import { Text } from "../Text/Text";
import { MdDelete } from "react-icons/md";
import "./ItemList.css";
import Button from "../Button/Button";
import { HiMiniPlusSmall } from "react-icons/hi2";
import { useFieldArray } from "react-hook-form";
import { InvoiceProps } from "../../../types/type";

const ItemList = () => {
  const { fields, append, remove } = useFieldArray<InvoiceProps>({
    name: "items",
  });

  console.log(fields);
  return (
    <div>
      {fields.map((field, index) => (
        <div className="item-list" key={field.id}>
          <Input
            label="Name"
            id="itemName"
            name={`items[${index}].name`}
            validation={{ required: "" }}
            className="input--long"
          />
          <Input
            label=""
            id="itemPrice"
            name={`items[${index}].price`}
            validation={{ required: "" }}
            className="input--mini"
          />
          <Input
            label=""
            id="itemQuantity"
            name={`items[${index}].quantity`}
            validation={{ required: "" }}
            className="input--price"
          />
          <div>
            <Text>Item Total: </Text>
            totalPrice
          </div>
          <Button onClick={() => remove(index)} variant="transparent">
            <MdDelete size={20} className="delete-icon" />
          </Button>
        </div>
      ))}
      <Button
        variant="secondary"
        radius="rounded-lg"
        className="add-item"
        onClick={() => append({ name: "", price: 0, quantity: 0, total: 0 })}
      >
        <HiMiniPlusSmall size={20} className="pluss--icon" />
        <Text variant="description">Add New Item</Text>
      </Button>
    </div>
  );
};

export default ItemList;
