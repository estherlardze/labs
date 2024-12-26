import { Heading } from "../ui/heading/Heading";
import { Text } from "../ui/text/Text";
import Button from "../ui/button/Button";
import { GoPlus } from "react-icons/go";
import "./Header.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { InvoiceProps } from "../../types/type";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import FilterCard from "./FilterCard";

const Header = () => {
  const invoices: InvoiceProps[] = useSelector(
    (state: RootState) => state.invoices
  );
  const [isArrowDown, setIsArrowDown] = useState(true);

  const handleArrowToggle = () => {
    setIsArrowDown(!isArrowDown);
  };

  return (
    <section className="header">
      <div>
        <Heading variant="h1" className="h1">
          Invoice
        </Heading>
        <Text variant="description">
          There are {invoices.length} total invoices
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
            <FilterCard invoices={invoices} />
          )}
        </article>
        <Button radius="rounded-full">
          <div className="header__plus">
            <GoPlus size={20} />
          </div>
          <p className="header__button-text">New Invoice</p>
        </Button>
      </div>
    </section>
  );
};

export default Header;
