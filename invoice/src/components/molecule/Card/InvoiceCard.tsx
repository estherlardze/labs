import "./InvoiceCard.css";
import { InvoiceProps } from "../../../types/type";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { Text } from "../../atom/Text/Text";
import Badge from "../../atom/Badge/Badge";

interface Props {
  item: InvoiceProps;
}

const InvoiceCard = ({ item }: Props) => {

  return (
    <button key={item.id} className="invoice__card">
      <Text className="invoice__id" variant="span"><Text variant="description">#</Text> {item.id}</Text>
      <Text className="invoice__date">Due {item.createdAt}</Text>
      <Text className="invoice__client">{item.clientName}</Text>
      <Text className="invoice__total" variant="span">£{item.total.toFixed(2)}</Text>
      <Badge color={item.status}>{item.status}</Badge>
      <Link to={`/${item.id}`}>
        <IoIosArrowForward size={18} className="invoice__arrow" />
      </Link>
    </button>
  );
};

export default InvoiceCard;
