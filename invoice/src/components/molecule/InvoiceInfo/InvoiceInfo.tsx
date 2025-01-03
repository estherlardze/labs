import { Text } from "../../atom/Text/Text";

type InfoProps = {
  item: string;
  text: string;
};

const InvoiceInfo = ({ item, text }: InfoProps) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
      <Text variant="description" className="invoice-info__date">
        {text}
      </Text>
      <Text variant="caption" className="invoice-info__date">
        {item}
      </Text>
    </div>
  );
};

export default InvoiceInfo;
