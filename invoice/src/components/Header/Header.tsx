import { Heading } from "../ui/heading/Heading";
import { Text } from "../ui/text/Text";
import Button from "../ui/button/Button";
import { GoPlus } from "react-icons/go";
import "./Header.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import FilterCard from "./FilterCard";
import Invoice from "../newInvoice/Invoice";
import { setOverlay } from "../../store/features/invoiceSlice";

const Header = () => {
  const {invoices, overlay, filteredInvoices} = useSelector((state: RootState) => state.invoices);
  const [isArrowDown, setIsArrowDown] = useState(false);
  const dispatch = useDispatch();

  const handleArrowToggle = () => {
    setIsArrowDown(!isArrowDown);
  };

  const handleOverlayToggle = () => {
    dispatch(setOverlay(true));
  };

  return (
    <section className="header">
      <div>
        <Heading variant="h1" className="h1">
          Invoice
        </Heading>
        <Text variant="description">
          There are {filteredInvoices.length > 0 ? filteredInvoices.length : invoices.length} total invoices
        </Text>
      </div>

      <div className="header__filter">
        <article>
          <Button variant="transparent" onClick={handleArrowToggle}>
            Filter by status{" "}
            {isArrowDown ? (
              <IoIosArrowDown className="arrow" size={20} />
            ) : (
              <IoIosArrowUp className="arrow" size={20} />
            )}
          </Button>

          {isArrowDown && (
            // @ts-ignore
            <FilterCard invoices={invoices} />
          )}
        </article>
        <Button radius="rounded-full" onClick={handleOverlayToggle}>
          <div className="header__plus">
            <GoPlus size={20} />
          </div>
          <p className="header__button-text">New Invoice</p>
        </Button>
      </div>


      {overlay && <Invoice />}
    </section>
  );
};

export default Header;
