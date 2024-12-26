import { Text } from "../../components/ui/text/Text";

const InvoiceInfo = ({item, text}: any) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
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


