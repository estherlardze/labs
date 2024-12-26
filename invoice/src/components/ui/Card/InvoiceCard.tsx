import "./InvoiceCard.css";
import { InvoiceProps } from "../../../types/type";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { useSelector } from "react-redux";

interface Props {
  item: InvoiceProps;
}

const InvoiceCard = ({ item }: Props) => {

  return (
    <button key={item.id} className="invoice__card">
      <p className="invoice__id">#{item.id}</p>
      <p className="invoice__date">Due {item.createdAt}</p>
      <p className="invoice__client">{item.clientName}</p>
      <p className="invoice__total">£{item.total.toFixed(2)}</p>
      <span
        className={`invoice__status ${
          item.status === "paid"
            ? "status__paid"
            : item.status === "pending"
            ? "status__pending"
            : "status__draft"
        }`}
      >
        {item.status}
      </span>
      <Link to={`/${item.id}`}>
        <IoIosArrowForward size={18} className="invoice__arrow" />
      </Link>
    </button>
  );
};

export default InvoiceCard;
