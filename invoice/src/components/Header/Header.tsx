import { Heading } from "../ui/heading/Heading";
import { Text } from "../ui/text/Text";
import Button from "../ui/button/Button";
import { GoPlus } from "react-icons/go";
import "./Header.css";

const Header = () => {
  return (
    <section className="header">
      <div>
        <Heading variant="h1" className="h1">Invoice</Heading>
        <Text variant="caption">There are 7 total invoices</Text>
      </div>

      <div className="header__filter">
        <article>
          <Text variant="caption">Filter by status</Text>
        </article>
        <Button radius="rounded-full">
          <div className="header__plus">
            <GoPlus size={20}/>
          </div>
          <p className="header__button-text">New Invoice</p>
        </Button>
      </div>
    </section>
  );
};

export default Header;
