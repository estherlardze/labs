import "./InvoiceCard.css";
import { InvoiceProps } from "../../../types/type";
import { useNavigate } from "react-router-dom";
import { Text } from "../../atom/Text/Text";
import Badge from "../../atom/Badge/Badge";
import arrowRight from "../../../assets/icon-arrow-right.svg";
import Icon from "../../atom/Icon/Icon";

interface Props {
  item: InvoiceProps;
}

const InvoiceCard = ({ item }: Props) => {
  const navigate = useNavigate();
  return (
    <button
      key={item.id}
      className="invoice__card"
      onClick={() => navigate(`/${item.id}`)}
    >
      <Text className="invoice__id" variant="span">
        <Text variant="description">#</Text> {item.id}
      </Text>
      <Text className="invoice__date">Due {item.createdAt}</Text>
      <Text className="invoice__client">{item.clientName}</Text>
      <Text className="invoice__total" variant="span">
        £{item.total ? item.total.toFixed(2) : "0.00"}
      </Text>
      <Badge color={item.status}>{item.status}</Badge>
      <Icon
        src={arrowRight}
        alt="arrow-right"
        size="xs"
        className="invoice__arrow"
      />
    </button>
  );
};

export default InvoiceCard;
