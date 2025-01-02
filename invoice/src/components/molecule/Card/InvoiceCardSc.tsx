import "./InvoiceCard.css";
import { InvoiceProps } from "../../../types/type";
import { Link } from "react-router-dom";
import Badge from "../../atom/Badge/Badge";

interface Props {
  item: InvoiceProps;
}

const InvoiceCardSc = ({ item }: Props) => {
  return (
    <Link to={`/${item.id}`} className="invoice__Link ">
        <div className="invoice__info">
          <p className="invoice__id">#{item.id}</p>
          <p className="invoice__client">{item.clientName}</p>
        </div>

        <div className="invoice__details">
          <article>
            <p className="invoice__date">Due {item.createdAt}</p>
            <p className="invoice__total">£ {" "} {item.total.toFixed(2)}</p>
          </article>
          <Badge color={item.status}>{item.status}</Badge>

         
        </div>
    </Link>
  );
};

export default InvoiceCardSc;
