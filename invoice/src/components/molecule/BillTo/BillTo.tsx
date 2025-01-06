import { Errors } from "../../../types/type";
import Icon from "../../atom/Icon/Icon";
import Input from "../../atom/Input/Input";
import { Text } from "../../atom/Text/Text";
import "../../organism/Form/Form.css";
import { useFormContext } from "react-hook-form";
import arrowdown from "../../../assets/icon-arrow-down.svg";
import calender from "../../../assets/icon-calendar.svg";
import Button from "../../atom/Button/Button";
import "./Billto.css";
import { useEffect, useState } from "react";
import Datepicker from "../Datepicker/Datepicker";

const BillTo = () => {
  const { setValue, getValues } = useFormContext();

  const [showSelect, setShowSelect] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(getValues("createdAt"));
  const [selectedOption, setSelectedOption] = useState<number>(
    getValues("paymentTerms")
  );

  const handleOptionSelect = (option: number) => {
    setSelectedOption(option);

    setValue("paymentTerms", option);
    setShowSelect(false);
  };

  const handleToggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    setValue("createdAt", date);
    setShowDatePicker(false);
  };

  const handleToggleSelect = () => {
    setShowSelect(!showSelect);
  };

  const customSelects = [1, 7, 14, 30];

  const {
    formState: { errors },
  } = useFormContext();
  const { clientName, clientEmail } = (errors as Errors) ?? {};
  const { street, postCode, city, country } =
    (errors["clientAddress"] as Errors) ?? {};

  useEffect(() => {
    const disablePopup = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (!target.closest(".payment-terms")) {
        setShowSelect(false);
      }

      if (!target.closest(".invoice-date")) {
        setShowDatePicker(false);
      }
    };

    document.addEventListener("click", disablePopup);
    const form = document.getElementsByTagName("form")[0];
    if (form) {
      form.addEventListener("click", disablePopup);
    }

    return () => {
      document.removeEventListener("click", disablePopup);

      if (form) {
        form.removeEventListener("click", disablePopup);
      }
    };
  }, []);

  return (
    <section>
      <Text variant="description" className="invoice--bill_to">
        Bill To
      </Text>

      <Input
        label="Client Name"
        id="clientName"
        name="clientName"
        showError
        validation={{
          required: "can't be empty",

          pattern: {
            value: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
            message: "can't contain numbers or symbols",
          },
        }}
        error={clientName?.message}
      />
      <Input
        label="Client Email"
        id="clientEmail"
        type="email"
        name="clientEmail"
        showError
        validation={{
          required: "can't be empty",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "invalid email address",
          },
        }}
        error={clientEmail?.message}
      />

      <Input
        label="Street Address"
        id="senderStreetAddress"
        showError
        name="clientAddress.street"
        validation={{ required: "can't be empty" }}
        error={street?.message}
      />

      <div className="invoice--bill_to-address">
        <Input
          label="City"
          id="city"
          name="clientAddress.city"
          validation={{ required: "" }}
          className="input--short"
          error={city?.message}
        />
        <Input
          label="Post Code"
          id="postCode"
          name="clientAddress.postCode"
          validation={{ required: "h" }}
          className="input--short"
          error={postCode?.message}
        />
        <Input
          label="Country"
          id="country"
          name="clientAddress.country"
          validation={{ required: "" }}
          className="input--short"
          error={country?.message}
        />
      </div>

      <div className="invoice--bill_to-address">
        <div className="invoice-date dropdown">
          <label htmlFor="invoiceDate" className="label">
            Invoice Date
          </label>
          <Button
            variant="transparent"
            className="selected--payment_terms"
            onClick={handleToggleDatePicker}
            type="button"
          >
            {selectedDate}
            <Icon src={calender} alt="arrow down" size="xs" />
          </Button>

          {showDatePicker && (
            <Datepicker
              handleSelection={handleDateSelect}
              selectedDate={selectedDate}
            />
          )}
        </div>

        <div className="payment-terms dropdown">
          <label htmlFor="paymentTerms" className="label">
            Payment Terms
          </label>
          <Button
            variant="transparent"
            className="selected--payment_terms"
            onClick={handleToggleSelect}
            type="button"
          >
            Net {selectedOption} day{selectedOption > 1 ? "s" : ""}
            <Icon src={arrowdown} alt="arrow down" size="xs" />
          </Button>

          {showSelect && (
            <div className="custom-select">
              {customSelects.map((item, index) => (
                <Button
                  variant="transparent"
                  onClick={() => handleOptionSelect(item)}
                  key={index}
                  className={`custom-select--item ${
                    item === selectedOption ? "selected" : ""
                  }`}
                  type="button"
                >
                  Net {item} day{item > 1 ? "s" : ""}
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BillTo;
