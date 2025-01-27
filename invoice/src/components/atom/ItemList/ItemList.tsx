import Input from "../Input/Input";
import { Text } from "../Text/Text";
import { MdDelete } from "react-icons/md";
import "./ItemList.css";
import Button from "../Button/Button";
import { HiMiniPlusSmall } from "react-icons/hi2";
import { useFieldArray, useFormContext } from "react-hook-form";
import { Errors, InvoiceProps } from "../../../types/type";

const ItemList = () => {
  const { fields, append, remove } = useFieldArray<InvoiceProps>({
    name: "items",
  });

  const {
    watch,
    // setValue,
    formState: { errors },
  } = useFormContext();

  const { items } = (errors as Errors) ?? [];

  return (
    <div>
      {fields.map((field, index) => {
        const qty = watch(`items[${index}].quantity`);
        const price = watch(`items[${index}].price`);
        return (
          <div className="item-list" key={field.id}>
            <Input
              label="Name"
              id="itemName"
              name={`items[${index}].name`}
              validation={{ required: "required" }}
              className="input--long"
              error={items?.[index]?.name?.message}
            />
            <Input
              label="Qty"
              id="itemPrice"
              name={`items[${index}].price`}
              validation={{
                required: "required",
                pattern: {
                  value: /^\d+$/,
                  message: "must be a number",
                } as const,
              }}
              className="input--mini"
              error={items?.[index]?.price?.message}
              type="number"
            />
            <Input
              label="Price"
              id="itemQuantity"
              name={`items[${index}].quantity`}
              validation={{
                required: "required",
                pattern: {
                  value: /^\d+(\.\d{1,2})?$/,
                  message: "Price must be a valid number",
                } as const,
              }}
              className="input--price"
              error={items?.[index]?.quantity?.message}
              type="number"
            />
            <div>
              <label htmlFor="total" className="label">
                Total
              </label>
              <Text>{(qty * price).toFixed(2)}</Text>
            </div>
            <Button onClick={() => remove(index)} variant="transparent">
              <MdDelete size={20} className="delete-icon" />
            </Button>
          </div>
        );
      })}
      <Button
        variant="secondary"
        radius="rounded-lg"
        className="add-item"
        onClick={() => append({ name: "", price: 0, quantity: 0, total: 0 })}
        type="button"
      >
        <HiMiniPlusSmall size={20} className="pluss--icon" />
        <Text variant="description">Add New Item</Text>
      </Button>
    </div>
  );
};

export default ItemList;
