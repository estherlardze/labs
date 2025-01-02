import { RootState } from "../../../store";
import { Heading } from "../../atom/Heading/Heading";
import { Text } from "../../atom/Text/Text";
import { useSelector } from "react-redux";
import "../../organism/Header/Header.css";

const HeaderLeft = () => {
  const { invoices, filteredInvoices } = useSelector(
    (state: RootState) => state.invoices
  );
  const ismobile = useSelector((state: RootState) => state.screenSize.ismobile);

  return (
    <div>
      <Heading variant="h1" className="h1">
        Invoice
      </Heading>
      {ismobile ? (
        <Text variant="description">
          {filteredInvoices.length > 0
            ? filteredInvoices.length
            : invoices.length}{" "}
          invoices
        </Text>
      ) : (
        <Text variant="description">
          There are{" "}
          {filteredInvoices.length > 0
            ? filteredInvoices.length
            : invoices.length}{" "}
          total invoices
        </Text>
      )}
    </div>
  );
};

export default HeaderLeft;
